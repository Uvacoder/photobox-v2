import Command from "../interface/command/Command";
import Application from "../Application";

export default class TileZoomInCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(): void {
        this.app.getViewport().zoomIn();
    }


}
