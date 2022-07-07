import {BaseView} from "../../BaseView";
import view, {IProps, IState} from '../view';
import Application from "../../../Application";
import {Commands} from "../../../constants/Commands";
import pagination from "../../../utils/paginate";
import {Pagination as PaginationData} from "../../../interface/Pagination";
import ViewportImpl from "../../viewport/impl/ViewportImpl";
import {Pagination} from "../Pagination";

export default class PaginationImpl extends BaseView<IProps, IState> implements Pagination{
    private viewState: IState | null = null;
    private totalItems: number = 0;
    private currentPage: number = 1;
    private viewport?: ViewportImpl;

    constructor(container?: HTMLElement | null, totalItems?: number) {
        super(container);
        this.totalItems = totalItems || 0;
        const pagination = this.updatePaginationData();
        this.mountView(view, {onPageChanged: this.onPageChanged.bind(this), paginationData: pagination});
    }


    update(event: Commands, args: any[]): void {
        switch (event) {
            case Commands.IMAGES_CHANGED:
                this.updatePaginationData(args[0]);
        }
    }

    onMountView(state: IState) {
        this.viewState = state;
    }

    public registerViewport(viewport: ViewportImpl) {
        if (!this.viewport) {
            this.viewport = viewport;
        }
    }

    public updatePaginationData(totalItems?: number): PaginationData {
        if (totalItems != undefined) {
            this.totalItems = totalItems;
        }
        const result = pagination(this.totalItems, this.currentPage, Application.CONFIG.itemsPerPage);
        this.viewState?.setPaginationData(result);
       // this.viewport!.startIndex = result.startIndex;
       // this.viewport!.endIndex = result.endIndex;
        if (this.viewport && this.currentPage == 1 && this.viewport.getImagesNumber() < Application.CONFIG.itemsPerPage) {
            //this.viewport.renderImages(result.startIndex, result.endIndex);
        }
        if(this.viewport){
            this.viewport.setPaginationData(result);
        }
        return result;
    }



    private onPageChanged(page: number) {
        this.currentPage = page;
        this.viewState?.setCurrentPage(page);
        const data = this.updatePaginationData();
        this.viewState?.setPaginationData(data);
        Application.INVOKER.execute({type: Commands.GO_TO_PAGE, payload: data});
    }
}
