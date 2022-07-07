import Command from "../interface/command/Command";
import Application from "../Application";

export class ChangeFrameCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    execute(payload: any): void {
        if(payload.thickness !== undefined){
            this.app.getViewport().setBorderWeight(payload.thickness);
        }

        if(payload.color !== undefined){
            this.app.getViewport().setBorderColor(payload.color);
        }

    }


}
