/// <reference path="../../BaseView.tsx" />
import {BaseView} from "../../BaseView";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";

import view, {IProps, IState} from "../view";
import {fitGradient} from 'dont-crop';
import {ImagePrintMode} from "../../../constants/ImagePrintMode";
import ViewportImpl from "../../viewport/impl/ViewportImpl";
import {ImageParameters} from "../../../interface/image/ImageParameters";
import {FrameType} from "../../../constants/FrameType";
import {v4 as uuidv4} from "uuid";
import config from "../../../config/config.json";
import {ImageActions} from "../../../interface/image/ImageActions";
import {ImageTile} from "../ImageTile";
import OptionsHandler from "../../../utils/OptionsHandler";
import {PreselectedOption} from "../../../interface/options/PreselectedOption";
import {Constants} from "../../../constants/Constants";
import {OptionItem} from "../../../interface/options/OptionItem";
import Swal from "sweetalert2";
import {t} from "../../../i18n/i18n";
import {debounce, delay} from "decorators-ts";
import CropEndEvent = Cropper.CropEndEvent;
import SetDataOptions = Cropper.SetDataOptions;
import Application from "../../../Application";
import {Commands} from "../../../constants/Commands";
import {showInfoToast} from "../../../utils/utils";
import {Viewport} from "../../viewport/Viewport";


export class ImageTileImpl extends BaseView<IProps, IState> implements ImageTile {
    private image: HTMLImageElement = new Image();
    private cropper: Cropper | null = null;
    private viewState: IState | null = null;
    private isMounted: boolean = false;
    private viewport: Viewport;
    private scale = ViewportImpl.zoomFactor;
    //private isVisible: boolean = false;
    public uuid: string = uuidv4();
    selectedOptionsMap = new Map<string, OptionItem>();
    //private options: Map<string, Option>;

    private imageParameters: ImageParameters;

    private imageActionsListeners?: ImageActions;

    constructor(container: HTMLElement, parameters: ImageParameters, viewport: Viewport) {
        super(container);
        if (!parameters.src || !parameters.src.thumbnail) {
            throw new Error("No thumbnail");
        }

        this.viewport = viewport;
        this.imageParameters = parameters;
        //this.selectedOptionsMap = new Map(parameters.selectedOptions);
    }


    /**
     * Triggered when {@link BaseView.mountView} of base view is called
     * @param state of the component view
     */
    protected onMountView(state: IState) {
        this.viewState = state;


        this.imageParameters = this.imageParameters.clone();

        //this.isVisible = true;
        this.image = this.getImage();

        this.image.onload = () => {
            if (!this.isMounted) {
                this.renderTile();

                // go through previously selected option and generate options map for rendering
                this.imageParameters.selectedOptions.forEach(option => {
                    const handledOptionResult = OptionsHandler.buildOptionsMapFromSelectedOptionsIds(this.imageParameters.options, this.selectedOptionsMap, option);
                    if (handledOptionResult) {
                        this.imageParameters.options = handledOptionResult.updatedOptions;
                    }
                });

                if (this.image.naturalWidth / this.image.naturalHeight > 1) {
                    this.imageParameters.rotate = 90;
                }

                // notify view about new options map
                this.reRenderOptions();
                // set status as mounted
                this.isMounted = true;
            }
        }

    }

    private isVisible(): boolean {
        return this.getContainer().isConnected;
    }

    public updateParameters(selectedOption: PreselectedOption, parameters?: ImageParameters): string | undefined {


        // check if global option has conflict with already selected another option
        // check conflict only if option has been selected and tile is mounted
        // e.g. option should be checked if tile has been mounted and individual option has been checked
        if (selectedOption.checked && this.isMounted) {
            const relationOptionsAll = this.imageParameters.options.get(selectedOption.option_id)!.option_values_map.get(selectedOption.option_value_id)!.relation_options;
            let hasConflicts = false;
            for (let [key, value] of this.selectedOptionsMap) {

                if (key === selectedOption.option_id) {
                    continue;
                }

                let relationOption = relationOptionsAll.filter(i => i.option_id == key);
                if (relationOption.length > 0 && relationOption[0].option_value_id.indexOf(value.option_value_id) < 0) {
                    this.showOptionConflictDialog();
                    this.viewState?.setOptionsConflict(true);
                    hasConflicts = true;
                    return this.uuid;
                }
            }

            this.viewState?.setOptionsConflict(false);
        }


        // update list with selected options
        this.onOptionChanged(selectedOption, true);

        const handledOptionResult = OptionsHandler.buildOptionsMapFromSelectedOptionsIds(this.imageParameters.options, this.selectedOptionsMap, selectedOption)

        // finish flow if the result is undefined
        if (!handledOptionResult) {
            return;
        }

        this.imageParameters.options = handledOptionResult.updatedOptions;


        // update image parameters based on selected option label
        switch (handledOptionResult.affectedOption.label) {
            // update frame type
            case Constants.FRAME_OPTION_LABEL:
                this.imageParameters.frame.type = !selectedOption.checked ? FrameType.NONE : handledOptionResult.affectedOptionItem.label as FrameType;
                //this.setFrameType(this.imageParameters.frame.type);
                break;
            // update print mode
            case Constants.PRINT_MODE_OPTION_LABEL:
                this.imageParameters.imagePrintMode = !selectedOption.checked ? ImagePrintMode.CROP : handledOptionResult.affectedOptionItem.label as ImagePrintMode;
                //this.setMode(this.imageParameters.imagePrintMode);
                break;
            // update image size
            case Constants.SIZE_OPTION_LABEL:
                this.imageParameters.size = {
                    width: parseInt(handledOptionResult.affectedOptionItem.value[0]),
                    height: parseInt(handledOptionResult.affectedOptionItem.value[1])
                }
                //this.setAspectRatio(this.imageParameters.size.width, this.imageParameters.size.height)
                break;


        }


        // do not re-render options until image tile is visible
        if (!this.isVisible()) {
            return;
        }

        switch (handledOptionResult.affectedOption.label) {
            // update frame type
            case Constants.FRAME_OPTION_LABEL:
                this.imageParameters.frame.type = !selectedOption.checked ? FrameType.NONE : handledOptionResult.affectedOptionItem.label as FrameType;
                this.setFrameType(this.imageParameters.frame.type);
                break;
            // update print mode
            case Constants.PRINT_MODE_OPTION_LABEL:
                this.imageParameters.imagePrintMode = !selectedOption.checked ? ImagePrintMode.CROP : handledOptionResult.affectedOptionItem.label as ImagePrintMode;
                this.setMode(this.imageParameters.imagePrintMode);
                break;
            // update image size
            case Constants.SIZE_OPTION_LABEL:
                this.imageParameters.size = {
                    width: parseInt(handledOptionResult.affectedOptionItem.value[0]),
                    height: parseInt(handledOptionResult.affectedOptionItem.value[1])
                }
                this.setAspectRatio(this.imageParameters.size.width, this.imageParameters.size.height)
                break;


        }

        // notify view to re-render options
        this.reRenderOptions();

    }

    @delay<ImageTileImpl>(100)
    reRenderOptions() {
        this.viewState?.setOptions(this.imageParameters.options);
    }

    private showOptionConflictDialog() {
        Swal.fire({
            title: t('confirmation.warning'),
            text: t('tile.optionConflictWarning'),
            icon: 'info',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: t('confirmation.ok'),
            cancelButtonText: t('confirmation.no')
        }).then((result) => {
        })
    }

    public show(): HTMLElement {

        if (!this.isMounted) {
            const props = {
                src: this.imageParameters.src.thumbnail,
                uid: this.uuid,
                onFrameColorChanged: this.setFrameColor.bind(this),
                onFrameWeightChanged: this.setFrameWeight.bind(this),
                onFrameTypeChanged: this.setFrameType.bind(this),
                cloneTile: this.cloneTile.bind(this),
                deleteTile: this.deleteTile.bind(this),
                setImageMode: this.setMode.bind(this),
                onAspectRatioChanged: this.setAspectRatio.bind(this),
                selectedOptionsMap: this.selectedOptionsMap,
                adjustedImageSrc: this.imageParameters.src.adjusted,
                onChangeColorEnhanceProperties: this.setColorEnhanceProperties.bind(this),
                onOptionChanged: this.onOptionChanged.bind(this),
                onQuantityChanged: this.onQuantityChanged.bind(this),
                onRotate: this.onRotate.bind(this)
            };
            //const ser = this.imageParameters.options?.toJson();
            // console.log( this.imageParameters.options);
            //console.log(deflate(this));
            //console.log(inflate(ImageTileImpl, deflate(this)));
            this.mountView(view, props);
        } else {
            this.renderTile();
        }


        return this.getContainer();
    }

    @delay<ImageTileImpl>(100)
    renderTile() {
        // inject tile html to viewport
        //this.viewport.getContainer().append(this.getContainer())
        //let mode: ImagePrintMode = this.imageParameters.imagePrintMode || ImagePrintMode.CROP;
        this.setMode(this.imageParameters.imagePrintMode);
        this.setFrameType(this.imageParameters.frame.type);
        this.setFrameWeight(this.imageParameters.frame.thickness);
        this.setFrameColor(this.imageParameters.frame.color);
        this.detectColorPalette(this.imageParameters.detectAndFillWithGradient || false);
        //this.setAspectRatio(this.imageParameters.size.width, this.imageParameters.size.height);
        this.setColorEnhanceProperties(
            this.imageParameters.autoColorEnhance,
            this.imageParameters.colorAdjustment.saturation,
            this.imageParameters.colorAdjustment.brightness,
            this.imageParameters.colorAdjustment.contrast
        )

        this.viewState?.setAtoColorEnhance(this.imageParameters.autoColorEnhance);
        this.viewState?.setSaturation(this.imageParameters.colorAdjustment.saturation);
        this.viewState?.setBrightness(this.imageParameters.colorAdjustment.brightness);
        this.viewState?.setContrast(this.imageParameters.colorAdjustment.contrast);

        this.adjustTileScale();
        this.scale = ViewportImpl.zoomFactor;

        // render options list
        this.reRenderOptions();
    }

    public copyImageParameter(): ImageParameters {
        return this.imageParameters.clone();
    }

    cloneTile() {
        //Application.INVOKER.execute({type: Commands.CLONE_TILE, payload: this.uuid});
        if (this.imageActionsListeners) {
            this.imageActionsListeners.onClone(this.uuid);
        }
    }

    deleteTile() {
        Swal.fire({
            title: t('confirmation.areYouSure'),
            text: t('confirmation.cantUndone'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: t('confirmation.yes'),
            cancelButtonText: t('confirmation.no')
        }).then((result) => {
            if (result.isConfirmed) {
                this.imageActionsListeners?.onDelete(this.uuid);
            }
        })
    }

    public registerListeners(imageActionsListeners: ImageActions) {
        this.imageActionsListeners = imageActionsListeners;
    }

    /**
     * Change aspect ratio for image
     *
     * @param width
     * @param height
     */
    public setAspectRatio(width: number, height: number) {
        this.imageParameters.size.width = width;
        this.imageParameters.size.height = height;
        this.setMode(this.imageParameters.imagePrintMode!)
    }

    private adjustTileScale() {
        let container = this.getContainer();
        let tileContainer = this.getTileContainer();

        const tileSize = ViewportImpl.initialSize * ViewportImpl.zoomFactor;

        container.style.width = `${tileSize}px`;
        tileContainer.style.width = `${tileSize}px`;
        tileContainer.style.height = `${tileSize}px`;

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            const imageContainer = this.getImageContainer();
            imageContainer.style.height = `${tileSize}px`;
            imageContainer.style.width = `${tileSize}px`;
            // @ts-ignore
            if (this.scale !== ViewportImpl.zoomFactor && this.cropper?.ready) {
                this.scale = ViewportImpl.zoomFactor;
                setTimeout(() => {
                    // @ts-ignore
                    this.cropper?.resize();
                }, 10)
            }

        } else {
            this.setFullImageMode();
        }
    }

    private onOptionChanged(changedOption: PreselectedOption, isGlobalOptionChanged?: boolean) {
        if (changedOption.checked) {
            this.imageParameters.selectedOptions = this.imageParameters.selectedOptions.filter(i => i.option_id !== changedOption.option_id);
            this.imageParameters.selectedOptions.push({
                option_id: changedOption.option_id,
                option_value_id: changedOption.option_value_id,
                checked: changedOption.checked
            })
        } else {
            this.imageParameters.selectedOptions = this.imageParameters.selectedOptions.filter(i => i.option_id !== changedOption.option_id);
        }
        if (!isGlobalOptionChanged) {
            Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED, payload: {}});
        }
    }

    private onQuantityChanged(quantity: number) {
        this.imageParameters.quantity = quantity;
        Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED, payload: {}});
    }

    private onRotate() {
        if (this.imageParameters.rotate === 0) {
            this.imageParameters.rotate = 90;
        } else {
            this.imageParameters.rotate = 0;
        }

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            /* const tmpH = this.imageParameters.size.height;
             const tmpW = this.imageParameters.size.width;
             this.imageParameters.size.height = tmpW;
             this.imageParameters.size.width = tmpH;*/

            this.hideCropperControls();
            this.cropper?.setAspectRatio(this.getAspectRatio());
            this.cropper?.setData(this.imageParameters.cropData!);
            this.checkQuality();
            this.detectBestFrame();
        } else {
            const container = this.getImageContainer();
            this.getImage().style.display = "block";
            this.removeClass(this.getImage(), "cropper-hidden");
            const tileSize = ViewportImpl.initialSize * ViewportImpl.zoomFactor;

            // portrait mode

            if ((this.imageParameters.rotate === 0 && this.getImageAspectRatio() < 1) || (this.imageParameters.rotate === 90 && this.getImageAspectRatio() >= 1)) {
                container.style.width = `${tileSize * this.getAspectRatio()}px`;
                container.style.height = '100%';
            } else {
                container.style.height = `${tileSize * this.getAspectRatio()}px`;
                container.style.width = '100% ';
            }
        }

    }

    private async setColorEnhanceProperties(autoEnhance: boolean, saturation: number, brightness: number, contrast: number) {
        let newUrl: string = this.imageParameters.src.thumbnail;

        if (autoEnhance && this.imageParameters.src.adjusted) {
            newUrl = this.imageParameters.src.adjusted;
        } else if (autoEnhance) {
            newUrl = await this.generateColorEnhancedImage();
        }

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            this.cropper?.replace(newUrl, true);
        } else {
            this.image.src = newUrl;
        }

        this.imageParameters.autoColorEnhance = autoEnhance;
        this.imageParameters.colorAdjustment = {saturation, brightness, contrast};

    }

    private generateColorEnhancedImage() {
        this.viewState?.setLoaded(false);
        showInfoToast(t('colorEnhanceInProgress'));
        return new Promise((resolve: (value: string) => void, reject) => {
            // Create an XMLHttpRequest object
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {

                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    const url = JSON.parse(xhr.response)['url']
                    this.viewState?.setLoaded(true);
                    this.imageParameters.src.adjusted = url;
                    this.viewState?.setAdjustedImageSrc(url);
                    resolve(url);
                } else if (xhr.readyState == XMLHttpRequest.DONE) {
                    this.viewState?.setLoaded(true);
                    //this.showErrorMessage(t('unexpectedError'))
                    resolve(this.imageParameters.src.adjusted || '');
                }
            }


            xhr.open("POST", Application.CONFIG.backendUrl);
            xhr.setRequestHeader("Content-type", "application/json");

            // @ts-ignore
            xhr.send(JSON.stringify({"url": this.imageParameters.src.thumbnail}));
        })

    }

    /**
     * Update image mode
     *
     * @param imagePrintMode
     */
    public setMode(imagePrintMode: ImagePrintMode) {
        this.imageParameters.imagePrintMode = imagePrintMode;
        if (!this.isVisible()) {
            return;
        }

        if (imagePrintMode == ImagePrintMode.CROP) {
            this.setCroppImageMode();
        } else {
            this.setFullImageMode();
        }
    }

    /**
     * Change image mode to {@link ImagePrintMode.CROP}
     *
     * @private
     */
    private async setCroppImageMode() {

        if (!this.image) {
            return;
        }
        this.clearColorPalette();

        const container = this.getImageContainer();
        const tileSize = ViewportImpl.initialSize * ViewportImpl.zoomFactor;
        container.style.height = `${tileSize}px`;
        container.style.width = `${tileSize}px`;

        if (!this.cropper) {
            this.viewState?.setLoaded(false);
            this.cropper = await this.initCropper(this.image, this.imageParameters);

            // hide loader
            this.viewState?.setLoaded(true);

            // set cropper zoom if exists
            if (this.imageParameters.zoom) {
                this.cropper?.zoomTo(this.imageParameters.zoom || 0);
            }

            // set cropper canvas data if exists
            if (this.imageParameters.canvasData) {
                this.cropper?.setCanvasData(this.imageParameters.canvasData)
            }

            // set cropper area size and position if exists
            if (this.imageParameters.cropData) {
                this.cropper?.setData(this.imageParameters.cropData as SetDataOptions || null);
            }
            // else detect crop area automatically
            else {
                this.detectBestFrame();
            }
        } else {
            this.cropper?.setAspectRatio(this.getAspectRatio());
            // @ts-ignore
            this.cropper?.cropper.style.display = "block";
            this.addClass(this.getImage(), "cropper-hidden");

            if (this.imageParameters.cropData) {
                this.cropper?.setData(this.imageParameters.cropData!);
            }
            // @ts-ignore
            //this.cropper?.resize();
            this.imageParameters.cropData = this.cropper?.getData();
            this.detectBestFrame();
        }
        //this.hideCropperControls();
        this.checkQuality();
        this.renderFrame();
    }

    private initCropper(image: HTMLImageElement, imageParameters: ImageParameters) {
        const that = this;

        return new Promise((resolve: (value: Cropper | null) => void, reject) => {
            let cropper = new Cropper(image, {
                aspectRatio: this.getAspectRatio(),
                viewMode: 2,
                dragMode: 'move',
                scalable: false,
                checkCrossOrigin: false,
                data: this.imageParameters.cropData as SetDataOptions || null,
                autoCropArea: 1,
                autoCrop: true,
                movable: true,
                modal: true,
                crop(event) {
                    //that.cropData = event.detail;
                },
                zoom(event) {
                    that.imageParameters.zoom = event.detail.ratio;
                    that.onCropperDataChanged.call(that);
                },
                cropmove(event: Cropper.CropMoveEvent<HTMLImageElement>) {
                    that.onCropperDataChanged.call(that);
                },

                cropend(event: CropEndEvent) {
                    that.onCropperDataChanged.call(that);
                },
                ready() {
                    resolve(cropper);
                }
            });
        });
    }

    @debounce<ImageTileImpl>(200)
    onCropperDataChanged() {
        this.imageParameters.cropData = this.cropper?.getData();
        this.imageParameters.canvasData = this.cropper?.getCanvasData();
        this.imageParameters.autoDetectBestFrame = false;
        this.checkQuality();
    }

    private hideCropperControls() {
        const cropperControls = this.getPlainDomElement().getElementsByClassName('cropper-crop-box')[0] as HTMLElement;
        //cropperControls.style.opacity = '0';
    }

    private showCropperControls() {
        const cropperControls = this.getPlainDomElement().getElementsByClassName('cropper-crop-box')[0] as HTMLElement;
        // cropperControls.style.opacity = '1';
    }

    /**
     * Change image mode to {@link ImagePrintMode.FULL}
     *
     * @private
     */
    private setFullImageMode() {
        // hide cropper
        // @ts-ignore
        this.cropper?.cropper.style.display = "none";
        const imageWidth = this.getImage().naturalWidth;
        const imageHeight = this.getImage().naturalHeight;
        const container = this.getImageContainer();
        // show regular image
        this.getImage().style.display = "block";
        this.removeClass(this.getImage(), "cropper-hidden");
        const tileSize = ViewportImpl.initialSize * ViewportImpl.zoomFactor;

        // if rotation is not set and image has portrait mode
        // set rotation to 90 deg
        if (this.imageParameters.rotate === undefined && imageWidth / imageHeight < 1) {
            //this.imageParameters.rotate = 90;
        }

        // determine the width and high of the image container
        if (this.getAspectRatio() < 1) {
            // portrait mode
            if ((this.imageParameters.rotate === 90 && imageWidth / imageHeight < 1) || (this.imageParameters.rotate === 0 && imageWidth / imageHeight < 1)) {
                container.style.width = `${tileSize * this.getAspectRatio()}px`;
                container.style.height = '100%';
            } else {
                container.style.height = `${tileSize * this.getAspectRatio()}px`;
                container.style.width = '100% ';
            }

        } else {
            container.style.height = `${tileSize * this.getAspectRatio()}px`;
            container.style.width = `${tileSize * this.getAspectRatio()}px`;
        }
        this.viewState?.setLoaded(true);
        this.detectColorPalette(this.imageParameters.detectAndFillWithGradient);
        this.checkQuality();
        this.renderFrame();
    }


    /**
     * Check if the photo suits to the selected size
     *
     * @private
     */
    @delay<ImageTileImpl>(500)
    public checkQuality() {
        this.viewState?.setBadPhotoQuality(false);
        const size = this.imageParameters.size;
        // get min allowed size for selected print format
        // @ts-ignore
        //const minRequiredSize = config.sizeQualityMap[`${size.width}x${size.height}`] || config.sizeQualityMap[`${size.height}x${size.width}`];
        // TODO: replace with predefined values
        const minRequiredSize = {
            minWidth: this.imageParameters.size.width * 2.8,
            minHeight: this.imageParameters.size.height * 2.8,
        }
        if (!minRequiredSize || !this.imageParameters.resolution) {
            return;
        }

        // get image resolution from parameters
        const imageSize = {
            width: this.imageParameters.resolution[0],
            height: this.imageParameters.resolution[1]
        }

        // check quality for CROP mode
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            if (!this.imageParameters.cropData) {
                return;
            }
            // since cropper area operates with thumbnail size but not with full image size
            // introduce coefficient for correcting cropper area
            const kW = +imageSize.width / this.getImage().naturalWidth;
            const kH = +imageSize.height / this.getImage().naturalHeight;

            let poorQuality = false;
            // check quality if the image hasn't been rotated
            if (this.getAspectRatio() < 1) {
                poorQuality = this.imageParameters.cropData.width * kW < minRequiredSize.minWidth || this.imageParameters.cropData.height * kH < minRequiredSize.minHeight;
            } else {
                poorQuality = this.imageParameters.cropData.width * kW < minRequiredSize.minHeight || this.imageParameters.cropData.height * kH < minRequiredSize.minWidth;
            }

            this.viewState?.setBadPhotoQuality(poorQuality);
        }
        // check quality for FULL mode
        else {
            if (imageSize.width < minRequiredSize.minWidth || imageSize.height < minRequiredSize.minHeight) {
                this.viewState?.setBadPhotoQuality(true);
            }
        }
    }

    /**
     * Update zoom
     */
    public updateZoom(): void {
        this.adjustTileScale();
        this.scale = ViewportImpl.zoomFactor;
    }


    public serializeState(): any {
        if (this.imageParameters.selectedOptions.length < this.imageParameters.options.size) {
            //this.viewState?.setBadPhotoQuality(true)
        }
        // convert to percents
        if (this.isMounted && this.imageParameters.imagePrintMode == ImagePrintMode.CROP) {
            const cropData = this.cropper?.getData(false);
            let cropDataForRender: Cropper.Data = {
                x: 0, y: 0, width: 0, height: 0, rotate: 0, scaleX: 0, scaleY: 0
            };
            const image = this.getImage();
            const imageWidth = image.naturalWidth;
            const imageHeight = image.naturalHeight;

            cropDataForRender.width = parseFloat((cropData!.width / imageWidth * 100).toFixed(3));
            cropDataForRender.x = parseFloat((cropData!.x / imageWidth * 100).toFixed(3));
            cropDataForRender.height = parseFloat((cropData!.height / imageHeight * 100).toFixed(3));
            cropDataForRender.y = parseFloat((cropData!.y / imageHeight * 100).toFixed(3));
            this.imageParameters.cropDataForRender = cropDataForRender;
        }

        return this.imageParameters.serialize();
    }

    public shallowSerialize() {
        return this.imageParameters.shallowSerialize()
    }

    public getTileContainer(): HTMLElement {
        return this.getContainer().getElementsByClassName("image-tile-wrapper")[0] as HTMLElement;
    }

    public getImageContainer(): HTMLElement {
        return this.getContainer().getElementsByClassName("image-container")[0] as HTMLElement;
    }

    public getImage(): HTMLImageElement {
        return this.getContainer().getElementsByTagName("img")[0];
    }

    /**
     * Detect the best frame of the image, moving and scaling frame
     */
    @delay<ImageTileImpl>(50)
    public detectBestFrame(): void {
        if (!this.isVisible() || !this.imageParameters.autoDetectBestFrame) {
            this.showCropperControls();
            return;
        }

        let width = this.imageParameters.size.height;
        let height = this.imageParameters.size.width;
        if (this.getImage().naturalWidth / this.getImage().naturalHeight < 1) {
            // width = this.state.size.h;
            //height = this.state.size.w;
        }

        //const size = Math.max(this.getImage().naturalWidth, this.getImage().naturalHeight);
        let size = {width: this.imageParameters.size.width, height: this.imageParameters.size.height};

        if (this.getAspectRatio() > 1) {
            size = {width: this.imageParameters.size.height, height: this.imageParameters.size.width};
        }
        smartcrop.crop(this.getImage(), size).then((result) => {
            //console.log(result);
            this.cropper?.setData(result.topCrop);
            this.showCropperControls();
            // this.detectColorPalette();
            this.imageParameters.cropData = result.topCrop as Cropper.Data;

            this.viewState?.setLoaded(true);
        });
    }

    /**
     * Reset cropper plugin
     */
    public resetCropper() {
        this.cropper?.reset();
    }

    /**
     * Re-render frame
     */
    public renderFrame() {
        this.setFrameType(this.imageParameters.frame.type || FrameType.NONE)
        if (this.imageParameters.frame && this.viewState && this.imageParameters.frame.type != FrameType.NONE) {

            this.setFrameColor(this.imageParameters.frame.color)
            this.setFrameWeight(this.imageParameters.frame.thickness)
        }
    }

    /**
     * Set frame type
     *
     * @param type
     */
    public setFrameType(type: FrameType) {
        this.imageParameters.frame.type = type;
        if (!this.isVisible()) {
            return;
        }
        let frameElement: HTMLElement;
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            frameElement = this.getPlainDomElement().getElementsByClassName('cropper-face')[0] as HTMLElement;
        } else {
            frameElement = this.getImageContainer();
        }
        if (!frameElement) {
            return;
        }

        this.deleteSpecialFrame();
        frameElement.style.border = "none";
        this.viewState?.setFrameType(type);
        this.imageParameters.frame.type = type;
        switch (type) {
            case FrameType.POLAROID:
                frameElement.style.border = `${config.defaultFrameWeight}px solid ${this.imageParameters.frame.color}`;
                frameElement.style.borderBottomWidth = "15px";
                break;
            case FrameType.REGULAR:
                frameElement.style.border = `${this.imageParameters.frame.thickness}px solid ${this.imageParameters.frame.color}`;
                break;
            case FrameType.ZEBRA:
            case FrameType.HOOK:
            case FrameType.LUMBER:
                this.createSpecialFrame(type);
                break;
            case FrameType.NONE:
                this.resetFrame();
                break;
        }

    }

    private resetFrame() {
        this.imageParameters.frame = {
            color: config.defaultFrameColor,
            type: FrameType.NONE,
            thickness: config.defaultFrameWeight
        };

        this.viewState?.setFrameType(FrameType.NONE);
        this.viewState?.setFrameThickness(config.defaultFrameWeight);
        this.viewState?.setFrameColor(config.defaultFrameColor);
    }

    /**
     * Deletes frames ZEBRA, HOOK, LUMBER
     *
     * @private
     */
    private deleteSpecialFrame() {
        const cropperFrame = this.getPlainDomElement().getElementsByClassName('cropper-face')[0] as HTMLElement;
        const containerFrame = this.getImageContainer();
        if (cropperFrame) {
            cropperFrame.style.border = "none";
        }
        if (containerFrame) {
            containerFrame.style.border = "none";
        }
        const cropperContainer: HTMLElement = this.getPlainDomElement().getElementsByClassName('cropper-crop-box')[0] as HTMLElement;
        if (!cropperContainer) {
            return;
        }

        if (cropperContainer.getElementsByClassName("frame-container")[0]) {
            cropperContainer.getElementsByClassName("frame-container")[0].remove()
        }
    }

    /**
     * Create ome specific frames
     *
     * @param type frame type
     * @private
     */
    private createSpecialFrame(type: FrameType) {
        const frameElement: HTMLElement = this.getPlainDomElement().getElementsByClassName('cropper-crop-box')[0] as HTMLElement;
        const frames = frameElement.getElementsByClassName("frame-container");
        if (frames.length) {
            frameElement.removeChild(frames[0]);
        }
        const frameContainer = document.createElement("span");
        const frame1 = document.createElement("span");
        const frame2 = document.createElement("span");
        const frame3 = document.createElement("span");
        const frame4 = document.createElement("span");
        frame1.className = "frame-1";
        frame2.className = "frame-2";
        frame3.className = "frame-3";
        frame4.className = "frame-4";
        frameContainer.className = "frame-container frame-type-" + type;
        frameContainer.append(frame1, frame2, frame3, frame4);
        Array.from(frameContainer.children).map((el: Element) => {
            if (this.viewState?.frameType() !== FrameType.ZEBRA) {
                (el as HTMLElement).style.background = this.viewState?.frameColor() || config.defaultFrameColor;
            } else {
                (el as HTMLElement).style.borderColor = this.viewState?.frameColor() || config.defaultFrameColor;
            }
        });
        const target = this.getPlainDomElement().getElementsByClassName('cropper-face')[0];

        if (target) {
            target.parentNode!.insertBefore(frameContainer, target);
        }
    }

    /**
     * Set frame thickness
     *
     * @param thickness in px
     */
    public setFrameWeight(thickness: number) {
        this.viewState?.setFrameThickness(thickness);
        this.imageParameters.frame.thickness = thickness;

        if (!this.isVisible()) {
            return;
        }

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {

            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-face')[0] as HTMLElement;
            if (frameElement) {
                frameElement.style.borderWidth = `${thickness}px`;
            }
        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderColor = this.viewState?.frameColor() || config.defaultFrameColor;
            tile.style.borderWidth = `${thickness}px`;
        }
    }

    /**
     * Set frame color
     *
     * @param color hex color
     */
    public setFrameColor(color: string) {
        this.viewState?.setFrameColor(color);
        this.imageParameters.frame.color = color;

        if (!this.isVisible()) {
            return;
        }
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-face')[0] as HTMLElement;
            if (!frameElement) {
                return;
            }
            frameElement.style.borderColor = color;
            const frames = this.getPlainDomElement().getElementsByClassName("frame-container");
            if (frames.length) {
                Array.from(frames[0].children).map((el: Element) => {
                    if (this.viewState?.frameType() !== FrameType.ZEBRA) {
                        (el as HTMLElement).style.background = color;
                    } else {
                        (el as HTMLElement).style.borderColor = color;
                    }
                });
            }

        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = this.viewState?.frameType() || 'none';
            tile.style.borderWidth = `${this.viewState?.frameThickness() || config.defaultFrameWeight}px`;
            tile.style.borderColor = color;
        }
    }

    /**
     * Uses image's color palette to fill in the white borders.
     * Works only for {@link ImagePrintMode.FULL} mode
     *
     * @param value if tru - use palette, if false - reset to white border
     */
    public detectColorPalette(value?: boolean) {
        this.imageParameters.detectAndFillWithGradient = value;
        if (!this.isVisible()) {
            return;
        }
        if (value) {
            const innerContainer = this.getImageContainer();
            innerContainer.style.background = fitGradient(this.getImage());
        } else {
            this.clearColorPalette();
        }

    }

    /**
     * Clear palette and set border to white
     *
     * @private
     */
    private clearColorPalette() {
        const innerContainer = this.getImageContainer();
        innerContainer.style.background = "white";
    }

    /**
     * Returns aspect ratio for selected print size
     */
    public getAspectRatio(): number {
        // invert aspect ratio in case if print mode is CROP
        // and image is rotated for 90 deg
        if (this.imageParameters.rotate == 90 && this.imageParameters.imagePrintMode == ImagePrintMode.CROP) {
            return this.imageParameters.size.height / this.imageParameters.size.width;
        }

        if (this.getImageAspectRatio() > 1 && this.imageParameters.imagePrintMode == ImagePrintMode.CROP && this.imageParameters.rotate === 0) {
            //return this.imageParameters.size.height / this.imageParameters.size.width;
        }


        return this.imageParameters.size.width / this.imageParameters.size.height;
    }

    private getImageAspectRatio(): number {
        return this.getImage().naturalWidth / this.getImage().naturalHeight;
    }

}
