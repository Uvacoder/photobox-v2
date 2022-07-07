import {createEffect, createSignal, onMount, Show} from "solid-js";
import Props from "../../interface/Props";
import State from "../../interface/State";
import {Pagination} from "../../interface/Pagination";

export interface IProps extends Props {
    onPageChanged: (page: number) => void
    paginationData: Pagination
}

export interface IState extends State {
    currentPage: number,
    setCurrentPage: (arg: any) => void,
    paginationData: Pagination,
    setPaginationData: (arg: Pagination) => void
}

const view = (props: IProps) => {

    const [paginationData, setPaginationData] = createSignal(props.paginationData as Pagination);
    const [currentPage, setCurrentPage] = createSignal(1);

    const exposedState = {
        currentPage: currentPage(),
        setCurrentPage,
        paginationData: paginationData(),
        setPaginationData
    }
    const goToPage = (page: number) => {
        if (page < 1 || page > paginationData().totalPages || page == currentPage()) {
            return;
        }
        props.onPageChanged(page);
    }

    onMount(function () {
        if (props.onMount) {
            props.onMount(exposedState)
        }
    })
    document.addEventListener('keydown', logKey);

    function logKey(e: any) {
        if (e.code === "ArrowLeft") {
            goToPage(currentPage() - 1);
        }
        if (e.code === "ArrowRight") {
            goToPage(currentPage() + 1);
        }
    }

    return (
        <Show when={paginationData().totalPages > 1}>
            <ul class="pagination">
                <li className={`page-item ${currentPage() <= 1 ? 'disabled' : ''}`}>
                    <span class="page-link" onClick={() => goToPage(currentPage() - 1)}>&laquo;</span>
                </li>

                {(currentPage() > paginationData().pageSize) &&
                    <li className={`page-item`}>
                        <span class="page-link"
                           onClick={() => goToPage(1)}>1</span>
                    </li>
                }

                {(currentPage() > paginationData().pageSize) &&
                    <li class="page-item disabled">
                        <span class="page-link">...</span>
                    </li>
                }

                {paginationData().pages.map(page => {
                    return (
                        <li className={`page-item ${currentPage() == page ? 'active' : ''}`}>
                            <span class="page-link" onClick={() => goToPage(page)}>{page}</span>
                        </li>
                    )
                })}

                {(currentPage() < paginationData().totalPages - 5) &&
                    <li class="page-item disabled">
                        <span class="page-link">...</span>
                    </li>
                }


                {(currentPage() < paginationData().totalPages - 5) &&
                    <li className={`page-item ${currentPage() == paginationData().totalPages ? 'active' : ''}`}>
                        <span class="page-link" onClick={() => goToPage(paginationData().totalPages)}>
                            {paginationData().totalPages}
                        </span>
                    </li>
                }
                <li className={`page-item ${currentPage() >= paginationData().totalPages ? 'disabled' : ''}`}>
                    <span class="page-link" onClick={() => goToPage(currentPage() + 1)}>&raquo;</span>
                </li>
            </ul>
        </Show>

    )
}

export default view;
