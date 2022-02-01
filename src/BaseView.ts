import {render} from "solid-js/web";
import Counter from "./components/image-tile/view";
import {JSX} from "solid-js";

export class BaseView<T extends JSX.Element> {
    private element: T | null = null;
    private container: HTMLElement;

    constructor(container?: HTMLElement) {

        if (container) {
            this.container = container;
        } else {
            this.container = document.createElement("div");
        }
        // super();
        //this.element = element;
        //solidRender(() => this.element as any, container);
    }

    init(element: T) {
        this.element = element;
        if (this.container) {
            render(() => this.element as any, this.container || document.body);
        }
    }

    createElement(tagName: string) {

    }

    getContainer(): HTMLElement {
        return this.container;
    }

    public getJSXElement(): JSX.Element {
        return this.element;
    }

    public getPlainDomElement(): HTMLElement {
        return (this.element as HTMLElement);
    }
}
