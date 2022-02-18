import Command from "../interface/command/Command";
import Application from "../Application";

export default class DeleteAllImagesCommand implements Command {
    private app: Application;


    constructor(app: Application) {
        this.app = app;

    }

    execute(uuid: string): void {
        this.app.getViewport().deleteAllImages();
        this.app.parameters.onDeleteAllPhotosCallback();
    }


}
