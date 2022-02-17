import {Component, createEffect, createSignal, onMount, Show} from "solid-js";
import {Action} from "../../interface/command/Action";
import Props from "../../interface/Props";
import {Toast} from "bootstrap";
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

interface IProps extends Props {
    click: (action: Action) => void
}

export interface IState extends State {
    setImagesNumber: (arg1: number) => void,
    setOptions: (options: Map<string, Option>) => void
}


const view: Component<IProps> = (props: IProps) => {
    let container: HTMLDivElement | undefined;
    const selectedOptionsMap = new Map<string, OptionItem>();
    const optionsMap = new Map<string, Option>();

    const [imageMode, setImageMode] = createSignal(ImagePrintMode.CROP);
    const [detectPalette, setDetectPalette] = createSignal(false);
    const [detectBestFrame, setDetectBestFrame] = createSignal(true);
    const [frameThickness, setFrameThickness] = createSignal(0);
    const [frameColor, setFrameColor] = createSignal('#ffffff');
    const [frameType, setFrameType] = createSignal(FrameType.NONE);
    const [imagesNumber, setImagesNumber] = createSignal(2);
    const [options, setOptions] = createSignal(new Map<string, Option>());

    const dispatch = (action: Action) => {
        props.click(action);
        //subscribe();
    }

    const changeOption = (event: HTMLInputElement, optionId: string, valueId: string) => {

        const newOptions = new Map(options());

        // reset all disabled options
        newOptions.forEach(option => {
            option.option_values_map.forEach(value => {
                value.disabled = false;
            })
        })


        const option = newOptions.get(optionId);
        if (!option || !option.option_values_map) {
            return;
        }

        // unselect all variants of option
        option.option_values_map.forEach((item) => {
            item.selected = false;
        });

        const affectedOption = option.option_values_map.get(valueId);
        if (!affectedOption) {
            return;
        }
        option.selected_name = affectedOption.name;
        affectedOption.selected = event.checked;


        selectedOptionsMap.set(optionId, affectedOption);
        if (!affectedOption.selected) {
            selectedOptionsMap.delete(optionId);
            option.selected_name = null;
        }
        selectedOptionsMap.forEach(sop => {
            sop.relation_options.map(ro => {
                if (!newOptions.get(ro.option_id)) {
                    return;
                }
                // @ts-ignore
                newOptions.get(ro.option_id).option_values_map.forEach(ovm => {
                    if (!ro.option_value_id.includes(ovm.option_value_id)) {
                        ovm.disabled = true;
                    }
                })
            })
        })


        console.log(selectedOptionsMap);
        //setOptions(new Map<string, Option>());
        setOptions(newOptions);

        if(option.label === "framing"){
            const mode = event.checked ? affectedOption.label as ImagePrintMode : ImagePrintMode.FULL;
            dispatch({
                type: Commands.CHANGE_IMAGE_PRINT_MODE,
                payload: mode
            });
            setImageMode(mode);
        }else if(option.label === FrameType.FRAME_OPTION_LABEL){
            const frame = event.checked ? affectedOption.label as FrameType : FrameType.NONE;
            setFrameType(frame);
            dispatch({
                type: Commands.CHANGE_FRAME,
                payload: {frame: frame}
            })
        }else if(option.label === "size"){
            dispatch({
                type: Commands.CHANGE_SIZE,
                payload: affectedOption.value
            })
        }
        /*const relatedOptions: OptionItemRelation[] = [];//getRelatedOptionsForSelectedOption(optionId, valueId);
        newOptions.map((option: Option) => {
            if(option.option_id != optionId){
                return;
            }
            option.option_values.map((optionValue: OptionItem) => {
                if(optionValue.option_value_id == valueId){
                    optionValue.selected = event.checked;
                }
            });
        })

        relatedOptions.map(relatedOption => {
            const option = newOptions.filter(o => o.option_id == relatedOption.option_id)[0];
            if(!option){
                return;
            }
           // const value = option.option_values.filter(v => !relatedOption.option_value_id.includes(v.option_value_id))[0];

            option.option_values.map(value => {
                if(!relatedOption.option_value_id.includes(value.option_value_id)){
                    value.disabled = true;
                    value.name = "updated";
                }
            })

           // console.log(option);
        });*/
        // console.log(newOptions);
        //setOptions(newOptions);
    }

    /*   const getRelatedOptionsForSelectedOption = (optionId: string, valueId: string): OptionItemRelation[] => {
           const tmpOptions: Option[] = options();
           const relatedOptions = tmpOptions.filter(o => o.option_id == optionId)[0].option_values.filter(v => v.option_value_id == valueId)[0].relation_options;
           //console.log(relatedOptions);
           const result = relatedOptions.reduce(function(map: any, obj) {
               map[obj.option_id] = obj.option_value_id;
               return map;
           }, {});
           //console.log(result);
           return relatedOptions;
       }*/

    const resetOption = (optionId: string) => {
        const newOptions = new Map(options());

        const option = newOptions.get(optionId);
        if(!option){
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

    const state = {
        setImagesNumber,
        setOptions
    }

    createEffect(() => {
        // console.log(options());
        const tooltipTriggerList = [].slice.call(container!.querySelectorAll('[data-bs-tooltip="tooltip"]'))
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            //return new Tooltip(tooltipTriggerEl, {trigger: 'hover'})
        });
    })

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

        var toast = new Toast(document.getElementById('liveToast') as Element).show();


    })

    const deleteAllPhotos = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
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
                <div class="row gx-1 mr-0 ml-0 mt-1 mb- 2" data-bs-tooltip="tooltip" style={{cursor: 'pointer'}}
                     title={t('toolbar.loadedImages', {current: 50, total: 65})} data-bs-placement="right">
                    <div className="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"/>
                    </div>
                </div>
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
                                    <span data-bs-tooltip="tooltip" title={option.description}
                                          data-bs-placement="right">
                                        &nbsp; <BsInfoSquare size="1.2em"/>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    {Array.from(option.option_values_map.values()).map((optionValue: OptionItem) =>
                                        <li data-bs-tooltip="tooltip" title={optionValue.description}
                                            data-bs-placement="right">
                                            <label class={`dropdown-item ${optionValue.disabled ? 'disabled' : ''}`}
                                                   for={`option-${optionValue.option_value_id}`}
                                            >
                                                <input class="form-check-input m-1" type="checkbox"
                                                       name={`group-${option.option_id}`}
                                                       disabled={optionValue.disabled} checked={optionValue.selected}
                                                       id={`option-${optionValue.option_value_id}`} onChange={(e) => {
                                                    changeOption(e.target as HTMLInputElement, option.option_id, optionValue.option_value_id);
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

                <Show when={frameType() === FrameType.REGULAR}>
                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="frameColorInput" class="col-form-label">Цвет</label>
                                <input type="color" class="form-control " id="frameColorInput" value={frameColor()}
                                       title="Choose your color" onInput={(data) => {
                                    // @ts-ignore
                                    const value = data.target.value;
                                    setFrameColor(value);
                                    dispatch({type: Commands.CHANGE_FRAME, payload: {color: value}})
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="frameColor" class="form-label">Размер({frameThickness}мм)</label>
                                <input type="range" class="form-range" onInput={(data) => {
                                    // @ts-ignore
                                    const value = data.target.value;
                                    setFrameThickness(value);
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
                        <button type="button" class="btn btn-success w-100">Заказать</button>
                    </div>
                </div>

            </div>
        </div>)
}
export default view;
