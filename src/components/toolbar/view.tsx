import {createSignal} from "solid-js";
import IAction from "../../commands/IAction";

interface IProps{
    click: (action: IAction) => void
}
export default {
    subscribe: (callback: () => void) => {

    },

    template: (props: IProps) => {
        const [text, setText] = createSignal("logo");
        const dispatch = (action: IAction) => {
            props.click(action);
            //subscribe();
        }
        return (  <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo" onClick={() => {dispatch({type: 'zoomOut'}); setText('new text')}}>{text}</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#" onClick={() => dispatch({type: 'zoomIn'})}>+</a></li>
                    <li><a href="#" onClick={() => dispatch({type: 'zoomOut'})}>-</a></li>
                    <li><a href="#" onClick={() => dispatch({type: '9x13'})}>9x13</a></li>
                    <li><a href="#" onClick={() => dispatch({type: '9x9'})}>9x9</a></li>
                    <li><a href="#" onClick={() => dispatch({type: '13x18'})}>13x18</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    <li>
                        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                        <ul id='dropdown1' class='dropdown-content'>
                            <li><a href="#!">one</a></li>
                            <li><a href="#!">two</a></li>
                            <li class="divider" tabindex="-1"></li>
                            <li><a href="#!">three</a></li>
                            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>)
    }
}
