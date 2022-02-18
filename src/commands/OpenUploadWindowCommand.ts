import Command from "../interface/command/Command";
import Application from "../Application";

export default class OpenUploadWindowCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;

    }

    execute(uuid: string): void {
        if(this.app.parameters.onOpenUploadWindowCallback){
            this.app.parameters.onOpenUploadWindowCallback();
        }
    }


}
