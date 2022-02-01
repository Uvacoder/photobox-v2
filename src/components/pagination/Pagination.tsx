import {BaseView} from "../../BaseView";
import view from './view';
// @ts-ignore
//import pagination from 'pagination';

export default class Pagination extends BaseView<any> {
    constructor(container?: HTMLElement) {
        super(container);
        this.init(view.template());
        //var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
        //console.log(paginator.render());
    }
}
