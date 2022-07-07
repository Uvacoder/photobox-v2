import {BaseView} from "../../BaseView";
import {ImagePrintMode} from "../../../constants/ImagePrintMode";
import {ImageParameters} from "../../../interface/image/ImageParameters";
import Application from "../../../Application";
import {Pagination as PaginationData} from "../../../interface/Pagination";
import {PhotoBoxParameters} from "../../../interface/PhotoBoxParameters";
import OptionsHandler from "../../../utils/OptionsHandler";
import {ImageActions} from "../../../interface/image/ImageActions";
import {ImageTileImpl} from "../../image-tile/impl/ImageTileImpl";
import {Observer} from "../../../interface/observer/Observer";
import {Commands} from "../../../constants/Commands";
import ImageParametersImpl from "../../../utils/ImageParametersImpl";
import {measureAsync, measureSync} from "../../../utils/decorators";
import {ImageTile} from "../../image-tile/ImageTile";
import {Viewport} from "../Viewport";
import {showWarningMessage} from "../../../utils/utils";
import {t} from "../../../i18n/i18n";
import {PreselectedOption} from "../../../interface/options/PreselectedOption";


export default class ViewportImpl extends BaseView<any, any> implements Viewport, ImageActions {
    public images: ImageTile[] = [];
    public static zoomFactor: number = 1;
    private maxZoomFactor: number = 1.5;
    private minZoomFactor: number = 1;
    private zoomStep: number = .05;
    public static initialSize: number = 200;
    private observers: Set<Observer>;
    private photoBoxParameters: PhotoBoxParameters;

    private paginationData?: PaginationData;

    private globalOptions = new ImageParametersImpl();

    constructor(container: HTMLElement | null, photoBoxParameters: PhotoBoxParameters) {
        super(container);
        this.observers = new Set();
        this.photoBoxParameters = photoBoxParameters;
        if (photoBoxParameters.options) {
            this.globalOptions.options = OptionsHandler.toMap(photoBoxParameters.options);
        }
        if(photoBoxParameters.preselectedOptions){
            this.globalOptions.selectedOptions = photoBoxParameters.preselectedOptions;
        }
    }

    @measureSync
    update(...args: any[]): void {
        let uid = "";


        let option = args[1][0] as PreselectedOption;
        if(!option.checked){
           // this.globalOptions.selectedOptions.
            this.globalOptions.selectedOptions = this.globalOptions.selectedOptions.filter(el => {
                return el.option_id.toString() != option.option_id.toString();
            })
        }else{
            this.globalOptions.selectedOptions.push(option);
        }


        this.images.forEach((image, i) => {
            let res = image.updateParameters(args[1][0]);
            if (!uid && res) {
                uid = res;
            }
        });


        this.images.forEach((el, i) => {
            if (el.uuid == uid) {
                console.log(`The item is found at index: ${i}, page: ${Math.ceil(i / 30)}`);
                //Application.INVOKER.execute({type: Commands.GO_TO_PAGE, })
                return;
            }
        })

    }

    subscribe(observer: Observer): void {
        this.observers.add(observer)
    }

    unsubscribe(observer: Observer): void {
        this.observers.delete(observer);
    }

    notify(event: Commands, ...data: any[]): void {
        this.observers.forEach(observer => {
            observer.update(event, data);
        });
    }

    onMountView() {
    }

    private notifyImagesChanged() {
        this.notify(Commands.IMAGES_CHANGED, this.images.length)
    }

    public addImage(parameters: any) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';

        if(parameters.options){
            delete parameters.options;
        }

        //container.insertBefore(imgContainer, container.firstChild);
        parameters = {...this.globalOptions, ...parameters};
        const tileContainer = this.createHTMLElement('div', 'image-tile');
        const tileParameters = new ImageParametersImpl().deserialize(parameters as any);
        const imageTile = new ImageTileImpl(tileContainer, tileParameters, this);
        imageTile.registerListeners(this);

        this.images.push(imageTile);

        let renderedTile;
        if (this.images.length <= Application.CONFIG.itemsPerPage) {
            renderedTile = imageTile.show();
            //container.append(imageTile.getContainer());
        } else if (this.isLastPageWithEmptySlots()) {
            renderedTile = imageTile.show();
        }

        container.append(renderedTile || '');

        this.notifyImagesChanged();
    }


    public renderImages() {
        const container = this.getContainer();
        container.innerHTML = "";

        this.getCurrentPageImages().forEach(tile => {
            let rendered = tile.show();
            container.append(rendered);
        });
    }

    public onClone(uid: string) {
        let index = this.images.map(function (e) {
            return e.uuid;
        }).indexOf(uid);
        const originalTile = this.images[index];
        const container = this.createHTMLElement('div', 'image-tile');
        const newTile = new ImageTileImpl(container, originalTile.copyImageParameter(), this);
        newTile.registerListeners(this);
        this.images.splice(index + 1, 0, newTile);

        this.notifyImagesChanged();
        if (this.paginationData) {
            this.renderImages();
        }
        Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED});
    }

    public onDelete(uid: string) {
        let index = this.images.map(function (e) {
            return e.uuid;
        }).indexOf(uid);
        this.images.splice(index, 1);
        if (this.paginationData) {
            this.renderImages();
        }
        this.notifyImagesChanged();
        Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED});
    }

    public deleteAllImages() {
        this.images = [];
        this.renderImages();
        // notify all subscribers that all images have been deleted
        this.notify(Commands.DELETE_ALL_IMAGES, this.images.length)
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
            //cropper.setAspectRatio(width, height);
        });
    }

    public serializePhotos(): ImageParameters[] {
        const state: ImageParameters[] = [];
        let optionIsNotSelected = false;
        if(this.globalOptions.selectedOptions.length < this.photoBoxParameters.options.length){
            //showWarningMessage(t('optionIsNotSelectedWarning'))
            //return [];
        }
        this.images.every(image => {
            let result = image.serializeState();
            // if image doesn't have any selected option, use global options if they are presented
            if(result.selectedOptions.length === 0 && this.globalOptions.selectedOptions.length == this.photoBoxParameters.options.length){
                result.selectedOptions = JSON.parse(JSON.stringify(this.globalOptions.selectedOptions));
            }
            if(result.selectedOptions.length < this.photoBoxParameters.options.length){
                showWarningMessage(t('optionIsNotSelectedWarning'))
                optionIsNotSelected = true;
                return false;
            }
            state.push(result);
            return true;
        });
        return optionIsNotSelected ? [] : state;
    }

    public getPhotoProperties(): ImageParameters[] {
        const state: ImageParameters[] = [];

        this.images.forEach(image => {
            state.push(image.shallowSerialize());
        });
        return state;
    }

    public setPreselectedOptions(preselectedOptions: PreselectedOption[]){
        this.globalOptions.selectedOptions = preselectedOptions.filter(o => +o.option_id && +o.option_value_id);
    }

    public getSelectedOptions(): PreselectedOption[]{
        return this.globalOptions.selectedOptions;
    }

    public setMode(mode: ImagePrintMode) {
        this.globalOptions.imagePrintMode = mode;
        this.getCurrentPageImages().forEach(image => {
            //image.setMode(mode);
        });
    }

    public zoomIn() {
        if (ViewportImpl.zoomFactor >= this.maxZoomFactor) {
            return;
        }
        ViewportImpl.zoomFactor = ViewportImpl.zoomFactor + this.zoomStep;
        this.updateTilesZoom();
    }

    public zoomOut() {
        if (ViewportImpl.zoomFactor <= this.minZoomFactor) {
            return;
        }
        ViewportImpl.zoomFactor = ViewportImpl.zoomFactor - this.zoomStep;
        this.updateTilesZoom();
    }

    private updateTilesZoom() {
        this.getCurrentPageImages().forEach(image => {
            image.updateZoom();
        });
    }

    public fillColor(fill: boolean) {
        this.globalOptions.detectAndFillWithGradient = fill;
        this.images.forEach(image => {
            image.detectColorPalette(fill);
        });
    }


    public setBorderWeight(thickness: number) {
        this.globalOptions.frame.thickness = thickness;
        this.images.forEach(image => {
            image.setFrameWeight(thickness);
        });
    }

    public setBorderColor(color: string) {
        this.globalOptions.frame.color = color;
        this.images.forEach(image => {
            image.setFrameColor(color);
        });
    }

    public getImagesNumber(): number {
        return this.images.length;
    }

    getCurrentPageImages() {
        if (!this.paginationData) {
            return this.images.slice(0, Application.CONFIG.itemsPerPage);
        }
        return this.images.slice(this.paginationData.startIndex, this.paginationData.endIndex + 1);
    }
}
