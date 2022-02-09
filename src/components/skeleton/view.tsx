import {createEffect, createSignal, onMount, Signal} from "solid-js";
import type {Component} from 'solid-js';
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import Sticky from "sticky-js";

export interface IProps extends Props {

}


export interface IState extends State {

}

const view = (props: IProps) => {


    //const [loaded, setLoaded] = createSignal(false);
    const [loaded, setLoaded] = createSignal(false);


    const [count, setCount] = createSignal(0);

    createEffect(() => {
        //console.log("Is loaded", loaded());
    });

    const state = {
        setLoaded
    }
    onMount(function () {
        if (props.onMount) {
            props.onMount(state)
        }

        var sticky = new Sticky('#sidebar-container');
    })
    // setInterval(() => setCount(count() + 1), 1000);
    // @ts-ignore
    return (
        <div class="d-flex" id="wrapper">
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">PHOTOBOX V2</div>

                <div id={"sidebar-container"}>


                </div>
            </div>
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle">Переключить меню</button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                        {/*<div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </nav>
                <div class="container-fluid viewport" id={"viewport-container"}>
                </div>
                <div id={"pagination-container"}></div>
            </div>
        </div>
    )
}

export default view;

