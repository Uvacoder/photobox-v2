/// <reference path="../../BaseView.tsx" />
import {BaseView} from "../../BaseView";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import view, {IProps, IState} from "./view";
import {fitGradient} from 'dont-crop';
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import Viewport from "../viewport/Viewport";
import {ImageParameters} from "../../interface/ImageParameters";
import {FrameType} from "../../constants/FrameType";
import CropEndEvent = Cropper.CropEndEvent;
import SetDataOptions = Cropper.SetDataOptions;
import Application from "../../Application";
import {Commands} from "../../constants/Commands";
import {v4 as uuidv4} from 'uuid';

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
        size: {
            width: 9,
            height: 13
        },
        cropData: null,
        imagePrintMode: ImagePrintMode.CROP,
        quantity: 1
    }

    constructor(thumbnail: string, container?: HTMLElement, serializedState?: ImageParameters) {
        super(container);
        // this.mountView(view, {src});
        this.thumbnail = thumbnail;

        this.imageParameters.src.thumbnail = thumbnail;
        if (serializedState) {
            this.imageParameters = serializedState;
        }

    }

    render(state?: ImageParameters, container?: HTMLElement) {
        if (state) {
            this.imageParameters = {...this.imageParameters, ...state}
        }
        if (!this.isMounted) {
            const props: IProps = {
                src: this.thumbnail,
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
        //this.viewState?.setLoaded(false);
    }

    cloneTile() {
        // console.log(this);
        // console.log('cloneTile');
        Application.INVOKER.execute({type: Commands.CLONE_TILE, payload: this.uuid});
    }

    deleteTile(){
        Application.INVOKER.execute({type: Commands.DELETE_TILE, payload: this.uuid});
    }


    onMountView(state: IState) {
        this.viewState = state;
        this.isMounted = true;
        this.image = this.getImage();
        // @ts-ignore
        this.image.onload = () => {
            this.setMode(this.imageParameters.imagePrintMode)
        }
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
            this.switchToSimpleMode();
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
                    // that.cropData = cropper.getData();
                },
                cropend(event: CropEndEvent) {
                    that.imageParameters.cropData = cropper.getData();
                },
                ready() {
                    //that.detectBestFrame.call(that, this as CanvasImageSource, cropper)
                    that.viewState?.setLoaded(true);
                    if (that.imageParameters.zoom)
                        cropper.zoomTo(that.imageParameters.zoom || 0);
                    if (that.imageParameters.cropData)
                        cropper.setData(that.imageParameters.cropData as SetDataOptions || null);
                    that.updateCropper();
                }
            });

            this.cropper = cropper;
        } else {
            this.updateCropper();
        }
    }

    private switchToSimpleMode() {
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
    }

    public updateCropper() {
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
        // this.detectBestFrame();

    }

    public setZoom() {
        console.log('setZoom');
        this.updateTile();

    }

    public setMode(imagePrintMode: ImagePrintMode) {
        this.imageParameters.imagePrintMode = imagePrintMode;
        this.updateTile();
    }


    public serializeState(): ImageParameters {
        if (this.imageParameters.imagePrintMode == ImagePrintMode.CROP) {
            this.imageParameters.cropData = this.cropper?.getData(true) || null;
        }
        console.log(this.imageParameters);
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

    public setFrameType(type: FrameType) {
        let frameElement: HTMLElement;
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
        } else {
            frameElement = this.getImageContainer();
        }

        if (!frameElement) {
            return;
        }
        switch (type) {
            case FrameType.POLAROID:
                frameElement.style.border = "5px solid #fff"
                frameElement.style.borderBottomWidth = "15px";
                break;
            case FrameType.REGULAR:
                frameElement.style.border = "0px solid #fff"
                break;
            default:
                frameElement.style.border = "none"
                break;
        }

        this.viewState?.setFrameType(type);
    }

    public setFrameWeight(thickness: number) {
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.border == undefined) {
            this.imageParameters.border = {
                thickness: 0,
                color: 'white'
            }
        }
        this.imageParameters.border!.thickness = thickness;
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {

            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {
                frameElement.style.borderWidth = `${thickness}px`;
            }
        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderColor = this.imageParameters.border.color;
            tile.style.borderWidth = `${thickness}px`;
        }

        this.viewState?.setFrameThickness(thickness);
    }

    public setFrameColor(color: string) {
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.border == undefined) {
            this.imageParameters.border = {
                thickness: 0,
                color: 'white'
            }
        }
        this.imageParameters.border!.color = color;

        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {

                frameElement.style.borderColor = color;
            }
        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderWidth = `${this.imageParameters.border.thickness}px`;
            tile.style.borderColor = color;
        }

        this.viewState?.setFrameColor(color);
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
