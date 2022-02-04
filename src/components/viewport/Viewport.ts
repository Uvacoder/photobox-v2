import {BaseView} from "../../BaseView";
import {ImageTile} from "../image-tile/ImageTile";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {ImageState} from "../../interface/ImageState";

export default class Viewport extends BaseView<any, any> {
    private images: ImageTile[] = [];
    private zoomFactor: number = 1;
    private maxZoomFactor: number = 1.5;
    private minZoomFactor: number = 1;
    private zoomStep: number = .05;
    public static initialSize: number = 200;

    constructor(container?: HTMLElement) {
        super(container);
    }

    onMountView(): void {
        console.log('mounted');
    }

    public addImage(url: string, state?: ImageState) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';

        container.insertBefore(imgContainer, container.firstChild);
        const imageTile = new ImageTile(url, imgContainer, state)

        if (state) {
            //imageTile.deserializeState(state);
        }

        this.images.push(imageTile);
    }

    public setAspectRatio(width: number, height: number) {
        this.images.forEach(cropper => {
            cropper.setAspectRatio(width, height);
        });
    }

    public serializeState(): ImageState[] {
        const state: ImageState[] = [];
        this.images.forEach(image => {
            state.push(image.serializeState());
        });
        console.log(state);
        return state;
    }

    public setMode(mode: ImagePrintMode) {
        this.images.forEach(image => {
            image.setMode(mode);
        });
    }

    public zoomIn() {
        if (this.zoomFactor >= this.maxZoomFactor) {
            return;
        }
        this.zoomFactor = this.zoomFactor + this.zoomStep;
        this.updateTilesZoom();
    }

    public zoomOut() {
        if (this.zoomFactor <= this.minZoomFactor) {
            return;
        }
        this.zoomFactor = this.zoomFactor - this.zoomStep;
        this.updateTilesZoom();
    }

    public fillColor(){
        this.images.forEach(image => {
            image.detectColorPalette();
        });
    }

    private updateTilesZoom() {
        console.log('updateTilesZoom', this.zoomFactor);
        this.images.forEach(image => {
            image.setZoom(this.zoomFactor);
        });
    }

    public renderImages(start: number, finish: number) {
        const container = this.getContainer();
        container.innerHTML = "";
        let images2 = [
            {
                url: './1.jpg'
            },
            {
                url: './1 gBQxShAkxBp_YPb14CN0Nw.jpeg'
            },
            {
                url: './glossy_10x15ebb90f7646c43797e8a00f0ac1f4a233.jpeg'
            },
        ]
        for (let i = 1; i <= 33; i++) {
            //this.addImage(`./img/${i}.jpg`)
        }

        this.addImages();
        this.addImages();
        this.addImages();


    }

    addImages(){
        const state =   [
            {
                "url": "./img/1.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/2.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/3.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/4.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/5.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/6.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/7.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/8.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/9.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/10.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/11.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/12.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/13.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/14.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/15.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/16.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/17.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/18.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/19.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/20.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/21.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/22.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/23.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/24.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/25.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/26.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/27.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/28.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/29.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/30.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/31.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/32.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/33.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            }
        ];

        for (let i = 0; i <= state.length - 1; i++) {
            this.addImage(state[i].url, state[i] as ImageState);
        }
    }
}
