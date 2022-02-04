/// <reference path="./typings/cropper.d.ts" />
/** @jsx element */
import {element, createApp, VirtualElement} from "deku";
import {h, BaseProps} from "tsx-dom";
import Cropper from "cropperjs";
import smartcrop from "smartcrop";
import {ImageTile} from "./components/image-tile/ImageTile";
import {init, update, view} from "./components/image-tile/app";
import {createStore} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
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
import {ImagePrintMode} from "./constants/ImagePrintMode";
import ImagePrintModeCommand from "./commands/ImagePrintModeCommand";
import {ExportOrderCommand} from "./commands/ExportOrderCommand";
import {FillColorCommand} from "./commands/FillColorCommand";

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
        Application.INVOKER.register('zoomIn', new TileZoomInCommand(this));
        Application.INVOKER.register('zoomOut', new TileZoomOutCommand(this));
        Application.INVOKER.register('13x18', new ChangeAspectCommand(this, 13 , 18));
        Application.INVOKER.register('9x9', new ChangeAspectCommand(this, 9, 9));
        Application.INVOKER.register('9x13', new ChangeAspectCommand(this, 9, 13));
        Application.INVOKER.register('full-image', new ImagePrintModeCommand(this, ImagePrintMode.FULL));
        Application.INVOKER.register('crop-image', new ImagePrintModeCommand(this, ImagePrintMode.CROP));
        Application.INVOKER.register('export', new ExportOrderCommand(this));
        Application.INVOKER.register('fill-color', new FillColorCommand(this));
    }

    public getViewport() {
        return this.viewport;
    }

    private addElement(element: BaseView<any>) {
        const el = document.createElement('div');
        this.container?.appendChild(el);
        render(() => element.getJSXElement(), el);
    }
}

new Application();
