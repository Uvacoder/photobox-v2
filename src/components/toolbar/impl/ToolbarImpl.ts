import {BaseView} from "../../BaseView";
import view, {IProps, IState} from "../view";
import Application from "../../../Application";
import {Action} from "../../../interface/command/Action";
import {showInfoToast} from "../../../utils/utils";
import OptionsHandler from "../../../utils/OptionsHandler";
import {Commands} from "../../../constants/Commands";
import {PreselectedOption} from "../../../interface/options/PreselectedOption";
import {PhotoBoxParameters} from "../../../interface/PhotoBoxParameters";
import {Observer} from "../../../interface/observer/Observer";
import {OptionItem} from "../../../interface/options/OptionItem";
import {HandledOptionResult} from "../../../interface/options/HandledOptionResult";
import {Constants} from "../../../constants/Constants";
import {FrameType} from "../../../constants/FrameType";
import {ImagePrintMode} from "../../../constants/ImagePrintMode";
import {Toolbar} from "../Toolbar";
import {t} from "../../../i18n/i18n";

export default class ToolbarImpl extends BaseView<any, any> implements Toolbar {

    private observers: Set<Observer>;
    private viewState: IState | null = null;
    private parameters: PhotoBoxParameters;
    private selectedOptionsMap: Map<string, OptionItem> = new Map<string, OptionItem>();
    private imagesLoading = false;

    constructor(container: HTMLElement | null, parameters: PhotoBoxParameters) {
        super(container);
        this.observers = new Set();
        this.parameters = parameters;
        const props: IProps = {
            onActionCalled: (action: Action) => Application.INVOKER.execute(action),
            optionChanged: this.onOptionChanged.bind(this),
            selectedOptionsMap: this.selectedOptionsMap
        };
        this.mountView(view, props);
    }

    private onOptionChanged(optionId: string, valueId: string, checked?: boolean) {
        this.notify(Commands.PROPERTY_CHANGED, {
            option_id: optionId,
            option_value_id: valueId,
            checked: checked
        } as PreselectedOption);
        Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED, payload: {optionId, valueId}});
    }

    subscribe(observer: Observer): void {
        this.observers.add(observer)
    }

    unsubscribe(observer: Observer): void {
        this.observers.delete(observer);
    }

    notify(event: Commands, ...args: any[]): void {
        this.observers.forEach(observer => {
            observer.update(event, args);
        });
    }

    onMountView(state: IState): void {
        this.viewState = state;
        this.updateOptions();
    }


    private updateOptions() {
        const options = OptionsHandler.toMap(this.parameters.options);
        this.viewState?.setOptions(options);

        // if was provided array with selected options IDs
        if (this.parameters?.preselectedOptions) {

            let handledOptionResult: HandledOptionResult | undefined;
            // go through previously selected option and generate options map for rendering
            this.parameters.preselectedOptions.forEach(option => {
                handledOptionResult = OptionsHandler.buildOptionsMapFromSelectedOptionsIds(
                    options,
                    this.selectedOptionsMap,
                    option
                );
            });

            // re-render options
            if (handledOptionResult) {
                this.viewState?.setOptions(handledOptionResult.updatedOptions);

                // check if option can impact on some functionality
                // e.g. border, crop mode
                handledOptionResult.updatedOptions.forEach((v, k) => {
                    let selected = v.option_values.filter(el => el.selected)[0]

                    if (selected) {
                        switch (v.label) {
                            case Constants.PRINT_MODE_OPTION_LABEL:
                                this.viewState?.setImageMode(selected.label as ImagePrintMode);
                                break;
                            case Constants.FRAME_OPTION_LABEL:
                                this.viewState?.setFrameType(selected.label as FrameType);
                                break;
                        }
                    }

                })
            }

        }
    }

    public updateImageUploadProgress(progress: number) {
        this.viewState?.setImageUploadProgress(progress);
    }

    public setImageProcessingStatus(text: string | null) {
        this.viewState?.setImageProcessingProgressText(text ? text : '');
        if(text){
            showInfoToast(t(`toolbar.${text}`));
        }

    }

    public resetOptions() {
        this.viewState?.resetOptions();
        this.viewState?.setDetectPalette(false);
        this.viewState?.setImagesNumber(0);
    }

    setPreselectedOptions(preselectedOptions: PreselectedOption[]): void {
        this.parameters.preselectedOptions = preselectedOptions;
        this.updateOptions();
    }

    update(event: Commands, ...args: any[]): void {
        if(event == Commands.IMAGES_CHANGED){
            this.viewState?.setImagesNumber(args[0] as number)
        }

    }

}
