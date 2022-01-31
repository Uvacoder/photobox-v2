/// <reference path="../../BaseView.ts" />
import {h, BaseProps} from "tsx-dom";
import {BaseView} from "../../BaseView";
import Counter from "./tile";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import { render as solidRender } from 'solid-js/web';


export class ImageTile extends BaseView<HTMLElement> {
    private src: string = "";
    private onClick: (...args: any) => void;
    private html = <div class={"image-container"}><img /></div>;
    private cropper: Cropper | null = null;


    constructor(src: string, onClick: (...args: any) => void) {
        super(Counter());
        this.src = src;
        this.onClick = onClick;
        this.getImage().onload = () => {
            this.initCropper();
            console.log('updateState');

        }
        // @ts-ignore
        solidRender(() => <Counter />, document.getElementById("zoomIn"));

    }

    private initCropper(){
        const img = this.getImage();
        if(!img){
            return;
        }
        const cropper = new Cropper(img, {
            aspectRatio: 16 / 16,
            viewMode: 2,
            scalable: false,
            checkCrossOrigin: false,
            autoCropArea: 1,
            crop(event) {

            },
            ready() {
                smartcrop.crop(this as CanvasImageSource, {width: 100, height: 100}).then(function (result) {
                    console.log(result);
                    cropper.setData(result.topCrop)
                    /*   cropper.setData({
                           x: 0, y: 0, width: 500, height: 500
                       })*/
                });
            }
        });
        this.cropper = cropper;
    }

    private static createElement(src: string, onClick: (...args: any) => void) {
        return <img src={src} onClick={() => onClick("click", "click2")}/> as HTMLImageElement;
    }

    public setSrc(src: string) {
        this.src = src;
        console.log(this.getImage());

        //this.getElement().getImage();
        console.log(src);
        this.cropper?.replace(src);
        this.getImage().src = src;
    }

    public getImage(): HTMLImageElement{
        return this.getElement().children[0] as HTMLImageElement
    }

}
