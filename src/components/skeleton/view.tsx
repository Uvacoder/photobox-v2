import {createEffect, createSignal, onMount, Signal} from "solid-js";
import '@simonwep/pickr/dist/themes/nano.min.css';
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import Sticky from "sticky-js";


export interface IProps extends Props {
    onMount: (state: IState) => void
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
            <div class="color-picker"/>
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">PHOTOBOX V2</div>

                <div id={"sidebar-container"}>


                </div>
            </div>
            <div id="page-content-wrapper">

                <div class="container-fluid viewport" id={"viewport-container"}/>
                <div id={"pagination-container"} className={"container-fluid "}/>
            </div>
        </div>
    )
}

export default view;

