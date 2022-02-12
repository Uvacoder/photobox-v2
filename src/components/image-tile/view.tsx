import {createEffect, createSignal, onMount, Signal} from "solid-js";
import type {Component} from 'solid-js';
import {h} from "tsx-dom";
// @ts-ignore
import EventBus from 'eventing-bus';
import Props from "../../interface/Props";
import State from "../../interface/State";
import {FaCopy} from "solid-icons/fa";
import {FaTrashAlt} from "solid-icons/fa";
import {FaSolidBorderStyle} from "solid-icons/fa";
import {BsTablet} from "solid-icons/bs";
import {BsTabletLandscape} from "solid-icons/bs";
import {Tooltip} from "bootstrap";

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

    const [copies, setCopies] = createSignal(1);
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

        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-tooltip="tooltip"]'))
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl)
        });
        // console.log(tooltipList);

    })

    const decreaseCopies = () => {
        if(copies() === 1){
            return;
        }
        setCopies(copies() - 1);
    }

    const increaseCopies = () => {
        if(copies() == 10){
            return;
        }
        setCopies(copies() + 1);
    }


    return (
        <>
            <div className={"image-tile-wrapper"}>
                <div className={'image-container'}>
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
            <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group btn-group-sm w-100" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary" data-bs-tooltip="tooltip"
                            title="Копировать"
                            data-bs-placement="bottom">
                        <FaCopy size="1em"/>
                    </button>
                    <button type="button" class="btn btn-outline-primary" data-bs-tooltip="tooltip"
                            title="Параметры рамки" data-bs-placement="bottom">
                        <FaSolidBorderStyle size="1em"/>
                    </button>
                    <button type="button" class="btn btn-outline-primary" data-bs-tooltip="tooltip"
                            title="Вертикально"
                            data-bs-placement="bottom">
                        <BsTabletLandscape size="1em"/>
                    </button>
                    <button type="button" class="btn btn-outline-danger" data-bs-tooltip="tooltip" title="Удалить"
                            data-bs-placement="bottom">
                        <FaTrashAlt size="1em"/>
                    </button>
                </div>
                <div class="input-group input-group-sm w-100">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={decreaseCopies}>-</button>
                    <button class="form-control" value="1" aria-label="Example text with button addon"
                            aria-describedby="button-addon1" disabled={true}>{copies}</button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={increaseCopies}>+</button>
                </div>
            </div>
        </>
    )
}

export default view;

