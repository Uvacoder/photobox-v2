import {BaseView} from "../../BaseView";
import view, {IProps, IState} from './view';
import Application from "../../Application";
import {Commands} from "../../constants/Commands";
import pagination from "../../utils/paginate";
import {Pagination as PaginationData} from "../../interface/Pagination";
import Viewport from "../viewport/Viewport";

export default class Pagination extends BaseView<IProps, IState> {
    private viewState: IState | null = null;
    private totalItems: number = 0;
    private currentPage: number = 1;
    private itemsPerPage = 10;
    private viewport?: Viewport;

    constructor(container?: HTMLElement | null, totalItems?: number) {
        super(container);
        this.totalItems = totalItems || 0;
        const pagination = this.updatePaginationData();
        this.mountView(view, {onPageChanged: this.onPageChanged.bind(this), paginationData: pagination});
    }

    public registerViewport(viewport: Viewport) {
        if (!this.viewport) {
            this.viewport = viewport;
        }
    }

    updatePaginationData(totalItems?: number): PaginationData {
        if (totalItems != undefined) {
            this.totalItems = totalItems;
        }
        const result = pagination(this.totalItems, this.currentPage, this.itemsPerPage);
        this.viewState?.setPaginationData(result);
       // this.viewport!.startIndex = result.startIndex;
       // this.viewport!.endIndex = result.endIndex;
        if (this.viewport && this.currentPage == 1 && this.viewport.getImagesNumber() < this.itemsPerPage) {
            //this.viewport.renderImages(result.startIndex, result.endIndex);
        }
        if(this.viewport){
            this.viewport.setPaginationData(result);
        }
        return result;
    }

    onMountView(state: IState) {
        this.viewState = state;
        //this.onPageChanged(1);
    }

    onPageChanged(page: number) {
        this.currentPage = page;
        this.viewState?.setCurrentPage(page);
        const data = this.updatePaginationData();
        this.viewState?.setPaginationData(data);
        Application.INVOKER.execute({type: Commands.GO_TO_PAGE, payload: data});
    }

    setPage(page: number) {
        this.viewState?.setCurrentPage(page);
    }
}
