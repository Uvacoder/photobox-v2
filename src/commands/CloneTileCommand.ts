import Command from "../interface/command/Command";
import Application from "../Application";
import {ImageTileImpl} from "../components/image-tile/ImageTileImpl";

export default class CloneTileCommand implements Command {
    private app: Application;


    constructor(app: Application) {
        this.app = app;

    }

    execute(uuid: string): void {
        //this.app.getViewport().cloneTile(uuid);
    }


}
