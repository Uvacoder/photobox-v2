import type {Component} from 'solid-js';
import {createComputed, createEffect, createMemo, createSignal, onCleanup, onMount, Show, untrack} from "solid-js";
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import {FaCopy, FaSolidBorderStyle, FaSolidSlidersH, FaTrashAlt} from "solid-icons/fa";
import {
    BsDashSquareDotted,
    BsExclamationCircleFill,
    BsExclamationTriangleFill,
    BsInfoSquare,
    BsPlusSquareDotted,
    BsArrowRepeat
} from "solid-icons/bs";
import {FrameType} from "../../constants/FrameType";
import Swal from 'sweetalert2';
import {t} from "../../i18n/i18n";
import {Option} from "../../interface/options/Option";
import {OptionItem} from "../../interface/options/OptionItem";
import Pickr from "@simonwep/pickr";
import config from "../../config/config.json";
import OptionsHandler from "../../utils/OptionsHandler";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {Constants} from "../../constants/Constants";
import {ImageComparator} from "../image-comparator/ImageComparator";
import {PreselectedOption} from "../../interface/options/PreselectedOption";
import {useTippy} from 'solid-tippy';
import 'tippy.js/dist/tippy.css';
import tippy from "../../utils/tippy";


export interface IProps extends Props {
    // name: string,
    src: string,
    adjustedImageSrc?: string,
    uid: string,
    onFrameColorChanged: (arg1: string) => void,
    onFrameWeightChanged: (arg1: number) => void,
    onFrameTypeChanged: (arg1: FrameType) => void,
    cloneTile: () => void,
    deleteTile: () => void,
    setImageMode: (arg1: ImagePrintMode) => void,
    onAspectRatioChanged: (w: number, h: number) => void,
    selectedOptionsMap: Map<string, OptionItem>,
    onOptionChanged: (changedOption: PreselectedOption) => void,
    onQuantityChanged: (quantity: number) => void,
    onRotate: () => void,
    onChangeColorEnhanceProperties: (autoEnhance: boolean, saturation: number, brightness: number, contrast: number) => void

}


export interface IState extends State {
    setLoaded: (arg: boolean) => any,
    setBadPhotoQuality: (arg: boolean) => any,
    setOptionsConflict: (arg: boolean) => any,
    setAtoColorEnhance: (arg: boolean) => any,
    setFrameType: (arg: FrameType) => any,
    setFrameColor: (arg: string) => any,
    setFrameThickness: (arg: number) => any,
    setAdjustedImageSrc: (arg: string) => any,
    setSaturation: (arg: number) => any,
    setBrightness: (arg: number) => any,
    setContrast: (arg: number) => any,
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

    // general
    const [loaded, setLoaded] = createSignal(false);
    const [colorPickerInstance, setColorPicker] = createSignal(null);
    const [hasOptionsConflict, setOptionsConflict] = createSignal(false);
    const [adjustedImageSrc, setAdjustedImageSrc] = createSignal('');

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

    const state: IState = {
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
        setOptionsConflict,
        setAtoColorEnhance,
        setSaturation,
        setBrightness,
        setContrast,
        setAdjustedImageSrc,
        setOptions: (arg: Map<string, Option>) => updateOptions.call(this, arg)
    }
    // @ts-ignore
    onMount(function () {

        if (props.onMount) {
            props.onMount(state)
        }

        // add usage to prevent removing import by TS compiler
        tippy

        // workaround for BS4, since it uses jQuery
        // @ts-ignore
        $(frameOptionsDropdown).on('shown.bs.dropdown', () => {
            createColorPicker();
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
    })


    const updateOptions = (options: Map<string, Option>) => {
        setOptions(options);
    }


    const onOptionChanged = (event: HTMLInputElement, option_id: string, option_value_id: string) => {

        const handledOption = OptionsHandler.handleOptionChange(options(), props.selectedOptionsMap, event.checked, option_id, option_value_id);
        if (!handledOption) {
            return;
        }
        updateView(handledOption.affectedOption, event.checked, handledOption.affectedOptionItem);
        setOptions(handledOption.updatedOptions);

        props.onOptionChanged({option_id, option_value_id, checked: event.checked});

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
            props.onFrameTypeChanged(frame);

            if (frame === FrameType.NONE) {
                setFrameThickness(config.defaultFrameWeight);
                setFrameColor(config.defaultFrameColor);
            }
        }
        // change image size
        else if (option.label === Constants.SIZE_OPTION_LABEL) {
            if (affectedOption.value) {
                props.onAspectRatioChanged(parseInt(affectedOption.value[0]), parseInt(affectedOption.value[1]))
            }
        }
    }

    // border color picker
    const createColorPicker = () => {
        if (colorPicker && !colorPickerInstance()) {
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
                props.onFrameColorChanged(color.toHEXA().toString());
            });

            pickr.on('changestop', (color: any, source: any, instance: any) => {
                pickr.applyColor(true);
                props.onFrameColorChanged(frameColor());
            });
            pickr.on('swatchselect', (color: any, source: any, instance: any) => {
                pickr.applyColor(true);
            });

            // @ts-ignore
            setColorPicker(pickr);
        } else {
            // @ts-ignore
            colorPickerInstance().setColor(frameColor())
        }
    }

    const decreaseCopies = () => {
        if (copies() === 1) {
            return;
        }
        setCopies(copies() - 1);
        props.onQuantityChanged(copies());
    }

    const increaseCopies = () => {
        if (copies() == 100) {
            return;
        }
        setCopies(copies() + 1);
        props.onQuantityChanged(copies());
    }

    const changeColorEnhanceMode = (e: any) => {
        const target: HTMLInputElement = e.target;
        setAtoColorEnhance(target.checked);
        setSaturation(1);
        setBrightness(1);
        setContrast(1);
        props.onChangeColorEnhanceProperties(target.checked, saturation(), brightness(), contrast());
    }

    const openImageCompareDialog = () => {
        new ImageComparator(props.src, props.adjustedImageSrc || adjustedImageSrc());
    }

    const changeFrameType = () => {
        props.onFrameColorChanged(frameType());

        if (frameType() === FrameType.NONE && colorPickerInstance()) {
            // @ts-ignore
            colorPickerInstance().destroy();
            setColorPicker(null);
        }
    }

    const changeFrameColor = () => {
        props.onFrameColorChanged(frameColor());
    }

    const changeFrameThickness = () => {
        props.onFrameWeightChanged(frameThickness());
    }

    const deleteTile = () => {
        props.deleteTile();
    }

    const rotate = () => {
        props.onRotate()
    }

    const updateColorSettings = () => {
        props.onChangeColorEnhanceProperties(false, saturation(), brightness(), contrast());
    }

    const onSetSaturation = (value: number) => {
        setSaturation(value);
        updateColorSettings()
    }

    const onSetBrightness = (value: number) => {
        setBrightness(value);
        updateColorSettings()
    }

    const onSetContrast = (value: number) => {
        setContrast(value);
        updateColorSettings()
    }

    const [conflictOptionIconAnchor, setConflictOptionIconAnchor] = createSignal();
    const [badQualityIconAnchor, setBadQualityIconAnchor] = createSignal();
    const [borderOptionsMenuAnchor, setBorderOptionsMenuAnchor] = createSignal();
    const [colorAdjustmentMenuAnchor, setColorAdjustmentMenuAnchor] = createSignal();

    // @ts-ignore
    useTippy(conflictOptionIconAnchor, {
        props: {
            content: t("tile.optionConflictTooltip")
        },
        hidden: true
    });

    // @ts-ignore
    useTippy(badQualityIconAnchor, {
        props: {
            content: t("tile.badPhotoQuality")
        },
        hidden: true
    });


    // @ts-ignore
    useTippy(borderOptionsMenuAnchor, {
        props: {
            content: t("tile.frameParams")
        },
        hidden: true
    });


    // @ts-ignore
    useTippy(colorAdjustmentMenuAnchor, {
        props: {
            content: t("tile.colorCorrection")
        },
        hidden: true
    });


    return (
        <>

            <div className={"image-tile-wrapper"}>

                <div className={'image-container'} ref={imageContainer}>
                    <Show when={badPhotoQuality()}>
                        <BsExclamationCircleFill ref={setBadQualityIconAnchor} color={config.poorQualityIconColor}
                                                 class="tile-warning-icon"
                                                 title={t("tile.badPhotoQuality")} size="30px"/>
                    </Show>

                    <Show when={hasOptionsConflict()}>
                        <BsExclamationTriangleFill ref={setConflictOptionIconAnchor}
                                                   color={config.optionConflictIconColor}
                                                   class="tile-warning-icon option-conflict-warning"
                                                   title={t("tile.optionConflictTooltip")}
                                                   size="30px"/>

                    </Show>

                    <div style="height: 100%;width: 100%;">
                        <img src={props.src} alt="" class="tile-image"/>
                    </div>
                    <Show when={!loaded()}>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </Show>

                </div>

            </div>
            <div class="btn-toolbar " role="toolbar" aria-label="ToolbarImpl with button groups" ref={toolbarContainer}>

                <div class="btn-group btn-group-sm w-100" role="group" aria-label="First group">

                    <button type="button" class="btn btn-outline-light link-primary"
                            title={t('tile.copy')} use:tippy
                            onClick={props.cloneTile}>
                        <FaCopy size="1em"/>
                    </button>
                    <div class="dropdown frame-options-dropdown" ref={frameOptionsDropdown}>
                        <Show when={frameType() !== FrameType.NONE}>
                            <button type="button" ref={setBorderOptionsMenuAnchor}
                                    class="btn btn-outline-light link-primary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-expanded="false"
                                    tippy-title={t("tile.frameParams")}>
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
                                                   class="form-label">{t("size")}({frameThickness})</label>
                                            <input type="range" class="form-range" onInput={(data) => {
                                                // @ts-ignore
                                                const value = data.target.value;
                                                props.onFrameWeightChanged(value);
                                            }} min="0" max="15" step="1" value={frameThickness()} id="frameColor"/>
                                        </div>
                                    </div>
                                </div>
                            </Show>
                        </ul>
                    </div>


                    <div class="dropdown">
                        <button type="button" class="btn btn-outline-light link-primary dropdown-toggle"
                                data-toggle="dropdown"
                                title={t('tile.colorCorrection')}
                                use:tippy
                                data-bs-auto-close="outside"
                                aria-expanded="false">
                            <FaSolidSlidersH size="1em"/>
                        </button>
                        <ul class="dropdown-menu p-1">
                            <li>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                           checked={autoColorEnhance()}
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
                                           onInput={(data) => onSetSaturation((data.target as HTMLInputElement).valueAsNumber)}/>
                                </li>
                                <li>
                                    <label for="brightness-range" class="form-label m-0">{t("tile.brightness")}</label>
                                    <input type="range" class="form-range" id="brightness-range" min={0} max={2}
                                           step={0.1}
                                           value={brightness()} disabled={autoColorEnhance()}
                                           onInput={(data) => onSetBrightness((data.target as HTMLInputElement).valueAsNumber)}/>
                                </li>
                                <li>
                                    <label for="contrast-range" class="form-label m-0">{t("tile.contrast")}</label>
                                    <input type="range" class="form-range" id="contrast-range" min={0} max={2}
                                           step={0.1}
                                           value={contrast()} disabled={autoColorEnhance()}
                                           onInput={(data) => onSetContrast((data.target as HTMLInputElement).valueAsNumber)}/>
                                </li>
                            </Show>
                            <Show when={autoColorEnhance() && loaded()}>
                                <button type="button" class="btn btn-primary w-100" onClick={openImageCompareDialog}>
                                    {t('tile.compare')}
                                </button>
                            </Show>
                        </ul>
                    </div>

                    <button type="button" class="btn btn-outline-light link-primary"
                            title={t('tile.rotate')}
                            onClick={rotate}
                            use:tippy>
                        <BsArrowRepeat size="1.3em"/>
                    </button>

                    <button type="button" class="btn btn-outline-light link-danger"
                            title={t("delete")} use:tippy onClick={deleteTile}>
                        <FaTrashAlt size="1em"/>
                    </button>
                </div>
                <div class="input-group input-group-sm w-100">
                    <button class="btn btn-outline-light link-primary" type="button" id="button-addon1"
                            title={t('decreaseQuantity')} use:tippy
                            onClick={decreaseCopies}><BsDashSquareDotted size={"20px"}/>
                    </button>
                    <div class="quantity-field border-0 text-center form-control bg-white" use:tippy
                         title={t('quantity')}>{copies()}</div>
                    <button class="btn btn-outline-light link-primary" type="button" id="button-addon1"
                            title={t('increaseQuantity')} use:tippy
                            onClick={increaseCopies}><BsPlusSquareDotted size={"20px"}/>
                    </button>
                </div>
                <div class="w-100">

                    <div onclick={() => setOptionsConflict(false)}>
                        <div class="dropdown">
                            <button class="accordion-button collapsed p-2" type="button" data-toggle="dropdown"
                                    aria-expanded="false" aria-haspopup="true"
                            >
                                {t("options")}
                            </button>
                            <div class="dropdown-menu w-100 p-0">
                                <div class=" p-0">
                                    {Array.from(options().values()).map((option: Option) =>
                                        <div class="row gx-5">
                                            <div class="col">
                                                <div class="btn-group w-100 dropdown-submenu">
                                                    <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                                            aria-expanded="false" aria-haspopup="true"
                                                            data-auto-close="outside">
                                                            <span style={{"max-width": "100px"}}
                                                                  class="option-dropdown-title">
                                                                {option.selected_name || option.name}
                                                            </span>
                                                        {option.description &&
                                                            <span use:tippy={{props: {placement: 'right'}}}
                                                                  title={option.description}>&nbsp;
                                                                <BsInfoSquare size="1.2em"/>
                                                                </span>
                                                        }
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        {Array.from(option.option_values_map.values()).map((optionValue: OptionItem) =>
                                                            <li use:tippy={{
                                                                props: {
                                                                    theme: `${optionValue.conflictedOptions ? 'warning' : ''}`,
                                                                    placement: window.outerWidth > 768 ? 'right' : 'top',
                                                                    content: optionValue.conflictedOptions ?
                                                                        `${t('optionsConflict')} <br/>${optionValue.conflictedOptions.join(",<br/>")}` :
                                                                        optionValue.description + (optionValue.image ? `<br/><img src="${optionValue.image}"/>` : '')
                                                                }
                                                            }}>
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

