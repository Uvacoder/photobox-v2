import {createEffect, createSignal, onMount, Show} from "solid-js";
import {Action} from "../../interface/Action";
import Props from "../../interface/Props";
import {Toast} from "bootstrap";
import {Commands} from "../../constants/Commands";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {FrameType} from "../../constants/FrameType";
import { BsInfoSquare } from "solid-icons/bs";

interface IProps extends Props {
    click: (action: Action) => void
}

export default {


    template: (props: IProps) => {
        const [imageMode, setImageMode] = createSignal(0);
        const [detectPalette, setDetectPalette] = createSignal(false);
        const [detectBestFrame, setDetectBestFrame] = createSignal(true);
        const [frameThickness, setFrameThickness] = createSignal(0);
        const [frameColor, setFrameColor] = createSignal('#ffffff');
        const [frameType, setFrameType] = createSignal(FrameType.NONE);


        const dispatch = (action: Action) => {
            props.click(action);
            //subscribe();
        }
        const state = {}
        onMount(function () {
            if (props.onMount) {
                props.onMount(state)
            }
            createEffect(() => {
                dispatch({type: "detect-palette", payload: detectPalette()});
            });
            createEffect(() => {
                dispatch({type: Commands.AUTO_DETECT_FRAME, payload: detectBestFrame()});
            });

            var toast = new Toast(document.getElementById('liveToast') as Element).show();

        })
        return (
            <div>
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
                            <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-primary"
                                        onClick={() => dispatch({type: 'zoomOut'})}>-
                                </button>
                                <button type="button" class="btn btn-outline-primary" disabled={true}>ZOOM</button>
                                <button type="button" class="btn btn-outline-primary"
                                        onClick={() => dispatch({type: 'zoomIn'})}>+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"

                                        data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                    Тип печати <span data-bs-tooltip="tooltip" title="Тип печати"  data-bs-placement="right">
                                    <BsInfoSquare size="1.2em"/>
                                </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li data-bs-tooltip="tooltip" title="Лаборатория"  data-bs-placement="right">
                                        <label class="dropdown-item disabled"  for="flexRadioDefault1" onClick={() => dispatch({type: ''})}>
                                            <input class="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  disabled/>
                                            Лаборатория
                                        </label>
                                    </li>

                                    <li>
                                        <label class="dropdown-item" for="flexRadioDefault2" onClick={() => dispatch({type: ''})}>
                                            <input class="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            Фотопринтер
                                        </label>

                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Тип бумаги
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: ''})}>Глянцевая</a></li>
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: ''})}>Матовая</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Плотность в гм
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: ''})}>Глянцевая</a></li>
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: ''})}>Матовая</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Формат
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: '9x13'})}>9x13</a></li>
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: '13x18'})}>13x18</a></li>
                                    <li><a class="dropdown-item" href="#"
                                           onClick={() => dispatch({type: '9x9'})}>9x9</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Кадр целиком
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({
                                        type: Commands.CHANGE_IMAGE_PRINT_MODE,
                                        payload: ImagePrintMode.CROP
                                    })}>Кадр в обрез</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({
                                        type: Commands.CHANGE_IMAGE_PRINT_MODE,
                                        payload: ImagePrintMode.FULL
                                    })}>Кадр целиком</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" checked={detectPalette()} type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault"
                                       onChange={(e) => setDetectPalette((e.target as HTMLInputElement).checked)}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Подобрать фон</label>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" checked={detectBestFrame()} type="checkbox"
                                       role="switch"
                                       id="flexSwitchCheckDefault"
                                       onChange={(e) => setDetectBestFrame((e.target as HTMLInputElement).checked)}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Smart кадр</label>
                            </div>
                        </div>
                    </div>
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
                                            dispatch({type: Commands.CHANGE_FRAME, payload: {frame: FrameType.REGULAR}})
                                        }}>
                                        С рамкой
                                    </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" onClick={() => {
                                            setFrameType(FrameType.POLAROID)
                                            dispatch({type: Commands.CHANGE_FRAME, payload: {frame: FrameType.POLAROID}})
                                        }}>
                                            Рамка Polaroid
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" onClick={() => {
                                            setFrameType(FrameType.NONE)
                                            dispatch({type: Commands.CHANGE_FRAME, payload: {frame: FrameType.NONE}})
                                        }}>
                                            Без рамки
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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

                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <button type="button" class="btn btn-success w-100">Заказать</button>
                        </div>
                    </div>

                </div>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'zoomIn'})}>+</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'zoomOut'})}>-</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'full-image'})}>Full</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'crop-image'})}>Crop</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'fill-color'})}>Fill color</a>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status"
                                              aria-hidden="true"> </span>
                                        Loading...
                                    </button>
                                </li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#"
                                                        onClick={() => dispatch({type: 'export'})}>EXPORT</a></li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-sm" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Размер
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#"
                                               onClick={() => dispatch({type: '9x13'})}>9x13</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#"
                                               onClick={() => dispatch({type: '9x9'})}>9x9</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#"
                                               onClick={() => dispatch({type: '13x18'})}>13x18</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider"/>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

*/}

            </div>)
    }
}
