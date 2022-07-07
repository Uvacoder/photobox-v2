import Command from "../interface/command/Command";
import Application from "../Application";
import {measureSync} from "../utils/decorators";

export default class MakeOrderCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;

    }

    @measureSync
    execute(uuid: string): void {
        if (this.app.parameters.onMakeOrderCallback) {
            let photos = this.app.getViewport().serializePhotos();
            if(!photos.length){
                return;
            }
            this.app.parameters.onMakeOrderCallback({
                options: this.app.parameters.options,
                selectedOptions: this.app.getViewport().getSelectedOptions(),
                extra: '',
                photos: photos
            });
        }
    }


}
