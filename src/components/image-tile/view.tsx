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
import {t} from "i18next";
import {Option} from "../../interface/options/Option";
import {OptionItem} from "../../interface/options/OptionItem";
import Pickr from "@simonwep/pickr";
import config from "../../config/config.json";

export interface IProps extends Props {
    // name: string,
    src: string,
    uid: string,
    setFrameColor: (arg1: string) => void,
    setFrameWeight: (arg1: number) => void,
    setFrameType: (arg1: FrameType) => void,
    cloneTile: () => void,
    deleteTile: () => void,
}


export interface IState extends State {
    setLoaded: (arg: boolean) => any,
    setBadPhotoQuality: (arg: boolean) => any,
    setFrameType: (arg: FrameType) => any,
    setFrameColor: (arg: string) => any,
    setFrameThickness: (arg: number) => any,
    setCopies: (arg1: number) => void,
    setOptions: (arg1: Map<string, Option>) => void,
    copies: number,
    frameColor: string,
}

const view: Component<IProps> = (props: IProps) => {
    let toolbarContainer: HTMLDivElement | undefined;
    let imageContainer: HTMLDivElement | undefined;
    let colorPicker: HTMLDivElement | undefined;
    let frameOptionsDropdown: HTMLDivElement | undefined;
    let tooltipList: Tooltip[] = [];

    const [frameThickness, setFrameThickness] = createSignal(config.defaultFrameWeight);
    const [frameColor, setFrameColor] = createSignal('#ffffff');
    const [frameType, setFrameType] = createSignal(FrameType.NONE);
    const [copies, setCopies] = createSignal(1);
    const [loaded, setLoaded] = createSignal(false);
    const [colorPickerInstance, setColorPicker] = createSignal(null);
    const [badPhotoQuality, setBadPhotoQuality] = createSignal(false);
    const [autoColorEnhance, setAtoColorEnhance] = createSignal(false);
    const [saturation, setSaturation] = createSignal(1);
    const [brightness, setBrightness] = createSignal(1);
    const [contrast, setContrast] = createSignal(1);
    const [options, setOptions] = createSignal(new Map<string, Option>());
    const [colorAdjustment, setColorAdjustment] = createSignal('hue-rotate(0deg) brightness(1) contrast(1)');


    const [count, setCount] = createSignal(0);

    createEffect(() => {
        setColorAdjustment(`saturate(${saturation()}) brightness(${brightness()}) contrast(${contrast()})`);
        if (imageContainer) {
            let images = Array.from(imageContainer.getElementsByTagName("img"));
            for (let img of images) {
                img.style.filter = colorAdjustment();
            }
        }
    });

    createEffect(() => {
        props.setFrameColor(frameColor());
        console.log(frameColor());
    })

    createEffect(() => {
        props.setFrameWeight(frameThickness());
    })

    createEffect((prev) => {
        props.setFrameType(frameType());
        /*  if(frameType() !== FrameType.REGULAR && colorPickerInstance()){
              //createColorPicker();
              // @ts-ignore
              colorPickerInstance().destroyAndRemove();
          }*/
        if (frameType() === FrameType.NONE && colorPickerInstance()) {
            // @ts-ignore
            colorPickerInstance().destroy();
            setColorPicker(null);
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

    const state = {
        setLoaded,
        copies: copies(),
        setCopies,
        saturation,
        brightness,
        contrast,
        setFrameType,
        setFrameThickness,
        frameColor: frameColor(),
        setFrameColor,
        setBadPhotoQuality,
        setOptions
    }
    onMount(function () {
        if (props.onMount) {
            props.onMount(state)
        }
        //tooltipList.map(tooltip => tooltip.dispose());

        const tooltipTriggerList = [].slice.call(toolbarContainer!.querySelectorAll('[data-bs-tooltip="tooltip"]'))
        tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl, {trigger: 'hover'})
        });

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
    });

    const createColorPicker = () => {
        if (colorPicker && !colorPickerInstance()) {
            console.log('createColorPicker');
            console.log(colorPicker);
            const pickr = Pickr.create({
                el: colorPicker,//'.color-picker',
                theme: 'nano', // or 'monolith', or 'nano'
                container: 'body',
                position: 'bottom-middle',
                default: config.defaultFrameColor,
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
                //dispatch({type: Commands.CHANGE_FRAME, payload: {color: color.toRGBA().toString()}});
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
                            title={t('tile.copy')}
                            data-bs-placement="bottom" onClick={props.cloneTile}>
                        <FaCopy size="1em"/>
                    </button>
                    <div class="dropdown" ref={frameOptionsDropdown}>
                        <Show when={frameType() !== FrameType.NONE}>
                            <button type="button"
                                    class="btn btn-outline-light link-primary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-tooltip="tooltip"
                                    title="Параметры рамки" data-bs-placement="bottom">
                                <FaSolidBorderStyle size="1em"/>
                            </button>
                        </Show>
                        <ul class="dropdown-menu p-1">

                            <div class="row gx-5 mt-1 mb-3">
                                <div class="col">
                                    <div class="form-">
                                        <label for="frameColorInput" class="col-form-label">Цвет</label>
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
                                                   class="form-label">Размер({frameThickness}мм)</label>
                                            <input type="range" class="form-range" onInput={(data) => {
                                                // @ts-ignore
                                                const value = data.target.value;
                                                setFrameThickness(value);
                                                //dispatch({type: Commands.CHANGE_FRAME, payload: {thickness: parseInt(value)}})
                                            }} min="0" max="15" step="1" value={frameThickness()} id="frameColor"/>
                                        </div>
                                    </div>
                                </div>
                            </Show>
                        </ul>
                    </div>


                    <button type="button" class="btn btn-outline-light link-primary dropdown-toggle"
                            data-bs-tooltip="tooltip"
                            title="Цветокоррекция" data-bs-placement="bottom" data-bs-toggle="dropdown"
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
                                       for={`auto-color-switch-${props.uid}`}>Автокоррекция</label>
                            </div>
                        </li>

                        <li>
                            <label for="hue-range" class="form-label m-0">Насыщеность</label>
                            <input type="range" class="form-range" id="hue-range" min={0} max={2} step={0.1}
                                   value={saturation()} disabled={autoColorEnhance()}
                                   onInput={(data) => setSaturation((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="brightness-range" class="form-label m-0">Яркость</label>
                            <input type="range" class="form-range" id="brightness-range" min={0} max={2} step={0.1}
                                   value={brightness()} disabled={autoColorEnhance()}
                                   onInput={(data) => setBrightness((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="contrast-range" class="form-label m-0">Контраст</label>
                            <input type="range" class="form-range" id="contrast-range" min={0} max={2} step={0.1}
                                   value={contrast()} disabled={autoColorEnhance()}
                                   onInput={(data) => setContrast((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                    </ul>
                    {/*  <button type="button" class="btn btn-outline-light link-primary" data-bs-tooltip="tooltip"
                            title="Вертикально"
                            data-bs-placement="bottom">
                        <BsTabletLandscape size="1em"/>
                    </button>*/}
                    <button type="button" class="btn btn-outline-light link-danger" data-bs-tooltip="tooltip"
                            title="Удалить"
                            data-bs-placement="bottom" onClick={deleteTile}>
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
                                    Опции
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
                                                                        for={`option-${optionValue.option_value_id}`}>
                                                                        <input class="form-check-input m-1" type="checkbox"
                                                                               name={`group-${option.option_id}`}
                                                                               disabled={optionValue.disabled}
                                                                               checked={optionValue.selected}
                                                                               id={`option-${optionValue.option_value_id}`}
                                                                               onChange={(e) => {
                                                                                   // changeOption(e.target as HTMLInputElement, option.option_id, optionValue.option_value_id);
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

