import {createEffect, createSignal, onMount, Signal} from "solid-js";
import '@simonwep/pickr/dist/themes/nano.min.css';
import {h} from "tsx-dom";
import Props from "../../interface/Props";
import State from "../../interface/State";
import Sticky from "sticky-js";
import {FaSolidBars, FaSolidWindowClose} from "solid-icons/fa";
import {t} from "../../i18n/i18n";
import Application from "../../Application";
import {Commands} from "../../constants/Commands";
// @ts-ignore
import hcSticky from 'hc-sticky';


export interface IProps extends Props {
    onMount: (state: IState) => void
}


export interface IState extends State {

}

const view = (props: IProps) => {

    const [loaded, setLoaded] = createSignal(false);

    const state = {
        setLoaded
    }
    onMount(function () {
        if (props.onMount) {
            props.onMount(state)
        }

        if (window.innerWidth < 768) {
            let sidebar = document.getElementById("sidebar-wrapper")!;
            new hcSticky('.photobox-navbar',
                {
                    onStart: () => {
                        sidebar.classList.add("stick");
                    },
                    onStop: () => {
                        sidebar.classList.remove('stick');
                    }
                });
           /* new hcSticky('#sidebar-wrapper', {
                onStart: () => {
                    console.log('onStart');
                },
                onStop: () => {
                    console.log('onStop');
                }
            });*/
        }

        //}
        /* var Sticky = new hcSticky('#sidebar-wrapper', {
             // options here
         });*/

    })

    const hideSidebar = () => {
        let sidebar = document.getElementById("sidebar-wrapper")!;
        sidebar.classList.remove('show')
    }

    return (
        <div class=" photobox-container d-flex" id="wrapper">
            <div id={'preloader-full'} style={{'display': 'none'}}>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="color-picker"/>
            <nav class="navbar navbar-light bg-dark photobox-navbar d-flex p-2">
                <button class="navbar-toggler btn-primary nav-item m-1" type="button" data-toggle="collapse"
                        data-target="#sidebar-wrapper"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <FaSolidBars color={'white'}/>
                </button>
                <button type="button" class="btn btn-success nav-item "
                        onClick={() => {
                            Application.INVOKER.execute({type: Commands.MAKE_ORDER})
                        }}>
                    {t('toolbar.order')}
                </button>
            </nav>

            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light d-flex m-0 p-2" style={{'align-items': 'center'}}>
                    <span>PHOTOBOX V2</span>
                    <button class="btn btn-info m-2 btn-sm btn-close-sidebar" type="button" data-toggle="collapse"
                            data-target="#sidebar-wrapper"
                            aria-controls="navbarSupportedContent1" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <FaSolidWindowClose color={'white'}/>
                    </button>
                </div>
                <div id={"sidebar-container"}></div>

            </div>
            <div id="page-content-wrapper" onClick={hideSidebar}>

                <div class="container-fluid viewport" id={"viewport-container"}/>
                <div id={"pagination-container"} className={"container-fluid "}/>
            </div>
        </div>
    )
}

export default view;

