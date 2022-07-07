import {Pagination as PaginationData} from "../../interface/Pagination";
import ViewportImpl from "../viewport/impl/ViewportImpl";
import {Observer} from "../../interface/observer/Observer";
import {Viewport} from "../viewport/Viewport";

export interface Pagination extends Observer{
    registerViewport(viewport: Viewport): void;
    updatePaginationData(totalItems?: number): PaginationData;
}