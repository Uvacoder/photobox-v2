import {createSignal, onMount} from "solid-js";
import Props from "../../interface/Props";
import State from "../../interface/State";

export interface IProps extends Props {
    // name: string,
    src: string,
}

export interface IState extends State {

}

const view = (props: IProps) => {

    const [currentPage, setCurrentPage] = createSignal(1);
    const pages = 100;

    onMount(function () {
        if (props.onMount) {
            props.onMount({})
        }
    })

    return (
        <ul class="pagination">

            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>

    )
}

export default view;
