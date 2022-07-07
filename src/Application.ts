import PaginationImpl from "./components/pagination/impl/PaginationImpl";
import ToolbarImpl from "./components/toolbar/impl/ToolbarImpl";
import ViewportImpl from "./components/viewport/impl/ViewportImpl";
import {BaseView} from "./components/BaseView";
import {render} from "solid-js/web";
import Invoker from "./commands/Invoker";
import TileZoomInCommand from "./commands/TileZoomInCommand";
import TileZoomOutCommand from "./commands/TileZoomOutCommand";
import ChangeAspectCommand from "./commands/ChangeAspectCommand";
import ImagePrintModeCommand from "./commands/ImagePrintModeCommand";
import {DetectPaletteCommand} from "./commands/DetectPaletteCommand";
import view from "./components/skeleton/view";
import {GoToPageCommand} from "./commands/GoToPageCommand";
import {Commands} from "./constants/Commands";
import {ChangeFrameCommand} from "./commands/ChangeFrameCommand";
import Config from "./interface/Config";
import config from "./config/config.json"
// @ts-ignore
import { changeTheme } from 'themes-switch';

import {Option} from "./interface/options/Option";
import {PhotoBoxParameters} from "./interface/PhotoBoxParameters";
import DeleteAllImagesCommand from "./commands/DeleteAllImagesCommand";
import OpenUploadWindowCommand from "./commands/OpenUploadWindowCommand";
import MakeOrderCommand from "./commands/MakeOrderCommand";
import PropertyChangedCommand from "./commands/PropertyChangedCommand";
import {ImageParameters} from "./interface/image/ImageParameters";

import i18next, {InitOptions, TFunction} from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./i18n/locales/en.json";
import ua from "./i18n/locales/ua.json";
import ru from "./i18n/locales/ru.json";
import {Pagination} from "./components/pagination/Pagination";
import {Toolbar} from "./components/toolbar/Toolbar";
import {Viewport} from "./components/viewport/Viewport";
import {PreselectedOption} from "./interface/options/PreselectedOption";
import {JsonArray} from "serialazy/lib/dist/json_type";

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
            itemsPerPage: parameters.itemsPerPage || config.itemsPerPage,
            backendUrl: `${parameters.backend}${config.colorEnhanceEndpoint}`,
        }
        this.parameters = parameters;
        this.options = parameters.options;
    }

    private readonly sidebarContainer = "sidebar-container";

    private readonly viewportContainer = "viewport-container";

    private readonly paginationContainer = "pagination-container";

    public async init(){
         await this.initI18N();
         await this.createSkeleton();

        this.toolbar = await new ToolbarImpl(document.getElementById(this.sidebarContainer), this.parameters);
        this.viewport = await new ViewportImpl(document.getElementById(this.viewportContainer), this.parameters);
        this.pagination = await new PaginationImpl(document.getElementById(this.paginationContainer));

        this.pagination.registerViewport(this.viewport);

        this.viewport.subscribe(this.toolbar);
        this.viewport.subscribe(this.pagination);

        this.toolbar.subscribe(this.viewport);

        //this.toolbar.setOptions(this.parameters.preselectedOptions);

        this.registerCommands();
        this.registerListeners();


        changeTheme('default', `themes/bootstrap.${this.parameters.theme || 'default'}.css`, () => {
            setTimeout(() => {
                document.getElementById('preloader-full')?.remove()
            }, 500)
        })

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

    }

    private createSkeleton() {
        render(() => view({onMount: this.onMount}), document.getElementById(this.parameters.container) || document.body);
    }

    private initI18N(): Promise<TFunction>{
        const options: InitOptions = {
            //lng: '', // if you're using a language detector, do not define the lng option
            //debug: true,

            resources: {
                en: {
                    translation: en
                },
                ua: {
                    translation: ua
                },
                ru: {
                    translation: ru
                }
            }
        }

        if(this.parameters.lang){
            options.lng = this.parameters.lang;
        }
        return i18next
            .use(LanguageDetector)
            .init(options);
    }

    private registerCommands() {

        Application.INVOKER.register('zoomIn', new TileZoomInCommand(this));
        Application.INVOKER.register('zoomOut', new TileZoomOutCommand(this));
        Application.INVOKER.register(Commands.CHANGE_SIZE, new ChangeAspectCommand(this));
        Application.INVOKER.register(Commands.CHANGE_IMAGE_PRINT_MODE, new ImagePrintModeCommand(this));
        Application.INVOKER.register(Commands.DETECT_PALETTE, new DetectPaletteCommand(this));
        Application.INVOKER.register(Commands.GO_TO_PAGE, new GoToPageCommand(this));
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

        // bootstrap nested dropdowns
        $(document).on('click', '.dropdown-menu .dropdown-toggle', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');


            $(this).parents('.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });


            return false;
        });
    }


    public setPreselectedOptions(preselectedOptions: PreselectedOption[]){
        this.toolbar.setPreselectedOptions(preselectedOptions)
        this.viewport.setPreselectedOptions(preselectedOptions)
    }

    public resetToolbarOptions(){
        this.toolbar.resetOptions();
    }

    public clearPhotobox(){
        this.toolbar.resetOptions();
        this.viewport.deleteAllImages();
    }

    public addImages(images: any[]){
        images.map(image => {
            this.viewport.addImage(image);
        });
        this.pagination.updatePaginationData(this.viewport.getImagesNumber());
        Application.INVOKER.execute({type: Commands.PROPERTY_CHANGED, payload: {}});
    }


}
