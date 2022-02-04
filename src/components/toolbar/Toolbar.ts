import {BaseView} from "../../BaseView";
import view from "./view";
import {ImageTile} from "../image-tile/ImageTile";
import Command from "../../interface/Command";
import Application from "../../Application";
import {IState} from "../image-tile/view";
import {Action} from "../../interface/Action";

export default class Toolbar extends BaseView<any> {
    private zoomIn: Command | undefined;
    private zoomOut: Command | undefined;

    constructor(container?: HTMLElement | null) {
        super(container);
        const props = {
            click: (action: Action) => {
                Application.INVOKER.execute(action);

            }
        };
        this.mountView(view.template, props);
        view.subscribe(() => {
            console.log('got event');
        })
    }

    onMountView(state: IState): void {
        console.log('mounted');

    }

    public setOnStart(command: Command): void {
        this.zoomIn = command;
    }
}
