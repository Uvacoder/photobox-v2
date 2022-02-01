import ICommand from "../interface/ICommand";
import Application from "../Application";

export default class ChangeAspectCommand implements ICommand {
    private app: Application;
    private aspect: number;

    constructor(app: Application, aspect: number) {
        this.app = app;
        this.aspect = aspect;
    }

    execute(): void {
        this.app.getViewPort().setAspectRatio(this.aspect);
    }


}
