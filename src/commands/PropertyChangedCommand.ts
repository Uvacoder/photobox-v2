import Command from "../interface/command/Command";
import Application from "../Application";
import {FrameType} from "../constants/FrameType";

export default class PropertyChangedCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;

    }

    execute(payload: object): void {
        if(this.app.parameters.onPropertiesChangedCallback){
            this.app.parameters.onPropertiesChangedCallback({
                options: this.app.parameters.options,
                selectedOptions: this.app.getViewport().getSelectedOptions(),
                extra: '',
                photos: this.app.getViewport().getPhotoProperties()
            });
        }
    }


}
