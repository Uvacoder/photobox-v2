import ICommand from "../interface/ICommand";
import Application from "../Application";

export default class TileZoomInCommand implements ICommand {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(): void {
        this.app.getViewPort().zoomIn();
    }


}
