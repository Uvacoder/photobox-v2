import {BaseView} from "../../BaseView";
import {ImageTile} from "../image-tile/ImageTile";

export default class Viewport extends BaseView<any> {
    private croppers: ImageTile[] = [];

    constructor(container?: HTMLElement) {
        super(container);
    }

    public addImage(image: any) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';

        container.insertBefore(imgContainer, container.firstChild);
        const imageTile = new ImageTile(image.url, imgContainer)


        this.croppers.push(imageTile);
    }

    public setAspectRatio(aspect: number) {
        this.croppers.forEach(cropper => {
            cropper.setAspectRatio(aspect);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
        });
    }
    public zoomIn(){
        this.croppers.forEach(cropper => {
            let container = cropper.getPlainDomElement();
            let image = cropper.getImage();
            image.style.display = 'none';
            container.style.width = '400px';
            container.style.height = '400px';
            cropper.update();
            //cropper.setAspectRatio(2 / 4);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
        });
    }
    public zoomOut(){
        this.croppers.forEach(cropper => {
            let container = cropper.getPlainDomElement();
            container.style.width = '300px';
            container.style.height = '300px';
            cropper.update();
            //cropper.setAspectRatio(2 / 4);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
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
        for(let i = 1; i<= 21; i++){
            this.addImage({
                url: `./img/${i}.jpg`
        })
        }


        setTimeout(() => {
            this.croppers.forEach(cropper => {
                console.log(cropper);
                cropper.setAspectRatio(3 / 4);
            });
            images2.slice(start, finish).forEach(image => {
                this.addImage(image)
            });
        }, 5000);
    }
}
