import Command from "../interface/command/Command";
import Application from "../Application";

export class DetectBestFrameCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(isEnabled: boolean): void {
        this.app.getViewport().autoDetectBestFrame(isEnabled);
    }


}
