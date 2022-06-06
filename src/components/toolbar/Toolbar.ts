import {BaseView} from "../../BaseView";
import view, {IProps, IState} from "./view";
import Application from "../../Application";
import {Action} from "../../interface/command/Action";
import {Option} from "../../interface/options/Option";
import OptionsHandler from "../../utils/OptionsHandler";
import {Commands} from "../../constants/Commands";
import {PreselectedOption} from "../../interface/options/PreselectedOption";
import {PhotoBoxParameters} from "../../interface/PhotoBoxParameters";

export default class Toolbar extends BaseView<any, any> implements Observer, Observable{

    private observers: Set<Observer>;
    private viewState: IState | null = null;
    private parameters: PhotoBoxParameters | undefined;

    constructor(container: HTMLElement | null, parameters?: PhotoBoxParameters) {
        super(container);
        this.observers = new Set();
        this.parameters = parameters;
        const props: IProps = {
            click: (action: Action) => {
                Application.INVOKER.execute(action);
            },
            optionChanged: (optionId: string, valueId: string) => {
                //console.log(optionId , valueId);
                //console.log(this.parameters?.options);
                Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED, payload: {optionId, valueId}});
                this.notify(Commands.PROPERTY_CHANGED, {optionId, valueId});
            },
            preselectedOptions: parameters?.preselectedOptions
        };
        this.mountView(view, props);
    }

    subscribe(observer: Observer): void {
        this.observers.add(observer)
    }

    unsubscribe(message: any): void {
        this.observers.forEach(observer => {
            observer.update(message);
        });
    }

    notify(...args: any[]): void {
        this.observers.forEach(observer => {
            observer.update(args);
        });
    }

    onMountView(state: IState): void {

        this.viewState = state;

        if(this.parameters?.options){
            this.viewState?.setOptions(OptionsHandler.toMap(this.parameters?.options));
        }

        if(this.parameters?.preselectedOptions){
            this.viewState?.setPreselectedOptions(this.parameters?.preselectedOptions);
        }
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
