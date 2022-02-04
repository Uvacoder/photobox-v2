import {BaseView} from "../../BaseView";
import view, {IState} from './view';
// @ts-ignore
//import pagination from 'pagination';

export default class Pagination extends BaseView<any> {
    private viewState: IState | null = null;

    constructor(container?: HTMLElement) {
        super(container);
        this.mountView(view, {});
        //var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
        //console.log(paginator.render());
    }

    onMountView(state: IState) {
        this.viewState = state;
        //state.loaded[1](true);
        //view.updateState({loaded: false});
    }
}
