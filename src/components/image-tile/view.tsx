import {createEffect, createSignal, onMount, Show, Signal} from "solid-js";
import type {Component} from 'solid-js';
import {h} from "tsx-dom";
// @ts-ignore
import EventBus from 'eventing-bus';
import Props from "../../interface/Props";
import State from "../../interface/State";
import {FaCopy} from "solid-icons/fa";
import {FaTrashAlt} from "solid-icons/fa";
import {FaSolidBorderStyle} from "solid-icons/fa";
import {FaSolidSlidersH} from "solid-icons/fa";
import {BsTablet} from "solid-icons/bs";
import {BsTabletLandscape} from "solid-icons/bs";
import {Tooltip} from "bootstrap";
import {FrameType} from "../../constants/FrameType";
import {Commands} from "../../constants/Commands";
import Swal from 'sweetalert2';
import {t} from "i18next";

export interface IProps extends Props {
    // name: string,
    src: string,
    setFrameColor: (arg1: string) => void,
    setFrameWeight: (arg1: number) => void,
    setFrameType: (arg1: FrameType) => void,
    cloneTile: () => void,
    deleteTile: () => void,
}


export interface IState extends State {
    setLoaded: (arg: boolean) => any,
    setFrameType: (arg: FrameType) => any,
    setFrameColor: (arg: string) => any,
    setFrameThickness: (arg: number) => any,
    setCopies: (arg1: number) => void,
}

const view: Component<IProps> = (props: IProps) => {
    let toolbarContainer: HTMLDivElement | undefined;
    let imageContainer: HTMLDivElement | undefined;

    const [frameThickness, setFrameThickness] = createSignal(0);
    const [frameColor, setFrameColor] = createSignal('#ffffff');
    const [frameType, setFrameType] = createSignal(FrameType.NONE);
    const [copies, setCopies] = createSignal(1);
    const [loaded, setLoaded] = createSignal(false);
    const [saturation, setSaturation] = createSignal(1);
    const [brightness, setBrightness] = createSignal(1);
    const [contrast, setContrast] = createSignal(1);
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
    })

    createEffect(() => {
        props.setFrameWeight(frameThickness());
    })

    createEffect(() => {
        props.setFrameType(frameType());
    })

    const state = {
        setLoaded,
        copies,
        setCopies,
        saturation,
        brightness,
        contrast,
        setFrameType,
        setFrameThickness,
        setFrameColor
    }
    onMount(function () {
        if (props.onMount) {
            props.onMount(state)
        }
        const tooltipTriggerList = [].slice.call(toolbarContainer!.querySelectorAll('[data-bs-tooltip="tooltip"]'))
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl, {trigger: 'hover'})
        });
    })

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

    const deleteTile = () => {

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
                props.deleteTile();
            }
        })
    }


    return (
        <>
            <div className={"image-tile-wrapper"}>
                <div className={'image-container'} ref={imageContainer}>
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

                    <button type="button" class="btn btn-outline-primary" data-bs-tooltip="tooltip"
                            title={t('tile.copy')}
                            data-bs-placement="bottom" onClick={props.cloneTile}>
                        <FaCopy size="1em"/>
                    </button>
                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false" data-bs-tooltip="tooltip"
                            title="Параметры рамки" data-bs-placement="bottom">
                        <FaSolidBorderStyle size="1em"/>
                    </button>
                    <ul class="dropdown-menu p-1">
                        <div class="row gx-5 mt-1">
                            <div class="col">
                                <div class="btn-group w-100">
                                    <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        {frameType()}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#" onClick={() => {
                                                setFrameType(FrameType.REGULAR)
                                                //dispatch({type: ''});
                                                //dispatch({type: Commands.CHANGE_FRAME, payload: {frame: FrameType.REGULAR}})
                                            }}>
                                                С рамкой
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#" onClick={() => {
                                                setFrameType(FrameType.POLAROID)
                                                /* dispatch({
                                                     type: Commands.CHANGE_FRAME,
                                                     payload: {frame: FrameType.POLAROID}
                                                 })*/
                                            }}>
                                                Рамка Polaroid
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#" onClick={() => {
                                                setFrameType(FrameType.NONE)
                                                //dispatch({type: Commands.CHANGE_FRAME, payload: {frame: FrameType.NONE}})
                                            }}>
                                                Без рамки
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Show when={frameType() === FrameType.REGULAR}>
                            <div class="row gx-5 mt-1 mb-3">
                                <div class="col">
                                    <div class="form-">
                                        <label for="frameColorInput" class="col-form-label">Цвет</label>
                                        <input type="color" class="form-control " id="frameColorInput"
                                               value={frameColor()}
                                               title="Choose your color" onInput={(data) => {
                                            // @ts-ignore
                                            const value = data.target.value;
                                            setFrameColor(value);
                                            //dispatch({type: Commands.CHANGE_FRAME, payload: {color: value}})
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
                                            //dispatch({type: Commands.CHANGE_FRAME, payload: {thickness: parseInt(value)}})
                                        }} min="0" max="15" step="1" value={frameThickness()} id="frameColor"/>
                                    </div>
                                </div>
                            </div>
                        </Show>
                    </ul>

                    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-tooltip="tooltip"
                            title="Цветокоррекция" data-bs-placement="bottom" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                            aria-expanded="false">
                        <span>
                            <FaSolidSlidersH size="1em"/>
                        </span>
                    </button>
                    <ul class="dropdown-menu p-1">
                        <li>
                            <label for="hue-range" class="form-label m-0">Насыщеность</label>
                            <input type="range" class="form-range" id="hue-range" min={0} max={2} step={0.1}
                                   value={saturation()}
                                   onInput={(data) => setSaturation((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="brightness-range" class="form-label m-0">Яркость</label>
                            <input type="range" class="form-range" id="brightness-range" min={0} max={2} step={0.1}
                                   value={brightness()}
                                   onInput={(data) => setBrightness((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                        <li>
                            <label for="contrast-range" class="form-label m-0">Контраст</label>
                            <input type="range" class="form-range" id="contrast-range" min={0} max={2} step={0.1}
                                   value={contrast()}
                                   onInput={(data) => setContrast((data.target as HTMLInputElement).valueAsNumber)}/>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-outline-primary" data-bs-tooltip="tooltip"
                            title="Вертикально"
                            data-bs-placement="bottom">
                        <BsTabletLandscape size="1em"/>
                    </button>
                    <button type="button" class="btn btn-outline-danger" data-bs-tooltip="tooltip" title="Удалить"
                            data-bs-placement="bottom" onClick={deleteTile}>
                        <FaTrashAlt size="1em"/>
                    </button>
                </div>
                <div class="input-group input-group-sm w-100">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"
                            onClick={decreaseCopies}>-
                    </button>
                    <button class="form-control" value="1" aria-label="Example text with button addon"
                            aria-describedby="button-addon1" disabled={true}>{copies}</button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"
                            onClick={increaseCopies}>+
                    </button>
                </div>
            </div>
        </>
    )
}

export default view;

