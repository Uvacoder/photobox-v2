/** @jsx element */
import Pagination from "./components/pagination/Pagination";
import Toolbar from "./components/toolbar/Toolbar";
import Viewport from "./components/viewport/Viewport";
import {BaseView} from "./BaseView";
import {render} from "solid-js/web";
import Invoker from "./commands/Invoker";
import TileZoomInCommand from "./commands/TileZoomInCommand";
import TileZoomOutCommand from "./commands/TileZoomOutCommand";
import ChangeAspectCommand from "./commands/ChangeAspectCommand";
import {ImagePrintMode} from "./constants/ImagePrintMode";
import ImagePrintModeCommand from "./commands/ImagePrintModeCommand";
import {ExportOrderCommand} from "./commands/ExportOrderCommand";
import {DetectPaletteCommand} from "./commands/DetectPaletteCommand";
import view from "./components/skeleton/view";
import {GoToPageCommand} from "./commands/GoToPageCommand";
import {Commands} from "./constants/Commands";
import {DetectBestFrameCommand} from "./commands/DetectBestFrameCommand";
import {ChangeFrameCommand} from "./commands/ChangeFrameCommand";
import Config from "./interface/Config";

export default class Application {
    private container = document.getElementById('root');
    private viewport: Viewport;
    private pagination: Pagination;
    public static INVOKER: Invoker;
    public static CONFIG: Config;

    constructor() {

        Application.CONFIG = {
            imagesPerPage: 10
        }
        this.registerListeners();
        this.createSkeleton();


        const toolbar = new Toolbar(document.getElementById("sidebar-container"));


        this.viewport = new Viewport(document.getElementById("viewport-container"));
        this.pagination = new Pagination(document.getElementById("pagination-container"));
        this.pagination.registerViewport(this.viewport);



        setTimeout(() => {
            this.addImages();
        }, 100);

        setTimeout(() => {

            //this.viewport.renderImages(2);
            //Application.INVOKER.execute({type: "go-to-page", payload: 2})
            // pagination.setPage(2)
        }, 3000);
        this.registerCommands();
    }

    public getViewport() {
        return this.viewport;
    }

    private addElementTo(element: BaseView, container?: HTMLElement | null) {
        const el = container || document.createElement('div');
        //this.container?.appendChild(el);
        render(() => element.getJSXElement(), el);
    }

    private createSkeleton() {
        render(() => view({}), this.container || document.body);
    }

    private registerCommands() {
        Application.INVOKER = new Invoker();
        Application.INVOKER.register('zoomIn', new TileZoomInCommand(this));
        Application.INVOKER.register('zoomOut', new TileZoomOutCommand(this));
        Application.INVOKER.register('13x18', new ChangeAspectCommand(this, 13, 18));
        Application.INVOKER.register('9x9', new ChangeAspectCommand(this, 9, 9));
        Application.INVOKER.register('9x13', new ChangeAspectCommand(this, 9, 13));
        Application.INVOKER.register(Commands.CHANGE_IMAGE_PRINT_MODE, new ImagePrintModeCommand(this));
        Application.INVOKER.register('crop-image', new ImagePrintModeCommand(this));
        Application.INVOKER.register('export', new ExportOrderCommand(this));
        Application.INVOKER.register('detect-palette', new DetectPaletteCommand(this));
        Application.INVOKER.register(Commands.DETECT_PALETTE, new DetectPaletteCommand(this));
        Application.INVOKER.register(Commands.GO_TO_PAGE, new GoToPageCommand(this));
        Application.INVOKER.register(Commands.AUTO_DETECT_FRAME, new DetectBestFrameCommand(this));
        Application.INVOKER.register(Commands.CHANGE_FRAME, new ChangeFrameCommand(this));
    }

    private registerListeners() {
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

    private addImages() {
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

new Application();
