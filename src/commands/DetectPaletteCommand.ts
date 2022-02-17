import Command from "../interface/command/Command";
import Application from "../Application";

export class DetectPaletteCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(params?: boolean): void {
        this.app.getViewport().fillColor(params || false);
    }


}
