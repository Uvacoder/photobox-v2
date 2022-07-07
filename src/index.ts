import Application from "./Application";
import {PhotoBoxParameters} from "./interface/PhotoBoxParameters";
import {ExportedProperties} from "./interface/ExportedProperties";
import {Commands} from "./constants/Commands";
import {PreselectedOption} from "./interface/options/PreselectedOption";

export default class PhotoBox {
    public onReadyCallback?: (() => void);
    private application: Application;
    private parameters: PhotoBoxParameters;
    private readonly onStart: (arg: PhotoBox) => void;
    private initialized = false;

    constructor(parameters: PhotoBoxParameters, onStart: (arg: PhotoBox) => void) {
        this.application = new Application(parameters);
        this.parameters = parameters;
        this.onStart = onStart;
        this.init();
    }

    private init() {
        this.application.init().then(() => {
            this.onReadyCallback?.call(this);
            this.onStart(this);
            this.initialized = true;
        })
    }

    public onReady(callback: () => void) {
        if(this.initialized){
            callback.call(this);
            return;
        }
        this.onReadyCallback = callback;
    }

    /**
     * Add new images to the photo box
     * @param images list of images
     */
    public addImages(images: any[]) {
        if (!images) {
            return;
        }
        this.application.addImages(images)
    }

    /**
     * Fires when order button has been clicked
     * @param callback function
     */
    public onMakeOrder(callback: () => void) {
        this.parameters.onMakeOrderCallback = callback;
    }

    /**
     * Fires when all photos have been deleted
     * @param callback function
     */
    public onDeleteAllPhotos(callback: () => void) {
        this.parameters.onDeleteAllPhotosCallback = callback;
    }

    /**
     * Fires when option or property has been changed
     * @param callback function
     */
    public onPropertiesChanged(callback: (properties: ExportedProperties) => void) {
        this.parameters.onPropertiesChangedCallback = callback;
    }

    /**
     * Update uploading photos progress bar
     * @param loaded number of loaded photos
     * @param total total photos
     */
    public updateImageUploadProgress(loaded: number, total: number) {
        this.application.updateImageUploadProgress(loaded, total);
    }

    /**
     * Fires when user clicked on photo uploading progress
     * @param callback function
     */
    public onOpenUploadWindow(callback: () => void) {
        this.parameters.onOpenUploadWindowCallback = callback;
    }

    /**
     * Set previously selected options
     * @param preselectedOptions
     */
    public setPreselectedOptions(preselectedOptions: PreselectedOption[]) {
        this.application.setPreselectedOptions(preselectedOptions);
    }


    /**
     * Clear photo box - delete all photos and reset options
     */
    public clear() {
        this.application.clearPhotobox();
    }
}
