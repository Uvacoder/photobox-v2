import {createEffect, createSignal, onMount, Signal} from "solid-js";
import type {Component} from 'solid-js';
import {h} from "tsx-dom";
// @ts-ignore
import EventBus from 'eventing-bus';
import Props from "../../interface/Props";
import State from "../../interface/State";

export interface IProps extends Props {
    // name: string,
    src: string,
}


export interface IState extends State {
    setLoaded: (arg?: any) => any
}

class View {

}

const STATE_UPDATE = "STATE_UPDATE";

const view = (props: IProps) => {
    EventBus.on(STATE_UPDATE, (state: IState) => {

        // setCount(10);
        // loaded[1](true)
    });

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
    })
    // setInterval(() => setCount(count() + 1), 1000);
    // @ts-ignore
    return (<div className={'image-container'}>
        <img src={props.src} alt="" />
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
    </div>)
}

export default view;

