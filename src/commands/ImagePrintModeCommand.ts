import Command from "../interface/command/Command";
import Application from "../Application";
import {ImagePrintMode} from "../constants/ImagePrintMode";

export default class ImagePrintModeCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(mode: ImagePrintMode): void {
        this.app.getViewport().setMode(mode);
    }


}
