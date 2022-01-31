export class BaseView<T> {
    element: T;

    constructor(element: T) {
       // super();
        this.element = element;
    }

    init(element: HTMLElement) {
        //this.element = element;
    }

    refresh() {

    }

    public getElement(){
        return this.element;
    }
}
