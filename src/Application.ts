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
            imagesPerPage: 30
        }
        this.parameters = parameters;
        this.options = parameters.options;
    }

    public async init(){
        await this.initI18N();
        await this.createSkeleton();

        this.toolbar = await new Toolbar(document.getElementById("sidebar-container"), this.parameters.preselectedOptions);
        this.viewport = await new Viewport(document.getElementById("viewport-container"), this.parameters);
        this.pagination = await new Pagination(document.getElementById("pagination-container"));

        this.pagination.registerViewport(this.viewport);

        this.viewport.subscribe(this.toolbar);
        this.viewport.subscribe(this.pagination);

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

        const that = this;
/*        window.onbeforeunload =  function ()  {
            const serializedImages = localStorage.getItem("images");
            let savedImages = [];
            if(serializedImages){
                savedImages = JSON.parse(serializedImages);
            }
            savedImages = [...that.getViewport().images, savedImages];
            localStorage.setItem("images", JSON.stringify(savedImages));
            return 'Are you really want to perform the action?';
        }*/
    }

    public addImages(images: any[]){
        images.map(image => {
            this.viewport.addImage(image, /*state[i] as ImageState*/);
            this.pagination.updatePaginationData(this.viewport.getImagesNumber());
        });


    }


}
