import Pagination from "./components/pagination/Pagination";
import Toolbar from "./components/toolbar/Toolbar";
import Viewport from "./components/viewport/Viewport";
import {BaseView} from "./BaseView";
import {render} from "solid-js/web";
import Invoker from "./commands/Invoker";
import TileZoomInCommand from "./commands/TileZoomInCommand";
import TileZoomOutCommand from "./commands/TileZoomOutCommand";
import ChangeAspectCommand from "./commands/ChangeAspectCommand";
import ImagePrintModeCommand from "./commands/ImagePrintModeCommand";
import {ExportOrderCommand} from "./commands/ExportOrderCommand";
import {DetectPaletteCommand} from "./commands/DetectPaletteCommand";
import view from "./components/skeleton/view";
import {GoToPageCommand} from "./commands/GoToPageCommand";
import {Commands} from "./constants/Commands";
import {DetectBestFrameCommand} from "./commands/DetectBestFrameCommand";
import {ChangeFrameCommand} from "./commands/ChangeFrameCommand";
import Config from "./interface/Config";
import CloneTileCommand from "./commands/CloneTileCommand";
import DeleteTileCommand from "./commands/DeleteTileCommand";
import dict from "./i18n/dict.json";
import i18next, {TFunction} from "i18next";
import {ApplicationBase} from "./interface/ApplicationBase";
import {Option} from "./interface/options/Option";
import {PhotoBoxParameters} from "./interface/PhotoBoxParameters";
import DeleteAllImagesCommand from "./commands/DeleteAllImagesCommand";
import OpenUploadWindowCommand from "./commands/OpenUploadWindowCommand";
import MakeOrderCommand from "./commands/MakeOrderCommand";
import PropertyChangedCommand from "./commands/PropertyChangedCommand";

export default class Application {
    private container = document.getElementById('root');
    private viewport!: Viewport;
    private pagination!: Pagination;
    private toolbar!: Toolbar;
    public static CONFIG: Config;
    public static INVOKER = new Invoker();
    public onInit: (() => void)  | undefined;
    private options: Option[];
    public parameters: PhotoBoxParameters;

    constructor(parameters: PhotoBoxParameters) {
        Application.CONFIG = {
            imagesPerPage: 10
        }
        this.parameters = parameters;
        this.options = parameters.options;
    }

    public async init(){
        await this.initI18N();
        await this.createSkeleton();

        this.toolbar = await new Toolbar(document.getElementById("sidebar-container"), this.parameters.preselectedOptions);
        this.viewport = await new Viewport(document.getElementById("viewport-container"));
        this.pagination = await new Pagination(document.getElementById("pagination-container"));

        this.pagination.registerViewport(this.viewport);
        this.viewport.subscribe(this.toolbar);
        this.toolbar.setOptions(this.options, this.parameters.preselectedOptions);

        this.registerCommands();
        this.registerListeners();

    }

    public getViewport() {
        return this.viewport;
    }

    public updateImageUploadProgress(loaded: number, total: number){
        this.toolbar.updateImageUploadProgress(loaded, total);
    }

    private addElementTo(element: BaseView, container?: HTMLElement | null) {
        const el = container || document.createElement('div');
        //this.container?.appendChild(el);
        render(() => element.getJSXElement(), el);
    }

    private onMount(){
        console.log('Main mounted');
    }

    private createSkeleton() {
        render(() => view({onMount: this.onMount}), document.getElementById(this.parameters.container) || document.body);
    }

    private initI18N(): Promise<TFunction>{
        return i18next
            .init({
                lng: 'en', // if you're using a language detector, do not define the lng option
                debug: true,

                resources: {
                    en: {
                        translation: dict
                    }
                }
            });
    }

    private registerCommands() {

        Application.INVOKER.register('zoomIn', new TileZoomInCommand(this));
        Application.INVOKER.register('zoomOut', new TileZoomOutCommand(this));
        Application.INVOKER.register(Commands.CHANGE_SIZE, new ChangeAspectCommand(this));
        Application.INVOKER.register(Commands.CHANGE_IMAGE_PRINT_MODE, new ImagePrintModeCommand(this));
        Application.INVOKER.register('crop-image', new ImagePrintModeCommand(this));
        Application.INVOKER.register('export', new ExportOrderCommand(this));
        Application.INVOKER.register('detect-palette', new DetectPaletteCommand(this));
        Application.INVOKER.register(Commands.DETECT_PALETTE, new DetectPaletteCommand(this));
        Application.INVOKER.register(Commands.GO_TO_PAGE, new GoToPageCommand(this));
        Application.INVOKER.register(Commands.AUTO_DETECT_FRAME, new DetectBestFrameCommand(this));
        Application.INVOKER.register(Commands.CHANGE_FRAME, new ChangeFrameCommand(this));
        Application.INVOKER.register(Commands.CLONE_TILE, new CloneTileCommand(this));
        Application.INVOKER.register(Commands.DELETE_ALL_IMAGES, new DeleteAllImagesCommand(this));
        Application.INVOKER.register(Commands.OPEN_UPLOAD_WINDOW, new OpenUploadWindowCommand(this));
        Application.INVOKER.register(Commands.PROPERTY_CHANGED, new PropertyChangedCommand(this));
        Application.INVOKER.register(Commands.MAKE_ORDER, new MakeOrderCommand(this));
    }

    private registerListeners() {
        window.addEventListener('click', event => {
           // console.log(event);
        })
        window.addEventListener('DOMContentLoaded', event => {

            // Toggle the side navigation
            const sidebarToggle = document.body.querySelector('#sidebarToggle');
            if (sidebarToggle) {
                // Uncomment Below to persist sidebar toggle between refreshes
                // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                //     document.body.classList.toggle('sb-sidenav-toggled');
                // }
                sidebarToggle.addEventListener('click', event => {
                    event.preventDefault();
                    document.body.classList.toggle('sb-sidenav-toggled');
                    localStorage.setItem('sb|sidebar-toggle', `${document.body.classList.contains('sb-sidenav-toggled')}`);
                });
            }

        });
    }

    public addImages1(images: any[]){
        console.log('addImages1', images.length);

        for (let i = 0; i <= images.length - 1; i++) {
            this.viewport.addImage(images[i].url, /*state[i] as ImageState*/);
            this.pagination.updatePaginationData(this.viewport.getImagesNumber());
        }
        console.log(this.viewport.getImagesNumber());
    }

    private addImages() {
        return;
        const state = [
            {
                "url": "./img/1.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/2.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/3.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/4.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/5.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/6.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/7.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/8.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/9.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/10.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/11.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/12.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/13.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/14.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/15.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/16.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/17.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/18.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/19.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/20.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/21.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/22.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/23.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/24.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/25.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/26.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/27.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/28.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/29.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/30.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/31.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/32.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            },
            {
                "url": "./img/33.jpg",
                "size": {
                    "w": 9,
                    "h": 13
                },
                "cropData": null,
                "imagePrintMode": 0,
                "quantity": 1,
                "zoom": 0
            }
        ];

        for (let i = 0; i <= state.length - 5; i++) {
            this.viewport.addImage(state[i].url, /*state[i] as ImageState*/);
        }
        this.pagination.updatePaginationData(this.viewport.getImagesNumber());
        let images2 = [
            {
                url: './1.jpg'
            },
            {
                url: './1 gBQxShAkxBp_YPb14CN0Nw.jpeg'
            },
            {
                url: './glossy_10x15ebb90f7646c43797e8a00f0ac1f4a233.jpeg'
            },
        ];

        setTimeout(() => {
            for (let i = 0; i <= 2; i++) {
                this.viewport.addImage(`${images2[i].url}`);
                this.pagination.updatePaginationData(this.viewport.getImagesNumber());
            }

        }, 5000);

    }

}
