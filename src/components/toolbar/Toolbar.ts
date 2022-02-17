import {BaseView} from "../../BaseView";
import view, {IState} from "./view";
import {ImageTile} from "../image-tile/ImageTile";
import Command from "../../interface/command/Command";
import Application from "../../Application";
import {Action} from "../../interface/command/Action";
import {Option} from "../../interface/options/Option";
import OptionsHandler from "../../utils/OptionsHandler";

export default class Toolbar extends BaseView<any, any> implements Observer{

    private viewState: IState | null = null;

    constructor(container?: HTMLElement | null) {
        super(container);
        const props = {
            click: (action: Action) => {
                Application.INVOKER.execute(action);

            }
        };
        this.mountView(view, props);
    }

    onMountView(state: IState): void {
        this.viewState = state;
    }

    public setOptions(options: Option[]){
        this.viewState?.setOptions(OptionsHandler.toMap(options));
    }

    update(...args: unknown[]): void {

        this.viewState?.setImagesNumber(args[0] as number)
    }

}
