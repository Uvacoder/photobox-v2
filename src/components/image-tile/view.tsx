import {createEffect, createSignal} from "solid-js";
import type {Component} from 'solid-js';
import {h} from "tsx-dom";
// @ts-ignore
import EventBus from 'eventing-bus';

interface IProps {
    // name: string,
    src: string,
    onClick: () => void
}

interface IState {
    loaded: boolean
}

const STATE_UPDATE = "STATE_UPDATE";
const [loaded, setLoaded] = createSignal(false);
export default {


    updateState: (state: IState) => {
        //EventBus.publish(STATE_UPDATE, state);
        setLoaded(state.loaded);
    },

    template: (props: IProps) => {
        EventBus.on(STATE_UPDATE, (state: IState) => {

            setCount(10);
            setLoaded(state.loaded)
        });
        const [count, setCount] = createSignal(0);

        createEffect(() => {
            console.log("The count is now", count());
        });
        const [cats, setCats] = createSignal([
            {id: 'J---aiyznGQ', name: 'Keyboard Cat'},
            {id: 'z_AbfPXTKms', name: 'Maru'},
            {id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat'}
        ]);
        // setInterval(() => setCount(count() + 1), 1000);

        return (<div className={'image-container'} onClick={props.onClick}>
            <img src={props.src} alt="" style={{display: loaded() ? "block" : "none"}}/>
            {!loaded() &&
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
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

}

