import {Component, createEffect, createSignal, onMount, Show} from "solid-js";
import {Action} from "../../interface/command/Action";
import Props from "../../interface/Props";
import {Toast, Tooltip} from "bootstrap";
import {Commands} from "../../constants/Commands";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {FrameType} from "../../constants/FrameType";
import {BsGrid, BsInfoSquare} from "solid-icons/bs";
import Swal from "sweetalert2";
import "@sweetalert2/theme-minimal";
import State from "../../interface/State";
import {t} from "../../i18n/i18n";
import {Option} from "../../interface/options/Option";
import {OptionItem} from "../../interface/options/OptionItem";
import OptionsHandler from "../../utils/OptionsHandler";
import {PreselectedOption} from "../../interface/options/PreselectedOption";
import Pickr from "@simonwep/pickr";
import config from "../../config/config.json";
import {HandledOptionResult} from "../../interface/options/HandledOptionResult";
import {Constants} from "../../constants/Constants";

export interface IProps extends Props {
    click: (action: Action) => void,
    optionChanged: (optionId: string, valueId: string) => void,
    preselectedOptions?: PreselectedOption[];
}

export interface IState extends State {
    setImagesNumber: (arg1: number) => void,
    setOptions: (options: Map<string, Option>) => void,
    setPreselectedOptions: (options: PreselectedOption[]) => void,
    setImageUploadProgress: (arg: number[]) => void,
}

const view: Component<IProps> = (props: IProps) => {
    let container: HTMLDivElement | undefined;
    const selectedOptionsMap = new Map<string, OptionItem>();
    let tooltipList: Tooltip[] = [];
    let frozenOptions: Map<string, Option> = new Map<string, Option>();

    const [imageMode, setImageMode] = createSignal(ImagePrintMode.CROP);
    const [detectPalette, setDetectPalette] = createSignal(false);
    const [detectBestFrame, setDetectBestFrame] = createSignal(true);
    const [frameThickness, setFrameThickness] = createSignal(config.defaultFrameWeight);
    const [frameColor, setFrameColor] = createSignal(config.defaultFrameColor);
    const [frameType, setFrameType] = createSignal(FrameType.NONE);
    const [imagesNumber, setImagesNumber] = createSignal(2);
    const [options, setOptions] = createSignal(new Map<string, Option>());
    const [preselectedOptions, setPreselectedOptions] = createSignal([] as PreselectedOption[]);
    const [imageUploadProgress, setImageUploadProgress] = createSignal([0, 0]);

    const state = {
        setImagesNumber,
        setOptions,
        setImageUploadProgress,
        setPreselectedOptions
    }


    onMount(function () {
        //console.log(i18n.t('hello', {name: "Andrii"}));

        if (props.onMount) {
            props.onMount(state)
        }
        createEffect(() => {
            dispatch({type: Commands.DETECT_PALETTE, payload: detectPalette()});
        });
        createEffect(() => {
            dispatch({type: Commands.AUTO_DETECT_FRAME, payload: detectBestFrame()});
        });

        //var toast = new Toast(document.getElementById('liveToast') as Element).show();
    })

/*    createEffect(() => {
        preselectedOptions().map(preselectedOption => {
            const handledOption = OptionsHandler.handleOptionChange(
                frozenOptions,
                selectedOptionsMap,
                true,
                preselectedOption.option_id,
                preselectedOption.option_value_id);
            if (!handledOption) {
                return;
            }
            updateView(handledOption.affectedOption, true, handledOption.affectedOptionItem);
            setOptions(handledOption.updatedOptions);
            //props.optionChanged();
        })
    })*/

    createEffect(() => {
        // console.log(options());
        //options();
        frozenOptions = new Map(options());
        const tooltipTriggerList = [].slice.call(container!.querySelectorAll('[data-bs-tooltip="tooltip"]'));
        tooltipList.map(tooltip => tooltip.dispose());
        tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl, {trigger: 'hover'})
        });
        // console.log(tooltipList);
    })

    createEffect(() => {
        frameType();
        createColorPicker("toolbar-color-picker");
    })

    const dispatch = (action: Action) => {
        props.click(action);
    }

    const onOptionChanged = (event: HTMLInputElement, optionId: string, valueId: string) => {

        const handledOption = OptionsHandler.handleOptionChange(options(), selectedOptionsMap, event.checked, optionId, valueId);
        if (!handledOption) {
            return;
        }
        console.log(options());

        updateView(handledOption.affectedOption, event.checked, handledOption.affectedOptionItem);
        setOptions(handledOption.updatedOptions);

        props.optionChanged(optionId, valueId);
    }


    const updateView = (option: Option, checked: boolean, affectedOption: OptionItem) => {
        // change image mode
        if (option.label === Constants.PRINT_MODE_OPTION_LABEL) {
            const mode = checked ? affectedOption.label as ImagePrintMode : ImagePrintMode.FULL;
            dispatch({
                type: Commands.CHANGE_IMAGE_PRINT_MODE,
                payload: mode
            });
            setImageMode(mode);
        }
        // change image frame
        else if (option.label === Constants.FRAME_OPTION_LABEL) {
            const frame = checked ? affectedOption.label as FrameType : FrameType.NONE;
            setFrameType(frame);
            dispatch({
                type: Commands.CHANGE_FRAME,
                payload: {frame: frame}
            });

            if(frame === FrameType.NONE){
                setFrameThickness(config.defaultFrameWeight);
                setFrameColor(config.defaultFrameColor);
            }
        }
        // change image size
        else if (option.label === "size") {
            dispatch({
                type: Commands.CHANGE_SIZE,
                payload: affectedOption.value
            })
        }
    }

    const resetOption = (optionId: string) => {
        const newOptions = new Map(options());

        const option = newOptions.get(optionId);
        if (!option) {
            return;
        }
        option.selected_name = null;
        option.option_values_map.forEach(value => {
            value.disabled = false;
            value.selected = false;
        });

        setOptions(newOptions);
    }

    const resetAllOptions = () => {
        const newOptions = new Map(options());

        newOptions.forEach(option => {
            option.selected_name = null;
            option.option_values_map.forEach(value => {
                value.disabled = false;
                value.selected = false;
            })
        });

        setOptions(newOptions);
    }

    const openUploadWindow = () => {
        dispatch({type: Commands.OPEN_UPLOAD_WINDOW});
    }

    const onMakeOrder = () => {
        dispatch({type: Commands.MAKE_ORDER});
    }

    // border color picker
    const createColorPicker = (el: string) => {

        if (!document.getElementById(el)) {
            return;
        }
        console.log(document.getElementById(el));
        //const container = document.createElement("div");
        // container.className = "color-picker";
        //document.append(container);
        const pickr = Pickr.create({
            el: `#${el}`,//'.color-picker',
            theme: 'nano', // or 'monolith', or 'nano'
            container: 'body',
            default: frameColor(),
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(103, 58, 183, 1)',
                'rgba(63, 81, 181, 1)',
                'rgba(33, 150, 243, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(0, 188, 212, 1)',
                'rgba(0, 150, 136, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(139, 195, 74, 1)',
                'rgba(205, 220, 57, 1)',
                'rgba(255, 235, 59, 1)',
                'rgba(255, 193, 7, 1)'
            ],
            components: {
                // Main components
                preview: true,
                opacity: false,
                hue: true,

            }
        });

        pickr.on('change', (color: any, source: any, instance: any) => {
            setFrameColor(color.toHEXA().toString());
            dispatch({type: Commands.CHANGE_FRAME, payload: {color: color.toHEXA().toString()}});
            pickr.applyColor(true);
        });

    }

    const deleteAllPhotos = () => {
        Swal.fire({
            title: t('confirmation.areYouSure'),
            text: t('confirmation.cantUndone'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: t('confirmation.yes'),
            cancelButtonText: t('confirmation.no')
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({type: Commands.DELETE_ALL_IMAGES})
            }
        })
    }


    return (
        <div ref={container}>
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">

                        <strong class="me-auto">Photobox v211</strong>
                        <small>Сейчас</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Приветствуем Вас в новой версии, Photobox v2!
                    </div>
                </div>
            </div>
            <div class="container px-4">

                <div class="row gx-5 mt-1">
                    <div class="col">
                        <div class="btn-group w-100 btn-group-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary"
                                    onClick={() => dispatch({type: 'zoomOut'})}>-
                            </button>
                            <button type="button" class="btn btn-outline-primary" disabled={true}>
                                <BsGrid size="1.5em"/>
                            </button>
                            <button type="button" class="btn btn-outline-primary"
                                    onClick={() => dispatch({type: 'zoomIn'})}>+
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row gx-5 mt-1">
                    <p class="m-0">
                        {t('toolbar.totalImages', {number: imagesNumber()})}
                    </p>
                </div>

                {imageUploadProgress()[0] &&
                    <div class="row gx-1 mr-0 ml-0 mt-1 mb- 2" data-bs-tooltip="tooltip" style={{cursor: 'pointer'}}
                         onClick={openUploadWindow}
                         title={t('toolbar.imageLoading')} data-bs-placement="right">
                        {t('toolbar.imageLoading')}:
                        <div className="progress" style="height: 15px;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                 aria-valuenow={imageUploadProgress()[0]}
                                 aria-valuemin="0"
                                 aria-valuemax={imageUploadProgress()[1]}
                                 style={{
                                     width: `${imageUploadProgress()[1] / 100 * imageUploadProgress()[0]}%`,
                                     "font-size": "13px"
                                 }}>
                                {Math.ceil(imageUploadProgress()[1] / 100 * imageUploadProgress()[0])}%
                            </div>
                        </div>
                    </div>
                }
                {Array.from(options().values()).map((option: Option) =>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true"
                                        data-bs-auto-close="outside">
                                    <span style={{"max-width": "100px"}} class="option-dropdown-title">
                                        {option.selected_name || option.name}
                                    </span>
                                    {option.description &&
                                        <span data-bs-tooltip="tooltip" title={option.description}
                                              data-bs-placement="right">&nbsp; <BsInfoSquare size="1.2em"/>
                                    </span>
                                    }
                                </button>
                                <ul class="dropdown-menu">
                                    {Array.from(option.option_values_map.values()).map((optionValue: OptionItem) =>
                                        <li data-bs-tooltip="tooltip"
                                            title={optionValue.conflictedOptions ? `Конфликт опций: <br/>${optionValue.conflictedOptions.join(",<br/>")}` : optionValue.description}
                                            data-bs-placement="right" data-bs-html={"true"}
                                            data-bs-custom-class={`${optionValue.conflictedOptions ? 'warning-tooltip' : 'tooltip'}`}>
                                            <label class={`dropdown-item ${optionValue.disabled ? 'disabled' : ''}`}
                                                   for={`option-${optionValue.option_value_id}`}>
                                                <input class="form-check-input m-1" type="checkbox"
                                                       name={`group-${option.option_id}`}
                                                       disabled={optionValue.disabled} checked={optionValue.selected}
                                                       id={`option-${optionValue.option_value_id}`} onChange={(e) => {
                                                    onOptionChanged(e.target as HTMLInputElement, option.option_id, optionValue.option_value_id);
                                                    e.preventDefault();
                                                }}/>
                                                {optionValue.name}
                                            </label>
                                        </li>
                                    )}
                                    {/* <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item link-warning" href="#" onClick={() => resetOption(option.option_id)}>Сбросить</a></li>
                                    <li><a class="dropdown-item link-danger" href="#" onClick={resetAllOptions}>Сбросить все</a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <Show when={imageMode() === ImagePrintMode.FULL}>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" checked={detectPalette()} type="checkbox"
                                       role="switch"
                                       id="flexSwitchCheckDefault"
                                       onChange={(e) => setDetectPalette((e.target as HTMLInputElement).checked)}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Подобрать фон</label>
                            </div>
                        </div>
                    </div>
                </Show>
                {/*<div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" checked={detectBestFrame()} type="checkbox"
                                       role="switch"
                                       id="flexSwitchCheckDefault"
                                       onChange={(e) => setDetectBestFrame((e.target as HTMLInputElement).checked)}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Smart кадр</label>
                            </div>
                        </div>
                    </div>*/}

                <Show when={frameType() !== FrameType.NONE}>
                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="frameColorInput" class="col-form-label">Цвет</label>
                                <div id="toolbar-color-picker"/>
                                {/* <input type="color" class="form-control " id="frameColorInput" value={frameColor()}

                                           title="Choose your color" onInput={(data) => {
                                        // @ts-ignore
                                        const value = data.target.value;
                                        setFrameColor(value);
                                        dispatch({type: Commands.CHANGE_FRAME, payload: {color: value}})
                                    }}/>*/}
                            </div>
                        </div>
                    </div>
                </Show>
                <Show when={frameType() === FrameType.REGULAR}>
                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="frameColor" class="form-label">Размер({frameThickness}мм)</label>
                                <input type="range" class="form-range" onInput={(data) => {
                                    const value = (data.target as HTMLInputElement).value;
                                    setFrameThickness(parseInt(value));
                                    dispatch({type: Commands.CHANGE_FRAME, payload: {thickness: parseInt(value)}})
                                }} min="0" max="15" step="1" value={frameThickness()} id="frameColor"/>
                            </div>
                        </div>
                    </div>
                </Show>

                <div class="row gx-5 mb-5 mt-1">
                    <div class="col">
                        <button type="button" class="btn btn-danger w-100" onClick={deleteAllPhotos}>Удалить все
                        </button>
                    </div>
                </div>

                <div class="row gx-5 mt-1">
                    <div class="col">
                        <button type="button" class="btn btn-success w-100" onClick={onMakeOrder}>Заказать</button>
                    </div>
                </div>

            </div>
        </div>)
}
export default view;
