/// <reference path="./typings/cropper.d.ts" />
/** @jsx element */
import "materialize-css/dist/css/materialize.min.css"
import {element, createApp, VirtualElement} from "deku";
import {h, BaseProps} from "tsx-dom";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import {ImageTile} from "./components/image-tile/ImageTile";
import {init, update, view} from "./components/image-tile/app";
import {createStore} from 'redux';
// @ts-ignore
import setupDomToVdom from 'dom-to-vdom';
import Pagination from "./components/pagination/Pagination";
import Toolbar from "./components/toolbar/Toolbar";
import Viewport from "./components/viewport/Viewport";
import {BaseView} from "./BaseView";
import {render} from "solid-js/web";
import SimpleCommand from "./SimpleCommand";
import Invoker from "./commands/Invoker";
import TileZoomInCommand from "./commands/TileZoomInCommand";
import TileZoomOutCommand from "./commands/TileZoomOutCommand";
import ChangeAspectCommand from "./commands/ChangeAspectCommand";

export default class Application {
    private container = document.getElementById('root');
    private viewport: Viewport;
    public static INVOKER: Invoker;

    constructor() {

        const toolbarContainer = document.createElement('div');
        toolbarContainer.className = "toolbar";
        this.container?.appendChild(toolbarContainer);
        const toolbar = new Toolbar();
        this.addElement(toolbar);
        toolbar.setOnStart(new SimpleCommand('hello'));

        const viewportContainer = document.createElement('div');
        viewportContainer.className = "viewport";
        this.container?.appendChild(viewportContainer);
        this.viewport = new Viewport(viewportContainer);

        this.viewport.renderImages(0, 3);
        this.addElement(this.viewport);

        setTimeout(() => {
           // this.viewport.renderImages(1, 3);
            /*viewport.addImage({
                url: './1 gBQxShAkxBp_YPb14CN0Nw.jpeg'
            })*/
            //this.viewport.zoomIn();
        }, 2000);

        const paginationContainer = document.createElement('div');
        paginationContainer.className = "pagination";
        this.container?.appendChild(paginationContainer);
        const pagination = new Pagination();
        this.addElement(pagination);

        Application.INVOKER = new Invoker();
        Application.INVOKER.register('1', new TileZoomInCommand(this));
        Application.INVOKER.register('2', new TileZoomOutCommand(this));
        Application.INVOKER.register('13x18', new ChangeAspectCommand(this, 13 / 18));
        Application.INVOKER.register('9x9', new ChangeAspectCommand(this, 9/9));
        Application.INVOKER.register('9x13', new ChangeAspectCommand(this, 9/13));
    }

    public getViewPort() {
        return this.viewport;
    }

    private addElement(element: BaseView<any>) {
        const el = document.createElement('div');
        this.container?.appendChild(el);
        render(() => element.getJSXElement(), el);
    }
}

new Application();

const container = document.getElementById('root');
const zoomIn = document.getElementById('zoomIn') || new HTMLElement();
const zoomOut = document.getElementById('zoomOut') || new HTMLElement();
const formats = document.getElementById('formats') || new HTMLElement();
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');


zoomIn.onclick = function () {
    /* croppers.forEach(cropper => {
         let container = cropper.container;
         container.style.width = '400px';
         container.style.height = '400px';
         console.log(cropper);
         cropper.resize();
         cropper.setAspectRatio(2 / 4);
         // cropper.zoom(2);
         // window.dispatchEvent(new Event('resize'));
     });*/
}
zoomOut.onclick = function () {
    /* croppers.forEach(cropper => {
         let container = cropper.container;
         container.style.width = '300px';
         container.style.height = '300px';
         console.log(cropper);
         cropper.resize();
         cropper.setAspectRatio(4 / 3);
         // cropper.zoom(2);
         // window.dispatchEvent(new Event('resize'));
     });*/
}
