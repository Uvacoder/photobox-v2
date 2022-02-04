import Command from "../interface/Command";
import Application from "../Application";
import {ImagePrintMode} from "../constants/ImagePrintMode";

export class ExportOrderCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(): void {
        this.app.getViewport().serializeState();
    }


}
