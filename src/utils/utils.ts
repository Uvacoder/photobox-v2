import Swal from "sweetalert2";
import {t} from "../i18n/i18n";
import config from "../config/config.json";

/** Parser function interface */
export interface Parser<T> {
    /**
     * A function that takes as argument the serialization of an object
     * and returns a new instance of the object.
     * @param {any} item The serialized representation of the object.
     * @return {T} The loaded object instance.
     */
    (item: any): T;
}

export const showInfoToast = (text: string) => {
    Swal.fire({
        title: text,
        toast: true,
        position: 'top',
        timer: config.infoToastTimout,
        color: 'white',
        background: config.infoToastBackground,
        timerProgressBar: true,
        showConfirmButton: false,
    }).then((result) => {
    })
}

export const showConfirmationMessage = (text: string, confirmText: string, cancelText: string) => {
    return Swal.fire({
        text: text,
        icon: 'info',
        showConfirmButton: true,
        confirmButtonText: confirmText,
        showCancelButton: true,
        cancelButtonText: cancelText
    });
}

export const showWarningMessage = (text: string) => {
    Swal.fire({
        text: text,
        icon: 'warning',
        showConfirmButton: true,
    }).then((result) => {
    })
}