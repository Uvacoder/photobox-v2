import {BaseView} from "../../BaseView";
import view, {IProps, IState} from "./view";
import Application from "../../Application";
import {Action} from "../../interface/command/Action";
import {Option} from "../../interface/options/Option";
import OptionsHandler from "../../utils/OptionsHandler";
import {Commands} from "../../constants/Commands";
import {PreselectedOption} from "../../interface/options/PreselectedOption";

export default class Toolbar extends BaseView<any, any> implements Observer{

    private viewState: IState | null = null;

    constructor(container?: HTMLElement | null, preselectedOptions?: PreselectedOption[]) {
        super(container);
        console.log(preselectedOptions);
        const props: IProps = {
            click: (action: Action) => {
                Application.INVOKER.execute(action);
            },
            optionChanged: () => {
                Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED});
            },
            preselectedOptions: preselectedOptions
        };
        this.mountView(view, props);
    }

    onMountView(state: IState): void {
        this.viewState = state;
    }

    public setOptions(options: Option[], preselectedOptions?: PreselectedOption[]){
        this.viewState?.setOptions(OptionsHandler.toMap(options));

        if(preselectedOptions){
            this.viewState?.setPreselectedOptions(preselectedOptions);
        }
    }

    public updateImageUploadProgress(loaded: number, total: number){
        this.viewState?.setImageUploadProgress([loaded, total]);
    }

    update(...args: unknown[]): void {

        this.viewState?.setImagesNumber(args[0] as number)
    }

}
