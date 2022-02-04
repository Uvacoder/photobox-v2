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
        <div>
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">5</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>

    )
}

export default view;
