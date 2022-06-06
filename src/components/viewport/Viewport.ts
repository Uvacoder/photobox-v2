import {BaseView} from "../../BaseView";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {ImageParameters} from "../../interface/image/ImageParameters";
import {FrameType} from "../../constants/FrameType";
import Application from "../../Application";
import {Pagination as PaginationData} from "../../interface/Pagination";
import {PhotoBoxParameters} from "../../interface/PhotoBoxParameters";
import OptionsHandler from "../../utils/OptionsHandler";
import {ImageActions} from "../../interface/image/ImageActions";
import config from "../../config/config.json";
import {ImageTile} from "../image-tile/ImageTile";
import {ImageTileImpl} from "../image-tile/ImageTileImpl";

export default class Viewport extends BaseView<any, any> implements Observer, Observable, ImageActions {
    public images: ImageTileImpl[] = [];
    public static zoomFactor: number = 1;
    private maxZoomFactor: number = 1.5;
    private minZoomFactor: number = 1;
    private zoomStep: number = .05;
    public static initialSize: number = 200;
    private observers: Set<Observer>;
    //private photoBoxParameters?: PhotoBoxParameters;

    private paginationData?: PaginationData;
    globalOptions: ImageParameters = {
        cropData: null,
        imagePrintMode: ImagePrintMode.CROP,
        quantity: 0,
        size: {height: 9, width: 9},
        src: {
            thumbnail: "",
            full: ""
        },
        frame: {
            thickness: config.defaultFrameWeight,
            color: config.defaultFrameColor,
            type: FrameType.NONE
        }
    };

    constructor(container?: HTMLElement | null, photoBoxParameters?: PhotoBoxParameters) {
        super(container);
        this.observers = new Set();
        if(photoBoxParameters?.options){
            this.globalOptions.options = OptionsHandler.toMap(photoBoxParameters?.options);
        }
    }

    update(...args: unknown[]): void {
        console.log("Updating each tile....");
        console.log("Got data in viewport");
        console.log(args);
        let startTime = performance.now()
        this.images.forEach((image, i) => {
            image.updateParameters(this.globalOptions);
        });
        let endTime = performance.now()

        console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

    }

    subscribe(observer: Observer): void {
        this.observers.add(observer)
    }

    unsubscribe(observer: Observer): void {
        this.observers.delete(observer);
    }

    notify(message: any): void {
        this.observers.forEach(observer => {
            observer.update(message);
        });
    }

    onMountView() {}

    private notifyImagesChanged(){
        this.notify(this.images.length)
    }

    public addImage(parameters: ImageParameters) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';

        //container.insertBefore(imgContainer, container.firstChild);
        parameters = {...this.globalOptions, ...parameters};
        const imageTile = new ImageTileImpl(this.createHTMLElement('div', 'image-tile'), parameters)
        imageTile.registerListeners(this);

        this.images.push(imageTile);

        let renderedTile;
        if (this.images.length <= Application.CONFIG.imagesPerPage) {
            renderedTile = imageTile.render(this.globalOptions);
            //container.append(imageTile.getContainer());
        } else if (this.isLastPageWithEmptySlots()) {
            renderedTile = imageTile.render(this.globalOptions);
        }

        container.append(renderedTile || '');

        this.notifyImagesChanged();
    }


    public renderImages() {
        const container = this.getContainer();
        container.innerHTML = "";

        this.getCurrentPageImages().forEach(tile => {
            let rendered = tile.render(this.globalOptions);
            container.append(rendered);
        });
    }

    public onClone(uid: string){
        let index = this.images.map(function (e) {
            return e.uuid;
        }).indexOf(uid);
        const originalTile = this.images[index];
        const container = this.createHTMLElement('div', 'image-tile');
        const newTile = new ImageTileImpl(container, originalTile.serializeState());
        newTile.registerListeners(this);
        this.images.splice(index + 1, 0, newTile);

        this.notifyImagesChanged();
        if (this.paginationData) {
            this.renderImages();
        }
    }

    public onDelete(uid: string){
        let index = this.images.map(function (e) {
            return e.uuid;
        }).indexOf(uid);
        this.images.splice(index, 1);
        if (this.paginationData) {
            this.renderImages();
        }
        this.notifyImagesChanged();
    }

    public deleteAllImages(){
        this.images = [];
        this.renderImages();
        this.notifyImagesChanged();
    }

    private isLastPageWithEmptySlots(): boolean {
        if (!this.paginationData) {
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
        this.globalOptions.frame!.thickness = thickness;
        this.getCurrentPageImages().forEach(image => {
            image.setFrameWeight(thickness);
        });
    }

    public setBorderColor(color: string) {
        this.globalOptions.frame!.color = color;
        this.getCurrentPageImages().forEach(image => {
            image.setFrameColor(color);
        });
    }

    public setFrameType(type: FrameType) {
        this.globalOptions.frame!.type = type;
        this.getCurrentPageImages().forEach(image => {
            image.setFrameType(type);
        });
    }

    public getImagesNumber(): number {
        return this.images.length;
    }

    getCurrentPageImages() {
        if (!this.paginationData) {
            return this.images.slice(0, Application.CONFIG.imagesPerPage);
        }
        return this.images.slice(this.paginationData.startIndex, this.paginationData.endIndex + 1);
    }
}
