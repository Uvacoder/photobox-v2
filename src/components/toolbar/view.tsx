import {createSignal, onMount} from "solid-js";
import {Action} from "../../interface/Action";
import Props from "../../interface/Props";
import UIkit from 'uikit';
import Alert from 'bootstrap/js/dist/alert';
import {Toast} from "bootstrap";
interface IProps extends Props {
    click: (action: Action) => void
}

export default {
    subscribe: (callback: () => void) => {

    },

    template: (props: IProps) => {
        const [text, setText] = createSignal("logo");
        const dispatch = (action: Action) => {
            props.click(action);
            //subscribe();
        }
        const state = {
            setText
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
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'zoomIn'})}>+</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'zoomOut'})}>-</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'full-image'})}>Full</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'crop-image'})}>Crop</a></li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'fill-color'})}>Fill color</a></li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"> </span>
                                        Loading...
                                    </button>
                                </li>
                                <li class="nav-item"><a class="nav-link" aria-current="page" href="#" onClick={() => dispatch({type: 'export'})}>EXPORT</a></li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Размер
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#" onClick={() => dispatch({type: '9x13'})}>9x13</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#" onClick={() => dispatch({type: '9x9'})}>9x9</a></li>
                                        <li><a class="dropdown-item" aria-current="page" href="#" onClick={() => dispatch({type: '13x18'})}>13x18</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="..." class="rounded me-2" alt="..."/>
                                <strong class="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>



            </div>)
    }
}
