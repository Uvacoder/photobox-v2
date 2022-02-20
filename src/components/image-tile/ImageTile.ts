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
import Application from "../../Application";
import {Commands} from "../../constants/Commands";
import {v4 as uuidv4} from "uuid";
import config from "../../config/config.json";
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


    onMountView(state: IState) {
        this.viewState = state;
        this.isMounted = true;
        this.image = this.getImage();
        // @ts-ignore
        this.image.onload = () => {
            this.setMode(this.imageParameters.imagePrintMode)
        }
        if (this.imageParameters.options) {
            this.viewState?.setOptions(this.imageParameters.options);
        }
    }

    render(state?: ImageParameters, container?: HTMLElement) {
        if (state) {
            this.imageParameters = {...this.imageParameters, ...state}
        }
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
        //this.viewState?.setLoaded(false);
    }

    cloneTile() {
        // console.log(this);
        // console.log('cloneTile');
        Application.INVOKER.execute({type: Commands.CLONE_TILE, payload: this.uuid});
    }

    deleteTile() {
        Application.INVOKER.execute({type: Commands.DELETE_TILE, payload: this.uuid});
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
        this.imageParameters.cropData = this.cropper?.getData();
        this.checkQuality();
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
        console.log(this.viewState?.copies);
        this.imageParameters.quantity = this.viewState?.copies || 1;
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
        this.deleteFrame();
        switch (type) {
            case FrameType.POLAROID:
                frameElement.style.border = "5px solid #fff";
                frameElement.style.borderBottomWidth = "15px";
                break;
            case FrameType.REGULAR:
                frameElement.style.border = `${config.defaultFrameWeight}px solid #fff`;
                break;
            case FrameType.NONE:
                frameElement.style.border = "none";
                break;
            default:
                frameElement.style.border = "none";
                this.createFrame(type);
                break;
        }
        this.viewState?.setFrameType(type);
    }

    private deleteFrame() {
        const frameElement: HTMLElement = this.getPlainDomElement().getElementsByClassName('cropper-crop-box')[0] as HTMLElement;
        if (!frameElement) {
            return;
        }

        if (frameElement.getElementsByClassName("frame-container")[0]) {
            console.log('remove frame');
            frameElement.getElementsByClassName("frame-container")[0].remove()
        }
    }

    private createFrame(type: FrameType) {
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
            (el as HTMLElement).style.background = this.viewState?.frameColor || config.defaultFrameColor;
        });
        frameElement.append(frameContainer)
    }

    public setFrameWeight(thickness: number) {
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.frame == undefined) {
            this.imageParameters.frame = {
                thickness: 0,
                color: 'white'
            }
        }
        this.imageParameters.frame!.thickness = thickness;
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {

            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (frameElement) {
                frameElement.style.borderWidth = `${thickness}px`;
            }
        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderColor = this.imageParameters.frame.color;
            tile.style.borderWidth = `${thickness}px`;
        }

        this.viewState?.setFrameThickness(thickness);
    }

    public setFrameColor(color: string) {
        this.viewState?.setFrameColor(color);
        if (!this.imageParameters) {
            return;
        }
        if (this.imageParameters.frame == undefined) {
            this.imageParameters.frame = {
                thickness: 0,
                color: 'white'
            }
        }
        this.imageParameters.frame!.color = color;
        console.log(this.viewState?.frameColor);
        if (this.imageParameters.imagePrintMode === ImagePrintMode.CROP) {
            const frameElement = this.getPlainDomElement().getElementsByClassName('cropper-move')[0] as HTMLElement;
            if (!frameElement) {
                return;
            }
            frameElement.style.borderColor = color;
            const frames = this.getPlainDomElement().getElementsByClassName("frame-container");
            if (frames.length) {
                Array.from(frames[0].children).map((el: Element) => {
                    (el as HTMLElement).style.background = color;
                });
            }

        } else {
            const tile = this.getImageContainer();
            tile.style.borderStyle = 'solid';
            tile.style.borderWidth = `${this.imageParameters.frame.thickness}px`;
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
