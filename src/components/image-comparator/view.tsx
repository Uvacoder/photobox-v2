import {Component, onMount} from "solid-js";
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import {t} from "../../i18n/i18n";

export interface IProps extends Props {
    originalImageSrc: string;
    adjustedImageSrc: string;
}


export interface IState extends State {

}

const view: Component<IProps> = (props: IProps) => {

    onMount(() => {
        if (props.onMount) {
            props.onMount({})
        }
    });

    return (
        <>
            <div id="image-compare">
                <img src={props.originalImageSrc} alt="" />
                <img src={props.adjustedImageSrc} alt="" />
            </div>

        </>
    )
}

export default view;
