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
import {FillColorCommand} from "./commands/FillColorCommand";
import view from "./components/skeleton/view";
import {GoToPageCommand} from "./commands/GoToPageCommand";
import {Commands} from "./constants/Commands";
import {DetectBestFrameCommand} from "./commands/DetectBestFrameCommand";
import {ChangeFrameCommand} from "./commands/ChangeFrameCommand";

export default class Application{
    private container = document.getElementById('root');
    private viewport: Viewport;
    public static INVOKER: Invoker;

    constructor() {

        this.registerListeners();
        this.createSkeleton();

        const toolbarContainer = document.createElement('div');
        toolbarContainer.className = "toolbar";
        this.container?.appendChild(toolbarContainer);
        const toolbar = new Toolbar();
        this.addElementTo(toolbar, document.getElementById("sidebar-container"));




        this.viewport = new Viewport(document.getElementById("viewport-container"));

        this.viewport.addImages();
        //this.viewport.renderImages(1);
        //this.addElementTo(this.viewport, document.getElementById("viewport-container"));



        const paginationContainer = document.createElement('div');
        paginationContainer.className = "pagination";
        this.container?.appendChild(paginationContainer);
        const pagination = new Pagination(null, this.viewport.getImagesNumber());
        //pagination.updatePagination(this.viewport.getImagesNumber());
        this.addElementTo(pagination, document.getElementById("pagination-container"));

        setTimeout(() => {

            //this.viewport.renderImages(2);
            //Application.INVOKER.execute({type: "go-to-page", payload: 2})
           // pagination.setPage(2)
        }, 3000);

        Application.INVOKER = new Invoker();
        Application.INVOKER.register('zoomIn', new TileZoomInCommand(this));
        Application.INVOKER.register('zoomOut', new TileZoomOutCommand(this));
        Application.INVOKER.register('13x18', new ChangeAspectCommand(this, 13 , 18));
        Application.INVOKER.register('9x9', new ChangeAspectCommand(this, 9, 9));
        Application.INVOKER.register('9x13', new ChangeAspectCommand(this, 9, 13));
        Application.INVOKER.register(Commands.CHANGE_IMAGE_PRINT_MODE, new ImagePrintModeCommand(this));
        Application.INVOKER.register('crop-image', new ImagePrintModeCommand(this));
        Application.INVOKER.register('export', new ExportOrderCommand(this));
        Application.INVOKER.register('detect-palette', new FillColorCommand(this));
        Application.INVOKER.register('detect-palette', new FillColorCommand(this));
        Application.INVOKER.register(Commands.GO_TO_PAGE, new GoToPageCommand(this));
        Application.INVOKER.register(Commands.AUTO_DETECT_FRAME, new DetectBestFrameCommand(this));
        Application.INVOKER.register(Commands.CHANGE_FRAME, new ChangeFrameCommand(this));
    }

    public getViewport() {
        return this.viewport;
    }

    private addElementTo(element: BaseView, container?: HTMLElement | null) {
        const el = container || document.createElement('div');
        //this.container?.appendChild(el);
        render(() => element.getJSXElement(), el);
    }

    private createSkeleton(){
        render(() => view({}), this.container || document.body);
    }

    private registerListeners(){
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
}

new Application();
