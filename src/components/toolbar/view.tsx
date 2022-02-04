import {createEffect, createSignal, JSX, onMount} from "solid-js";
import {Action} from "../../interface/Action";
import Props from "../../interface/Props";
import UIkit from 'uikit';
import Alert from 'bootstrap/js/dist/alert';
import {Toast} from "bootstrap";
import {h} from "tsx-dom";

interface IProps extends Props {
    click: (action: Action) => void
}

export default {
    subscribe: (callback: () => void) => {

    },

    template: (props: IProps) => {
        const [imageMode, setImageMode] = createSignal(0);
        const [detectPalette, setDetectPalette] = createSignal(false);

        createEffect(() => {
            dispatch({type: "detect-palette", payload: detectPalette()});
        })
        const dispatch = (action: Action) => {
            props.click(action);
            //subscribe();
        }
        const state = {

        }
        onMount(function () {
            if (props.onMount) {
                props.onMount(state)
            }


            var toast = new Toast(document.getElementById('liveToast') as Element).show();

            //toast.show()
        })
        return (
            <div>
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">

                            <strong class="me-auto">Photobox v2</strong>
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
                                <button type="button" class="btn btn-outline-primary" onClick={() => dispatch({type: 'zoomOut'})}>-</button>
                                <button type="button" class="btn btn-outline-primary" disabled={true}>ZOOM</button>
                                <button type="button" class="btn btn-outline-primary" onClick={() => dispatch({type: 'zoomIn'})}>+</button>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Тип печати
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Лаборатория</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Фотопринтер</a></li>
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
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Глянцевая</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Матовая</a></li>
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
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Глянцевая</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>Матовая</a></li>
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
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: '9x13'})}>9x13</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: '13x18'})}>13x18</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: '9x9'})}>9x9</a></li>
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
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: 'crop-image'})}>Кадр в обрез</a></li>
                                    <li><a class="dropdown-item" href="#"onClick={() => dispatch({type: 'full-image'})}>Кадр целиком</a></li>
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
                                       id="flexSwitchCheckDefault" onChange={(e) => setDetectPalette((e.target as HTMLInputElement).checked)}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Подобрать фон</label>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1">
                        <div class="col">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-primary dropdown-toggle btn-sm"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    С рамкой
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch({type: ''})}>С рамкой</a></li>
                                    <li><a class="dropdown-item" href="#"onClick={() => dispatch({type: ''})}>Без рамки</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Сбросить</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="exampleColorInput" class="col-form-label">Цвет</label>
                                <input type="color" class="form-control " id="exampleColorInput" value="#563d7c" title="Choose your color"/>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 mt-1 mb-3">
                        <div class="col">
                            <div class="form-">
                                <label for="customRange2" class="form-label">Размер(1мм)</label>
                                <input type="range" class="form-range" min="0" max="50" step="1" value={1} id="customRange2"/>
                            </div>
                        </div>
                    </div>

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
