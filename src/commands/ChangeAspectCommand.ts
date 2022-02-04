import Command from "../interface/Command";
import Application from "../Application";

export default class ChangeAspectCommand implements Command {
    private app: Application;
    private width: number;
    private height: number;

    constructor(app: Application, width: number, height: number) {
        this.app = app;
        this.width = width;
        this.height = height;
    }

    execute(): void {
        this.app.getViewport().setAspectRatio(this.width, this.height);
    }


}
