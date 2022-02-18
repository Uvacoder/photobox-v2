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

    createEffect(() => {
        //console.log(`Page changed: ${currentPage()}`);
    })

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
                    <a class="page-link" href="#" onClick={() => goToPage(currentPage() - 1)}>&laquo;</a>
                </li>

                {(currentPage() > paginationData().pageSize) &&
                    <li className={`page-item`}>
                        <a class="page-link" href="#"
                           onClick={() => goToPage(1)}>1</a>
                    </li>
                }

                {(currentPage() > paginationData().pageSize) &&
                    <li class="page-item disabled">
                        <a class="page-link" href="#">...</a>
                    </li>
                }

                {paginationData().pages.map(page => {
                    return (
                        <li className={`page-item ${currentPage() == page ? 'active' : ''}`}>
                            <a class="page-link" href="#" onClick={() => goToPage(page)}>{page}</a>
                        </li>
                    )
                })}

                {(currentPage() < paginationData().totalPages - 5) &&
                    <li class="page-item disabled">
                        <a class="page-link" href="#">...</a>
                    </li>
                }


                {(currentPage() < paginationData().totalPages - 5) &&
                    <li className={`page-item ${currentPage() == paginationData().totalPages ? 'active' : ''}`}>
                        <a class="page-link" href="#"
                           onClick={() => goToPage(paginationData().totalPages)}>{paginationData().totalPages}</a>
                    </li>
                }
                <li className={`page-item ${currentPage() >= paginationData().totalPages ? 'disabled' : ''}`}>
                    <a class="page-link" href="#" onClick={() => goToPage(currentPage() + 1)}>&raquo;</a>
                </li>
            </ul>
        </Show>

    )
}

export default view;
