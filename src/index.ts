import Application from "./Application";
import {Option} from "./interface/options/Option";
import OptionsHandler from "./utils/OptionsHandler";
import {PhotoBoxParameters} from "./interface/PhotoBoxParameters";
import {ExportedProperties} from "./interface/ExportedProperties";
import {Commands} from "./constants/Commands";

export default class PhotoBox {
    public onInit: (() => void) | undefined;
    private application: Application;
    private parameters: PhotoBoxParameters;

    constructor(parameters: PhotoBoxParameters, onStart: (arg: PhotoBox) => void) {
        this.application = new Application(parameters);
        this.parameters = parameters;
        this.application.init().then(() => {
            onStart(this);
        });
    }

    /**
     * Add new images to the photo box
     * @param images list of images
     */
    public addImages(images: any[]) {
        this.application.addImages1(images)
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
     * Clear photo box - delete all photos
     */
    public clear() {
        Application.INVOKER.execute({type: Commands.DELETE_ALL_IMAGES})
    }
}
