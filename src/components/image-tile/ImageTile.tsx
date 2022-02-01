/// <reference path="../../BaseView.ts" />
import {h, BaseProps} from "tsx-dom";
import {BaseView} from "../../BaseView";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import {render as solidRender} from 'solid-js/web';
import view from "./view";
import {CropResult} from "smartcrop/index";
import Data = Cropper.Data;
import {getPalette, fitGradient} from 'dont-crop';

export class ImageTile extends BaseView<any> {
    private src: string = "";
    //private onClick: (...args: any) => void;
    private image: HTMLImageElement;
    private cropper: Cropper | null = null;
    private cropData: Cropper.SetDataOptions | null = null;


    constructor(src: string, container: HTMLElement) {
        super(container);
        this.init(view.template({src: src, onClick: this.onClick}));
        this.src = src;
        this.image = this.getImage();
        this.image.onload = () => {
            this.initCropper();
        }
    }

    public setAspectRatio(aspect: number) {
        this.cropper?.setAspectRatio(aspect);
        this.update();
    }

    private onClick() {
        console.log('click');
    }

    private initCropper() {
        const that = this;
        if (!this.image) {
            return;
        }
        view.updateState({loaded: false});
        const cropper = new Cropper(this.image, {
            aspectRatio: 16 / 16,
            viewMode: 2,
            scalable: false,
            checkCrossOrigin: false,
            autoCropArea: 1,
            crop(event) {
                console.log(event.detail);
                that.cropData = event.detail;
            },
            ready() {
                smartcrop.crop(this as CanvasImageSource, {width: 100, height: 100}).then(function (result) {
                    cropper.setData(result.topCrop)
                    /*   cropper.setData({
                           x: 0, y: 0, width: 500, height: 500
                       })*/
                });
                view.updateState({loaded: true});
                console.log(fitGradient(this as CanvasImageSource));
                that.getContainer().style.background = fitGradient(that.getImage());
                console.log(that.getImage());
            }
        });
        this.cropper = cropper;
    }

    public update() {
        // @ts-ignore
        this.cropper?.resize();
        this.cropper?.setData(this.cropData as Cropper.SetDataOptions);
    }

    public setSrc(src: string) {
        this.src = src;
        console.log(this.getImage());

        //this.getElement().getImage();
        console.log(src);
        this.cropper?.replace(src);
        this.getImage().src = src;
    }

    public getImage(): any {
        return this.getPlainDomElement().children[0];
    }

}
