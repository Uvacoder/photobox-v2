/// <reference path="../../BaseView.tsx" />
import {BaseView} from "../../BaseView";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import view, {IProps, IState} from "./view";
import {fitGradient} from 'dont-crop';
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import Viewport from "../viewport/Viewport";
import {ImageParameters} from "../../interface/image/ImageParameters";
import {FrameType} from "../../constants/FrameType";
import {v4 as uuidv4} from "uuid";
import config from "../../config/config.json";
import {ImageActions} from "../../interface/image/ImageActions";
import CropEndEvent = Cropper.CropEndEvent;
import SetDataOptions = Cropper.SetDataOptions;

export class ImageTile extends BaseView<IProps, IState> {
    private thumbnail: string = "";
    private image: HTMLImageElement | null = null;
    private cropper: Cropper | null = null;
    private viewState: IState | null = null;
    private isMounted: boolean = false;
    public uuid: string = uuidv4();
    private imageParameters: ImageParameters = {
        src: {
            thumbnail: "",
            full: ""
        },
        frame: {
            color: config.defaultFrameColor,
            type: FrameType.NONE,
            thickness: config.defaultFrameWeight
        },
        size: {
            width: 9,
            height: 13
        },
        cropData: null,
        imagePrintMode: ImagePrintMode.CROP,
        quantity: 1
    }
    private imageActionsListeners?: ImageActions;

    constructor(parameters?: ImageParameters, container?: HTMLElement) {
        super(container);
        if (parameters) {
            if (!parameters.src || !parameters.src.thumbnail) {
                throw new Error("No thumbnail");
            }
            this.thumbnail = parameters.src.thumbnail;
            this.imageParameters = {...this.imageParameters, ...parameters};
        }
    }


    onMountView(state: IState) {
        this.viewState = state;
        this.isMounted = true;
        this.image = this.getImage();
        // @ts-ignore
        this.image.onload = () => {
            this.setMode(this.imageParameters.imagePrintMode || ImagePrintMode.CROP)
        }
        if (this.imageParameters.options) {
            this.viewState?.setOptions(this.imageParameters.options);
        }
    }

    render(parameters?: ImageParameters, container?: HTMLElement) {
        if (parameters) {
            this.imageParameters = {...parameters, ...this.imageParameters}
        }
        console.log(JSON.stringify(parameters));
        console.log(JSON.stringify(this.imageParameters));
        if (!this.isMounted) {
            const props: IProps = {
                src: this.thumbnail,
                uid: this.uuid,
                setFrameColor: this.setFrameColor.bind(this),
                setFrameWeight: this.setFrameWeight.bind(this),
                setFrameType: this.setFrameType.bind(this),
                cloneTile: this.cloneTile.bind(this),
                deleteTile: this.deleteTile.bind(this),
            };
            this.mountView(view, props);
        }

        if (container) {
            container.append(this.getContainer());
        }
        this.updateTile();
    }

    cloneTile() {
        // console.log(this);
        // console.log('cloneTile');
        //Application.INVOKER.execute({type: Commands.CLONE_TILE, payload: this.uuid});
        if (this.imageActionsListeners) {
            this.imageActionsListeners.onClone(this.uuid);
        }
    }

    deleteTile() {
        if (this.imageActionsListeners) {
            this.imageActionsListeners.onDelete(this.uuid);
        }
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
        this.updateTile();
    }

    public updateTile() {
        let container = this.getContainer();
        let tileContainer = this.getTileContainer();
        container.style.width = `${Viewport.initialSize * Viewport.zoomFactor}px`;
        tileContainer.style.width = `${Viewport.initialSize * Viewport.zoomFactor}px`;
        tileContainer.style.height = `${Viewport.initialSize * Viewport.zoomFactor}px`;
        if (this.imageParameters.imagePrintMode == ImagePrintMode.CROP) {
            this.switchToCropperMode();
        } else {
            this.switchToFullImageMode();
        }

    }

    private switchToCropperMode() {
        const that = this;
        if (!this.image) {
            return;
        }
        this.clearColorPalette();
        const container = this.getImageContainer();
        const tileSize = Viewport.initialSize * Viewport.zoomFactor;
        container.style.height = `${tileSize}px`;
        container.style.width = `${tileSize}px`;

        if (!this.cropper) {
            this.viewState?.setLoaded(false);
            const cropper = new Cropper(this.image, {
                aspectRatio: this.getAspectRatio(),
                viewMode: 2,
                scalable: false,
                checkCrossOrigin: false,
                //data: this.state.cropData as SetDataOptions || null,
                autoCropArea: 1,
                movable: true,
                crop(event) {
                    //that.cropData = event.detail;
                },
                zoom(event) {
                    that.imageParameters.zoom = event.detail.ratio;
                    that.imageParameters.cropData = cropper.getData();
                    that.checkQuality();
                },
                cropend(event: CropEndEvent) {
                    that.imageParameters.cropData = cropper.getData();
                    that.checkQuality();
                },
                ready() {
                    //that.detectBestFrame.call(that, this as CanvasImageSource, cropper)
                    that.viewState?.setLoaded(true);
                    if (that.imageParameters.zoom) {
                        cropper.zoomTo(that.imageParameters.zoom || 0);
                    }
                    if (that.imageParameters.cropData) {
                        cropper.setData(that.imageParameters.cropData as SetDataOptions || null);
                    } else {
                        that.imageParameters.cropData = cropper.getData();
                    }
                    that.updateCropper();
                    that.updateAndRenderFrame();
                }
            });

            this.cropper = cropper;
        } else {
            this.updateCropper();
        }
    }

    private checkQuality() {
        this.viewState?.setBadPhotoQuality(false);
        const size = this.imageParameters.size;
        // @ts-ignore
        const minRequiredSize = config.sizeQualityMap[`${size.width}x${size.height}`];
        if (!minRequiredSize) {
            return;
        }

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            if (!this.imageParameters.cropData) {
                return;
            }
            if (this.imageParameters.cropData?.width < minRequiredSize.minWidth || this.imageParameters.cropData?.height < minRequiredSize.minHeight) {
                this.viewState?.setBadPhotoQuality(true);
            }
        } else {
            const imageSize = {
                width: this.getImage().naturalWidth,
                height: this.getImage().naturalHeight
            }
            if (imageSize.width < minRequiredSize.minWidth || imageSize.height < minRequiredSize.minHeight) {
                this.viewState?.setBadPhotoQuality(true);
            }
        }
    }

    private switchToFullImageMode() {
        //this.cropper?.destroy();
        // @ts-ignore
        this.cropper?.cropper.style.display = "none";
        //console.log(this.cropper?.cropper);
        // this.cropper = null;
        const imageWidth = this.getImage().naturalWidth;
        const imageHeight = this.getImage().naturalHeight;
        const container = this.getImageContainer();
        this.getImage().style.display = "block";
        this.removeClass(this.getImage(), "cropper-hidden");
        const tileSize = Viewport.initialSize * Viewport.zoomFactor;

        if (this.getAspectRatio() < 1 /*&& imageWidth / imageHeight < 1*/) {
            // portrait mode
            if (imageWidth / imageHeight < 1) {
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
        this.detectColorPalette(this.imageParameters.detectAndFillWithGradient || false);
        //this.getContainer().style.display = "none";
        this.checkQuality();
        this.updateAndRenderFrame();
    }

    public updateCropper() {
        console.log('updateCropper');
        this.cropper?.setAspectRatio(this.getAspectRatio());
        // @ts-ignore
        this.cropper?.cropper.style.display = "block";
        this.addClass(this.getImage(), "cropper-hidden");
        const container = this.getImageContainer();
        container.style.height = `${Viewport.initialSize * Viewport.zoomFactor}px`;
        container.style.width = `${Viewport.initialSize * Viewport.zoomFactor}px`;
        if (this.imageParameters.cropData) {
            this.cropper?.setData(this.imageParameters.cropData);
        }
        // @ts-ignore
        this.cropper?.resize();
        this.imageParameters.cropData = this.cropper?.getData();
        this.checkQuality();
    }

    public setZoom() {
        console.log('setZoom');
        this.updateTile();

    }

    public setMode(imagePrintMode: ImagePrintMode) {
        this.imageParameters.imagePrintMode = imagePrintMode;
        if(!this.isMounted){
            return;
        }
        this.updateTile();
        this.updateAndRenderFrame();
    }


    public serializeState(): ImageParameters {
        if (this.imageParameters.imagePrintMode == ImagePrintMode.CROP) {
            const cropData = this.cropper?.getData(true);
            const image =  this.getImage();
            const imageWidth = image.naturalWidth;
            const imageHeight = image.naturalHeight;
            cropData!.width = Math.round(cropData!.width / imageWidth * 100);
            cropData!.x = Math.round(cropData!.x / imageWidth * 100);
            cropData!.height = Math.round(cropData!.height / imageHeight * 100);
            cropData!.y = Math.round(cropData!.y / imageHeight * 100);
            this.imageParameters.cropData = cropData || null;
        }
        console.log(this.viewState);
        this.imageParameters.quantity = this.viewState?.copies() || 10;

        this.imageParameters.frame = {
            color: this.viewState?.frameColor() || config.defaultFrameColor,
            type: this.viewState?.frameType() || FrameType.NONE,
            thickness: this.viewState?.frameThickness() || config.defaultFrameWeight,
        }
        console.log({...this.imageParameters});
        return this.imageParameters;
    }

    public deserializeState(state: ImageParameters) {
        this.imageParameters = state;
        this.updateTile();
    }

    /**
     * TODO: remove
     * @deprecated
     * @param thumbnail
     */
    public setSrc(thumbnail: string) {
        this.thumbnail = thumbnail;
        this.cropper?.replace(thumbnail);
        this.getImage().src = thumbnail;
    }

    public getImageContainer(): HTMLElement {
        return this.getContainer().getElementsByClassName("image-container")[0] as HTMLElement;
    }

    public getTileContainer(): HTMLElement {
        return this.getContainer().getElementsByClassName("image-tile-wrapper")[0] as HTMLElement;
    }

    public getImage(): HTMLImageElement {
        return this.getContainer().getElementsByTagName("img")[0];
    }

    public detectBestFrame(image?: CanvasImageSource, cropper?: Cropper): void {
        console.log('detectBestFrame');
        if (!this.isMounted) {
            return;
        }
        let width = this.imageParameters.size.height;
        let height = this.imageParameters.size.width;
        if (this.getImage().naturalWidth / this.getImage().naturalHeight < 1) {
            // width = this.state.size.h;
            //height = this.state.size.w;
        }
        const size = Math.max(this.getImage().naturalWidth, this.getImage().naturalHeight);
        smartcrop.crop(this.getImage(), {width: size, height: size}).then((result) => {
            this.cropper?.setData(result.topCrop)
            // this.detectColorPalette();
            this.imageParameters.cropData = result.topCrop as Cropper.Data;
            this.viewState?.setLoaded(true);
        });
    }

    public resetCropper() {
        this.cropper?.reset();
    }

    public updateAndRenderFrame() {
        console.log(this.imageParameters.frame);
        this.setFrameType(this.imageParameters.frame.type || FrameType.NONE)
        if (this.imageParameters.frame && this.viewState && this.imageParameters.frame.type != FrameType.NONE) {
            //console.log(this.imageParameters.frame);

            this.setFrameColor(this.imageParameters.frame.color)
            this.setFrameWeight(this.imageParameters.frame.thickness)
        }
    }

    public setFrameType(type: FrameType) {
        this.imageParameters.frame.type = type;
        if(!this.isMounted){
            return;
        }
        console.log('setFrameType', type, this.imageParameters.imagePrintMode, this.uuid);
        let frameElement: HTMLElement;
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
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
                frameElement.style.border = "5px solid #fff";
                frameElement.style.borderBottomWidth = "15px";
                break;
            case FrameType.REGULAR:
                frameElement.style.border = `${config.defaultFrameWeight}px solid #fff`;
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

    private resetFrame(){
        this.imageParameters.frame = {
            color: config.defaultFrameColor,
            type: FrameType.NONE,
            thickness: config.defaultFrameWeight
        };

        this.viewState?.setFrameType(FrameType.NONE);
        this.viewState?.setFrameThickness(config.defaultFrameWeight);
        this.viewState?.setFrameColor(config.defaultFrameColor);
    }

    private deleteSpecialFrame() {
        const cropperFrame = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
        const containerFrame = this.getImageContainer();
        if(cropperFrame){
            cropperFrame.style.border = "none";
        }
        if(containerFrame){
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
            if(this.viewState?.frameType() !== FrameType.ZEBRA){
                (el as HTMLElement).style.background = this.viewState?.frameColor() || config.defaultFrameColor;
            }else{
                (el as HTMLElement).style.borderColor = this.viewState?.frameColor() || config.defaultFrameColor;
            }
        });
        frameElement.append(frameContainer)
    }

    public setFrameWeight(thickness: number) {
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {

            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {
                frameElement.style.borderWidth = `${thickness}px`;
            }
        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderColor = this.viewState?.frameColor() || config.defaultFrameColor;
            tile.style.borderWidth = `${thickness}px`;
        }

        this.viewState?.setFrameThickness(thickness);
        this.imageParameters.frame.thickness = thickness;
    }

    public setFrameColor(color: string) {

        console.log('setFrameColor', color, this.imageParameters.imagePrintMode, this.uuid);
        this.viewState?.setFrameColor(color);
        this.imageParameters.frame.color = color;
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (!frameElement) {
                return;
            }
            frameElement.style.borderColor = color;
            const frames = this.getPlainDomElement().getElementsByClassName("frame-container");
            if (frames.length) {
                Array.from(frames[0].children).map((el: Element) => {
                    if(this.viewState?.frameType() !== FrameType.ZEBRA){
                        (el as HTMLElement).style.background = color;
                    }else{
                        (el as HTMLElement).style.borderColor = color;
                    }
                });
            }

        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = this.viewState?.frameType() || 'none';
            tile.style.borderWidth = `${ this.viewState?.frameThickness() || config.defaultFrameWeight}px`;
            tile.style.borderColor = color;
        }
    }

    public detectColorPalette(isTrue: boolean) {
        if (!this.isMounted) {
            return;
        }
        if (isTrue) {
            const innerContainer = this.getImageContainer();
            innerContainer.style.background = fitGradient(this.getImage());
        } else {
            this.clearColorPalette();
        }

    }

    public clearColorPalette() {
        const innerContainer = this.getImageContainer();
        innerContainer.style.background = "white";
    }

    public getAspectRatio(): number {
        const imageWidth = this.getImage().naturalWidth;
        const imageHeight = this.getImage().naturalHeight;

        if (imageWidth / imageHeight > 1) {
            //return this.state.size.h / this.state.size.w;
        }

        return this.imageParameters.size.width / this.imageParameters.size.height;
    }


}
