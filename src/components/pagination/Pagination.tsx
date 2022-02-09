import {BaseView} from "../../BaseView";
import view, {IProps, IState} from './view';
import Application from "../../Application";
import {Commands} from "../../constants/Commands";
import pagination from "../../utils/paginate";
import {Pagination as PaginationData} from "../../interface/Pagination";

export default class Pagination extends BaseView<IProps, IState> {
    private viewState: IState | null = null;
    private totalItems: number = 0;
    private currentPage: number = 1;

    constructor(container?: HTMLElement | null, totalItems?: number) {
        super(container);
        this.totalItems = totalItems || 1;
        const pagination = this.updatePaginationData();
        this.mountView(view, {onPageChanged: this.onPageChanged.bind(this), paginationData: pagination});
    }

    updatePaginationData(totalItems?: number): PaginationData {
        if (totalItems != undefined) {
            this.totalItems = totalItems;
        }
        const result = pagination(this.totalItems, this.currentPage);
        this.viewState?.setPaginationData(result);
        return result;
    }

    onMountView(state: IState) {
        this.viewState = state;
        this.onPageChanged(1);
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
