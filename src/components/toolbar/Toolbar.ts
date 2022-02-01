import {BaseView} from "../../BaseView";
import view from "./view";
import {ImageTile} from "../image-tile/ImageTile";
import ICommand from "../../interface/ICommand";
import Application from "../../Application";

export default class Toolbar extends BaseView<any> {
    private zoomIn: ICommand | undefined;
    private zoomOut: ICommand | undefined;

    constructor(container?: HTMLElement) {
        super(container);
        const jsx = view.template({
            click: (action) => {
                console.log(action);
                switch (action.type){
                    case 'zoomIn':
                        Application.INVOKER.execute('1');
                        break;
                    case 'zoomOut':
                        Application.INVOKER.execute('2');
                        break;
                    case '9x13':
                        Application.INVOKER.execute('9x13');
                        break;
                    case '9x9':
                        Application.INVOKER.execute('9x9');
                        break;
                    case '13x18':
                        Application.INVOKER.execute('13x18');
                        break;
                }

            }
        });
        this.init(jsx);
        view.subscribe(() => {
            console.log('got event');
        })
    }

    public setOnStart(command: ICommand): void {
        this.zoomIn = command;
    }
}
