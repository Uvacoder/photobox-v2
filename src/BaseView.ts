import {render} from "solid-js/web";
import Counter, {IProps} from "./components/image-tile/view";
import {JSX} from "solid-js";
import Props from "./interface/Props";
import State from "./interface/State";
import {IState} from "./components/pagination/view";

export abstract class BaseView<P = Props, S = State> {
    private element: JSX.Element | null = null;
    private container: HTMLElement;

    //private viewState: S = {} as S;

    protected constructor(container?: HTMLElement | null) {

        if (container) {
            this.container = container;
        } else {
            this.container = document.createElement("div");
        }
        // super();
        //this.element = element;
        //solidRender(() => this.element as any, container);
    }

    mountView(element: (props: P) => JSX.Element, props: P): void {
        //console.log(element);
        props = {
            ...props,
            onMount: this.onMountView.bind(this)
        }
        // return new Promise<void>((resolve, reject) => {
        this.element = element(props);
        if (this.container) {
            render(() => {
                // resolve();
                // this.mounted({});
                return this.element as any;
            }, this.container || document.body);
        }
        //});
    }

    getState(): void {
        //return this.viewState;
    }

    abstract onMountView(state: S): void;

    createElement(tagName: string) {

    }

    public addClass(element: HTMLElement, className: string) {
        element.classList.add(className);
    }

    public removeClass(element: HTMLElement, className: string) {
        element.classList.remove(className);
    }

    public getContainer(): HTMLElement {
        return this.container;
    }

    public getJSXElement(): JSX.Element {
        return this.element;
    }

    public getPlainDomElement(): HTMLElement {
        // @ts-ignore
        return (this.element[0] as HTMLElement);
    }
}
