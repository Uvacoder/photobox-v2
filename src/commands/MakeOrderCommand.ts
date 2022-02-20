import Command from "../interface/command/Command";
import Application from "../Application";

export default class MakeOrderCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;

    }

    execute(uuid: string): void {
        if(this.app.parameters.onMakeOrderCallback){
            this.app.parameters.onMakeOrderCallback({
                options: this.app.parameters.options,
                extra: 'extra',
                photos: this.app.getViewport().serializeState()
            });
        }
    }


}
