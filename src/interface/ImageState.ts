import {ImagePrintMode} from "../constants/ImagePrintMode";

export interface ImageState {
    thumbnail?: string,
    url: string,
    cropData: Cropper.Data | null;
    size: { w: number, h: number };
    imagePrintMode: ImagePrintMode;
    border?: {
        color: string,
        thickness: number
    },
    quantity: number,
    zoom?: number,
    rotate?: number
}
