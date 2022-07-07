import {BaseView} from "../BaseView";
import view, {IProps, IState} from "./view";
// @ts-ignore
import ImageCompare from "image-compare-viewer";
import Swal from 'sweetalert2'
import {t} from "../../i18n/i18n";


export class ImageComparator extends BaseView<IProps, IState> {
    private viewer: any;

    constructor(originalImageSrc: string, adjustedImageSrc: string) {
        super();
        const props: IProps = {
            originalImageSrc: originalImageSrc,
            adjustedImageSrc: adjustedImageSrc
        }
        this.mountView(view, props);
    }

    protected onMountView(state: IState): void {
        const body = document.getElementsByTagName('body')[0];
        body.append(this.getContainer());

        Swal.fire({
            html: this.getContainer(),
            showCloseButton: false,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText: t("confirmation.close"),
            cancelButtonAriaLabel: 'Thumbs down',
            willClose: (popup: HTMLElement) => {
                this.destroy()
            }
        })


        const compareElement = document.getElementById("image-compare");
        this.viewer = new ImageCompare(compareElement).mount();
    }

    private destroy() {
        this.getContainer().remove();
    }

}