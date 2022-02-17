import Command from "../interface/command/Command";
import Application from "../Application";
import {Pagination} from "../interface/Pagination";

export class GoToPageCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(paginationData: Pagination): void {
        this.app.getViewport().renderImages(paginationData.startIndex, paginationData.endIndex);
    }


}
