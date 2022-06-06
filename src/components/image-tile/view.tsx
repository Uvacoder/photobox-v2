import type {Component} from 'solid-js';
import {createEffect, createSignal, onMount, Show} from "solid-js";
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import {FaCopy, FaSolidBorderStyle, FaSolidSlidersH, FaTrashAlt} from "solid-icons/fa";
import {BsDashSquareDotted, BsExclamationCircleFill, BsInfoSquare, BsPlusSquareDotted} from "solid-icons/bs";
import {Tooltip} from "bootstrap";
import {FrameType} from "../../constants/FrameType";
import Swal from 'sweetalert2';
import {t} from "../../i18n/i18n";
import {Option} from "../../interface/options/Option";
import {OptionItem} from "../../interface/options/OptionItem";
import Pickr from "@simonwep/pickr";
import config from "../../config/config.json";
import OptionsHandler from "../../utils/OptionsHandler";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {Commands} from "../../constants/Commands";
import {Constants} from "../../constants/Constants";

export interface IProps extends Props {
    // name: string,
    src: string,
    uid: string,
    setFrameColor: (arg1: string) => void,
    setFrameWeight: (arg1: number) => void,
    setFrameType: (arg1: FrameType) => void,
    cloneTile: () => void,
    deleteTile: () => void,
    setImageMode: (arg1: ImagePrintMode) => void,
    setAspectRatio: (w: number, h: number) => void
}


export interface IState extends State {
    setLoaded: (arg: boolean) => any,
    setBadPhotoQuality: (arg: boolean) => any,
    setFrameType: (arg: FrameType) => any,
    setFrameColor: (arg: string) => any,
    setFrameThickness: (arg: number) => any,
    setCopies: (arg1: number) => void,
    setOptions: (arg1: Map<string, Option>) => void,
    copies: () => number,
    frameThickness: () => number,
    frameColor: () => string,
    frameType: () => FrameType,
}

const view: Component<IProps> = (props: IProps) => {
    let toolbarContainer: HTMLDivElement | undefined;
    let imageContainer: HTMLDivElement | undefined;
    let colorPicker: HTMLDivElement | undefined;
    let frameOptionsDropdown: HTMLDivElement | undefined;
    let tooltipList: Tooltip[] = [];
    const selectedOptionsMap = new Map<string, OptionItem>();

    // general
    const [loaded, setLoaded] = createSignal(false);
    const [colorPickerInstance, setColorPicker] = createSignal(null);

    // frame style
    const [frameThickness, setFrameThickness] = createSignal(config.defaultFrameWeight);
    const [frameColor, setFrameColor] = createSignal(config.defaultFrameColor);
    const [frameType, setFrameType] = createSignal(FrameType.NONE);

    // additional image options
    const [imageMode, setImageMode] = createSignal(ImagePrintMode.CROP);
    const [copies, setCopies] = createSignal(1);
    const [badPhotoQuality, setBadPhotoQuality] = createSignal(false);
    const [autoColorEnhance, setAtoColorEnhance] = createSignal(false);

    // color manipulation
    const [saturation, setSaturation] = createSignal(1);
    const [brightness, setBrightness] = createSignal(1);
    const [contrast, setContrast] = createSignal(1);
    const [colorAdjustment, setColorAdjustment] = createSignal('hue-rotate(0deg) brightness(1) contrast(1)');

    // image options
    const [options, setOptions] = createSignal(new Map<string, Option>());

    const state : IState = {
        setLoaded,
        copies,
        setCopies,
        frameThickness,
        frameType,
        setFrameType,
        setFrameThickness,
        frameColor,
        setFrameColor,
        setBadPhotoQuality,
        setOptions: (arg: Map<string, Option>) => updateOptions.call(this, arg)
    }

    onMount(function () {
        if (props.onMount) {
            props.onMount(state)
        }

        recreateToolTips();

        frameOptionsDropdown?.addEventListener('show.bs.dropdown', function () {
            console.log('show.bs.dropdown');
            createColorPicker();
        })
        frameOptionsDropdown?.addEventListener('hide.bs.dropdown', function () {
            /*if(colorPickerInstance()){
                //createColorPicker();
                // @ts-ignore
                colorPickerInstance().destroy();
                setColorPicker(null);
                console.log('destroyAndRemove');
                console.log(colorPicker);
            }*/
        })
    })

    createEffect(() => {
        setColorAdjustment(`saturate(${saturation()}) brightness(${brightness()}) contrast(${contrast()})`);
        if (imageContainer) {
            let images = Array.from(imageContainer.getElementsByTagName("img"));
            for (let img of images) {
                img.style.filter = colorAdjustment();
            }
        }
    })

    createEffect(() => {
        badPhotoQuality();
        imageContainer!.querySelectorAll('[data-bs-tooltip="poor-quality"]').forEach((item) => {
            if (!item.hasAttribute("data-bs-tooltip-ready")) {
                item.setAttribute("data-bs-tooltip-ready", "true");
                new Tooltip(item, {trigger: 'hover'});
            }
        })
    })

    createEffect(() => {
        //options();
        //recreateToolTips();
    })

    const updateOptions = (options: Map<string, Option>) => {


        setTimeout(() => {
            setOptions(options);
            recreateToolTips();
        }, 500);
    }

    const recreateToolTips = () => {
        const tooltipTriggerList = [].slice.call(toolbarContainer!.querySelectorAll('[data-bs-tooltip="tooltip"]'));
        tooltipList.map(tooltip => tooltip.dispose());
        tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl, {trigger: 'hover'});
        });
    }

    const onOptionChanged = (event: HTMLInputElement, optionId: string, valueId: string) => {

        const handledOption = OptionsHandler.handleOptionChange(options(), selectedOptionsMap, event.checked, optionId, valueId);
        if (!handledOption) {
            return;
        }
        updateView(handledOption.affectedOption, event.checked, handledOption.affectedOptionItem);
        setOptions(handledOption.updatedOptions);
        recreateToolTips();
        console.log(handledOption.updatedOptions);
        console.log(JSON.stringify(handledOption.updatedOptions));
        // props.optionChanged();

    }

    const updateView = (option: Option, checked: boolean, affectedOption: OptionItem) => {
        // change image mode
        if (option.label === Constants.PRINT_MODE_OPTION_LABEL) {
            const mode = checked ? affectedOption.label as ImagePrintMode : ImagePrintMode.FULL;
            props.setImageMode(mode);
        }
        // change image frame
        else if (option.label === Constants.FRAME_OPTION_LABEL) {
            const frame = checked ? affectedOption.label as FrameType : FrameType.NONE;
            props.setFrameType(frame);

            if(frame === FrameType.NONE){
                setFrameThickness(config.defaultFrameWeight);
                setFrameColor(config.defaultFrameColor);
            }
        }
        // change image size
        else if (option.label === Constants.SIZE_OPTION_LABEL) {
            if(affectedOption.value){
                props.setAspectRatio(parseInt(affectedOption.value[0]), parseInt(affectedOption.value[1]))
            }
        }
    }

    // border color picker
    const createColorPicker = () => {
        if (colorPicker && !colorPickerInstance()) {
            console.log('createColorPicker');
            console.log(colorPicker);
            const pickr = Pickr.create({
                el: colorPicker,//'.color-picker',
                theme: 'nano', // or 'monolith', or 'nano'
                container: 'body',
                position: 'bottom-middle',
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
                props.setFrameColor(color.toHEXA().toString());
            });

            pickr.on('changestop', (color: any, source: any, instance: any) => {
                pickr.applyColor(true);
                props.setFrameColor(frameColor());
            });
            pickr.on('swatchselect', (color: any, source: any, instance: any) => {
                pickr.applyColor(true);
            });

            // @ts-ignore
            setColorPicker(pickr);
        }else{
            // @ts-ignore
            colorPickerInstance().setColor(frameColor())
        }
    }

    const decreaseCopies = () => {
        if (copies() === 1) {
            return;
        }
        setCopies(copies() - 1);
    }

    const increaseCopies = () => {
        if (copies() == 10) {
            return;
        }
        setCopies(copies() + 1);
    }

    const changeColorEnhanceMode = (e: any) => {
        const target: HTMLInputElement = e.target;
        setAtoColorEnhance(target.checked);
        setSaturation(1);
        setBrightness(1);
        setContrast(1);
    }

    const changeFrameType = () => {
        props.setFrameColor(frameType());

        if (frameType() === FrameType.NONE && colorPickerInstance()) {
            // @ts-ignore
            colorPickerInstance().destroy();
            setColorPicker(null);
        }
    }

    const changeFrameColor = () => {
        props.setFrameColor(frameColor());
    }

    const changeFrameThickness = () => {
        props.setFrameWeight(frameThickness());
    }

    const deleteTile = () => {

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
                props.deleteTile();
            }
        })
    }


    return (
        <>
            <div className={"image-tile-wrapper"}>
                <div className={'image-container'} ref={imageContainer}>
                    <Show when={badPhotoQuality()}>
                        <BsExclamationCircleFill color="#ea8001" class="quality-warning-icon"
                                                 data-bs-tooltip="poor-quality"
                                                 data-bs-placement="top" title={t("tile.badPhotoQuality")} size="30px"/>
                    </Show>

                    <img src={props.src} alt="" class="tile-image"/>
                    {!loaded() &&
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    {/*   {cats().map((item) => {
                return <div>{item.name}</div>
            })}
            {visible() &&
                <div>{props.name}</div>
            }
            <div onClick={() => setCount(count() + 1)}>Count: {count()}</div>*/}
                </div>

            </div>
            <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups" ref={toolbarContainer}>

                <div class="btn-group btn-group-sm w-100" role="group" aria-label="First group">

                    <button type="button" class="btn btn-outline-light link-primary" data-bs-tooltip="tooltip"
                            title={t('tile.copy')} data-bs-placement="top" onClick={props.cloneTile}>
                        <FaCopy size="1em"/>
                    </button>
                    <div class="dropdown" ref={frameOptionsDropdown}>
                        <Show when={frameType() !== FrameType.NONE}>
                            <button type="button"
                                    class="btn btn-outline-light link-primary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-tooltip="tooltip"
                                    title={t("tile.frameParams")} data-bs-placement="top">
                                <FaSolidBorderStyle size="1em"/>
                            </button>
                        </Show>
                        <ul class="dropdown-menu p-1">

                            <div class="row gx-5 mt-1 mb-3">
                                <div class="col">
                                    <div class="form-">
                                        <label for="frameColorInput" class="col-form-label">{t("color")}</label>
                                        <div ref={colorPicker}/>
                                        {/*<input type="color" class="form-control " id="frameColorInput"
                                               value={frameColor()}
                                               title="Choose your color" onInput={(data) => {
                                            // @ts-ignore
                                            const value = data.target.value;
                                            setFrameColor(value);
                                            //dispatch({type: Commands.CHANGE_FRAME, payload: {color: value}})
                                        }}/>*/}
                                    </div>
                                </div>
                            </div>

                            <Show when={frameType() === FrameType.REGULAR}>
                                <div class="row gx-5 mt-1 mb-3">
                                    <div class="col">
                                        <div class="form-">
                                            <label for="frameColor"
                                                   class="form-label">{t("size")}({frameThickness}мм)</label>
                                            <input type="range" class="form-range" onInput={(data) => {
                                                // @ts-ignore
                                                const value = data.target.value;
                                                props.setFrameWeight(value);
                                            }} min="0" max="15" step="1" value={frameThickness()} id="frameColor"/>
                                        </div>
                                    </div>
                                </div>
                            </Show>
                        </ul>
                    </div>


                    <button type="button" class="btn btn-outline-light link-primary dropdown-toggle"
                            data-bs-tooltip="tooltip"
                            title={t("tile.colorCorrection")} data-bs-placement="top" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false">
                        <span>
                            <FaSolidSlidersH size="1em"/>
                        </span>
                    </button>
                    <ul class="dropdown-menu p-1">
                        <li>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch"
                                       id={`auto-color-switch-${props.uid}`} onChange={changeColorEnhanceMode}/>
                                <label class="form-check-label"
                                       for={`auto-color-switch-${props.uid}`}>{t("tile.autocorrection")}</label>
                            </div>
                        </li>

                        <Show when={!autoColorEnhance()}>
                        <li>
                            <label for="hue-range" class="form-label m-0">{t("tile.saturation")}</label>
                            <input type="range" class="form-range" id="hue-range" min={0} max={2} step={0.1}
                                   value={saturation()} disabled={autoColorEnhance()}
                                   onInput={(data) => setSaturation((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="brightness-range" class="form-label m-0">{t("tile.brightness")}</label>
                            <input type="range" class="form-range" id="brightness-range" min={0} max={2} step={0.1}
                                   value={brightness()} disabled={autoColorEnhance()}
                                   onInput={(data) => setBrightness((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="contrast-range" class="form-label m-0">{t("tile.contrast")}</label>
                            <input type="range" class="form-range" id="contrast-range" min={0} max={2} step={0.1}
                                   value={contrast()} disabled={autoColorEnhance()}
                                   onInput={(data) => setContrast((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        </Show>
                        <Show when={autoColorEnhance()}>
                            <button type="button" class="btn btn-primary w-100">
                                Show diff
                            </button>
                        </Show>
                    </ul>
                    {/*  <button type="button" class="btn btn-outline-light link-primary" data-bs-tooltip="tooltip"
                            title="Вертикально"
                            data-bs-placement="bottom">
                        <BsTabletLandscape size="1em"/>
                    </button>*/}
                    <button type="button" class="btn btn-outline-light link-danger" data-bs-tooltip="tooltip"
                            title={t("delete")}
                            data-bs-placement="top" onClick={deleteTile}>
                        <FaTrashAlt size="1em"/>
                    </button>
                </div>
                <div class="input-group input-group-sm w-100">
                    <button class="btn btn-outline-light link-primary" type="button" id="button-addon1"
                            onClick={decreaseCopies}><BsDashSquareDotted size={"20px"}/>
                    </button>
                    <input type="number" step="1" min="1" max="10" value={copies()} name="quantity"
                           disabled class="quantity-field border-0 text-center form-control bg-white"
                           data-bs-tooltip="tooltip" title={"Количество"}/>
                    <button class="btn btn-outline-light link-primary" type="button" id="button-addon1"
                            onClick={increaseCopies}><BsPlusSquareDotted size={"20px"}/>
                    </button>
                </div>
                <div class="w-100">
                    <div class="accordion">
                        <div class="accordion-item">
                            <h4 class="accordion-header">
                                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#accordion-${props.uid}`} aria-expanded="false">
                                    {t("options")}
                                </button>
                            </h4>
                            <div id={`accordion-${props.uid}`} class="accordion-collapse collapse">
                                <div class="accordion-body p-0">
                                    {Array.from(options().values()).map((option: Option) =>
                                            <div class="row gx-5">
                                                <div class="col">
                                                    <div class="btn-group w-100">
                                                        <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                                                data-bs-toggle="dropdown" aria-expanded="false"
                                                                aria-haspopup="true"
                                                                data-bs-auto-close="outside">
                                    <span style={{"max-width": "100px"}} class="option-dropdown-title">
                                        {option.selected_name || option.name}
                                    </span>
                                                            {option.description &&
                                                                <span data-bs-tooltip="tooltip" title={option.description}
                                                                      data-bs-placement="right">&nbsp; <BsInfoSquare
                                                                    size="1.2em"/>
                                    </span>
                                                            }
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            {Array.from(option.option_values_map.values()).map((optionValue: OptionItem) =>
                                                                <li data-bs-tooltip="tooltip"
                                                                    title={optionValue.conflictedOptions ? `Конфликт опций: <br/>${optionValue.conflictedOptions.join(",<br/>")}` : optionValue.description}
                                                                    data-bs-placement="right" data-bs-html={"true"}
                                                                    data-bs-custom-class={`${optionValue.conflictedOptions ? 'warning-tooltip' : 'tooltip'}`}>
                                                                    <label
                                                                        class={`dropdown-item ${optionValue.disabled ? 'disabled' : ''}`}
                                                                        for={`individual-option-${optionValue.option_value_id}-${props.uid}`}>
                                                                        <input class="form-check-input m-1" type="checkbox"
                                                                               name={`group-${option.option_id}`}
                                                                               disabled={optionValue.disabled}
                                                                               checked={optionValue.selected}
                                                                               id={`individual-option-${optionValue.option_value_id}-${props.uid}`}
                                                                               onChange={(e) => {
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default view;

