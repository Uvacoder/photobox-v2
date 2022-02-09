/// <reference path="../../BaseView.ts" />
import {BaseView} from "../../BaseView";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import view, {IProps, IState} from "./view";
import {fitGradient} from 'dont-crop';
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import Viewport from "../viewport/Viewport";
import {ImageState} from "../../interface/ImageState";
import CropEndEvent = Cropper.CropEndEvent;
import SetDataOptions = Cropper.SetDataOptions;
import {FrameType} from "../../constants/FrameType";

export class ImageTile extends BaseView<IProps, IState> {
    private src: string = "";
    private image: HTMLImageElement | null = null;
    private cropper: Cropper | null = null;
    // private cropData: Cropper.Data | null = null;
    //private aspectRatio: number = 15 / 15;
    private viewState: IState | null = null;
    //private imagePrintMode: ImagePrintMode = ImagePrintMode.CROP;
    private isMounted: boolean = false;
    private state: ImageState = {
        url: "",
        size: {
            w: 9,
            h: 13
        },
        cropData: null,
        imagePrintMode: ImagePrintMode.CROP,
        quantity: 1
    }
    private scale: number = 1;

    constructor(src: string, container?: HTMLElement, serializedState?: ImageState) {
        super(container);
        // this.mountView(view, {src});
        this.src = src;

        this.state.url = src;
        if (serializedState) {
            this.state = serializedState;
        }

    }

    render() {
        if (!this.isMounted) {
            this.mountView(view, {src: this.src});
        }
        //this.updateTile();
        //this.viewState?.setLoaded(false);
    }

    onMountView(state: IState) {
        this.viewState = state;
        this.isMounted = true;
        this.image = this.getImage();
        // @ts-ignore
        this.image.onload = () => {
            this.setMode(this.state.imagePrintMode)
        }
    }

    /**
     * Change aspect ratio for image
     *
     * @param width
     * @param height
     */
    public setAspectRatio(width: number, height: number) {
        this.state.size.w = width;
        this.state.size.h = height;
        this.updateTile();
    }

    public updateTile() {
        if (this.state.imagePrintMode == ImagePrintMode.CROP) {
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
        const container = this.getContainer().children[0] as HTMLElement;
        const tileSize = Viewport.initialSize * this.scale;
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
                crop(event) {
                    //that.cropData = event.detail;
                },
                zoom(event) {
                    console.log(event);
                    that.state.zoom = event.detail.ratio;
                    // that.cropData = cropper.getData();
                },
                cropend(event: CropEndEvent) {
                    that.state.cropData = cropper.getData();
                    console.log(cropper.getData());
                },
                ready() {
                    that.detectBestFrame.call(that, this as CanvasImageSource, cropper)
                    that.viewState?.setLoaded(true);
                    if (that.state.zoom)
                        cropper.zoomTo(that.state.zoom || 0);
                    if (that.state.cropData)
                        cropper.setData(that.state.cropData as SetDataOptions || null);
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
        const container = this.getContainer().children[0] as HTMLElement;
        this.getImage().style.display = "block";
        this.removeClass(this.getImage(), "cropper-hidden");
        const tileSize = Viewport.initialSize * this.scale;

        if (this.getAspectRatio() < 1 /*&& imageWidth / imageHeight < 1*/) {
            // portrait mode
            if (imageWidth / imageHeight < 1) {
                container.style.width = `${tileSize * this.getAspectRatio()}px`;
            } else {
                container.style.height = `${tileSize * this.getAspectRatio()}px`;
            }

        } else {
            container.style.height = `${tileSize * this.getAspectRatio()}px`;
            container.style.width = `${tileSize * this.getAspectRatio()}px`;
        }
        this.viewState?.setLoaded(true);
        // this.detectColorPalette();
        //this.getContainer().style.display = "none";
    }

    public updateCropper() {
        this.cropper?.setAspectRatio(this.getAspectRatio());
        // @ts-ignore
        this.cropper?.cropper.style.display = "block";
        this.addClass(this.getImage(), "cropper-hidden");
        const container = this.getContainer().children[0] as HTMLElement;
        container.style.height = `${Viewport.initialSize * this.scale}px`;
        container.style.width = `${Viewport.initialSize * this.scale}px`;
        if (this.state.cropData) {
            this.cropper?.setData(this.state.cropData);
        }
        // @ts-ignore
        this.cropper?.resize();
        setTimeout(() => {

        }, 0)
    }

    public setZoom(scale: number) {
        this.scale = scale;
        let container = this.getContainer();
        container.style.width = `${Viewport.initialSize * scale}px`;
        container.style.height = `${Viewport.initialSize * scale}px`;
        this.updateTile();
    }


    public setMode(imagePrintMode: ImagePrintMode) {
        this.state.imagePrintMode = imagePrintMode;
        this.updateTile();
    }


    public serializeState(): ImageState {
        if (this.state.imagePrintMode == ImagePrintMode.CROP) {
            this.state.cropData = this.cropper?.getData(true) || null;
        }
        return this.state;
    }

    public deserializeState(state: ImageState) {
        this.state = state;
        this.updateTile();
    }

    public setSrc(src: string) {
        this.src = src;
        this.cropper?.replace(src);
        this.getImage().src = src;
    }

    public getImage(): any {
        return this.getPlainDomElement().children[0];
    }

    public detectBestFrame(image?: CanvasImageSource, cropper?: Cropper): void {
        if (!this.isMounted) {
            return;
        }
        let width = this.state.size.h;
        let height = this.state.size.w;
        if (this.getImage().naturalWidth / this.getImage().naturalHeight < 1) {
            // width = this.state.size.h;
            //height = this.state.size.w;
        }
        const size = Math.max(this.getImage().naturalWidth, this.getImage().naturalHeight);
        smartcrop.crop(this.getImage(), {width: size, height: size}).then((result) => {
            this.cropper?.setData(result.topCrop)
            // this.detectColorPalette();
            this.state.cropData = result.topCrop as Cropper.Data;
            this.viewState?.setLoaded(true);
        });
    }

    public resetCropper() {
        this.cropper?.reset();
    }

    public setFrameType(type: FrameType) {
        const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
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
    }

    public setBorderWeight(thickness: number) {
        if (this.state.border == undefined) {
            this.state.border = {
                thickness: 0,
                color: 'white'
            }
        }
        this.state.border!.thickness = thickness;
        if (this.state.imagePrintMode === ImagePrintMode.CROP) {

            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {
                frameElement.style.borderWidth = `${thickness}px`;
            }
        } else {
            const tile = this.getPlainDomElement();
            tile.style.borderStyle = 'solid';
            tile.style.borderColor = this.state.border.color;
            tile.style.borderWidth = `${thickness}px`;
        }
    }

    public setBorderColor(color: string) {
        if (this.state.border == undefined) {
            this.state.border = {
                thickness: 0,
                color: 'white'
            }
        }
        this.state.border!.color = color;

        if (this.state.imagePrintMode === ImagePrintMode.CROP) {
            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {

                frameElement.style.borderColor = color;
            }
        } else {
            const tile = this.getPlainDomElement();
            tile.style.borderStyle = 'solid';
            tile.style.borderWidth = `${this.state.border.thickness}px`;
            tile.style.borderColor = color;
        }
    }

    public detectColorPalette(isTrue: boolean) {
        if (!this.isMounted) {
            return;
        }
        if (isTrue) {
            const innerContainer = this.getPlainDomElement();
            innerContainer.style.background = fitGradient(this.getImage());
        } else {
            this.clearColorPalette();
        }

    }

    public clearColorPalette() {
        const innerContainer = this.getPlainDomElement();
        innerContainer.style.background = "white";
    }

    public getAspectRatio(): number {
        const imageWidth = this.getImage().naturalWidth;
        const imageHeight = this.getImage().naturalHeight;

        if (imageWidth / imageHeight > 1) {
            return this.state.size.h / this.state.size.w;
        }

        return this.state.size.w / this.state.size.h;
    }


}
