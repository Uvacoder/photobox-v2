import Command from "../interface/Command";
import Application from "../Application";
import {ImagePrintMode} from "../constants/ImagePrintMode";

export default class ImagePrintModeCommand implements Command {
    private app: Application;
    private mode: ImagePrintMode;

    constructor(app: Application, mode: ImagePrintMode) {
        this.app = app;
        this.mode = mode;
    }

    execute(): void {
        this.app.getViewport().setMode(this.mode);
    }


}
