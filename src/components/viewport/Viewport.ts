import {BaseView} from "../../BaseView";
import {ImageTile} from "../image-tile/ImageTile";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {ImageParameters} from "../../interface/ImageParameters";
import {SimplePagination} from 'ts-pagination';
import {FrameType} from "../../constants/FrameType";
import Application from "../../Application";
import {Pagination as PaginationData} from "../../interface/Pagination";

export default class Viewport extends BaseView<any, any> {
    private images: ImageTile[] = [];
    public static zoomFactor: number = 1;
    private maxZoomFactor: number = 1.5;
    private minZoomFactor: number = 1;
    private zoomStep: number = .05;
    public static initialSize: number = 200;

    private paginationData?: PaginationData;
    private globalOptions: ImageParameters = {
        cropData: undefined,
        imagePrintMode: ImagePrintMode.CROP,
        quantity: 0,
        size: {height: 9, width: 9},
        url: "",
        border: {
            thickness: 0,
            color: "#ffffff"
        }
    };

    constructor(container?: HTMLElement | null) {
        super(container);
    }

    onMountView(): void {
        console.log('mounted viewport');
    }

    public addImage(url: string, state?: ImageParameters) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';

        //container.insertBefore(imgContainer, container.firstChild);
        const imageTile = new ImageTile(url, imgContainer, state)

        if (state) {
            //imageTile.deserializeState(state);
        }

        this.images.push(imageTile);

        if(this.images.length <= Application.CONFIG.imagesPerPage){
            imageTile.render(this.globalOptions, container);
            //container.append(imageTile.getContainer());
        }else if(this.isLastPageWithEmptySlots()){
            imageTile.render(this.globalOptions, container);
        }
    }

    private isLastPageWithEmptySlots(): boolean{
        if(!this.paginationData){
            return false;
        }
        return this.paginationData.currentPage === this.paginationData.endPage && this.paginationData.totalItems < this.paginationData.currentPage * this.paginationData.pageSize;
    }

    public setPaginationData(paginationData: PaginationData) {
        this.paginationData = paginationData;
    }

    public setAspectRatio(width: number, height: number) {
        this.globalOptions.size = {width, height};
        this.getCurrentPageImages().forEach(cropper => {
            cropper.setAspectRatio(width, height);
        });
    }

    public serializeState(): ImageParameters[] {
        const state: ImageParameters[] = [];
        this.images.forEach(image => {
            state.push(image.serializeState());
        });
        console.log(state);
        return state;
    }

    public setMode(mode: ImagePrintMode) {
        this.globalOptions.imagePrintMode = mode;
        this.getCurrentPageImages().forEach(image => {
            image.setMode(mode);
        });
    }

    public zoomIn() {
        if (Viewport.zoomFactor >= this.maxZoomFactor) {
            return;
        }
        Viewport.zoomFactor = Viewport.zoomFactor + this.zoomStep;
        this.updateTilesZoom();
    }

    public zoomOut() {
        if (Viewport.zoomFactor <= this.minZoomFactor) {
            return;
        }
        Viewport.zoomFactor = Viewport.zoomFactor - this.zoomStep;
        this.updateTilesZoom();
    }

    private updateTilesZoom() {
        this.getCurrentPageImages().forEach(image => {
            console.log(image);
            image.setZoom();
        });
    }

    public fillColor(fill: boolean) {
        this.globalOptions.detectAndFillWithGradient = fill;
        this.getCurrentPageImages().forEach(image => {
            image.detectColorPalette(fill);
        });
    }

    public autoDetectBestFrame(isEnabled: boolean) {
        this.getCurrentPageImages().forEach(image => {
            if (isEnabled) {
                image.detectBestFrame();
            } else {
                image.resetCropper();
            }
        });
    }

    public setBorderWeight(thickness: number) {
        this.globalOptions.border!.thickness = thickness;
        this.getCurrentPageImages().forEach(image => {
            image.setBorderWeight(thickness);
        });
    }

    public setBorderColor(color: string) {
        this.globalOptions.border!.color = color;
        this.getCurrentPageImages().forEach(image => {
            image.setBorderColor(color);
        });
    }

    public setFrameType(type: FrameType) {
        this.getCurrentPageImages().forEach(image => {
            image.setFrameType(type);
        });
    }

    public renderImages(startIndex: number, endIndex: number) {
        const container = this.getContainer();
        container.innerHTML = "";

        this.getCurrentPageImages().forEach(tile => {
            tile.render(this.globalOptions, container);
           // container.append(tile.getContainer());
        });
    }

    public getImagesNumber(): number {
        return this.images.length;
    }

    getCurrentPageImages() {
        if(!this.paginationData){
            return this.images.slice(0, Application.CONFIG.imagesPerPage);
        }
        return this.images.slice(this.paginationData.startIndex, this.paginationData.endIndex + 1);
    }
}
