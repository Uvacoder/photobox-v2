import {ImagePrintMode} from "../constants/ImagePrintMode";

export interface ImageParameters {
    thumbnail?: string,
    url: string,
    cropData: Cropper.Data | null | undefined;
    size: { width: number, height: number };
    imagePrintMode: ImagePrintMode;
    border?: {
        color: string,
        thickness: number,
        type?: string
    },
    quantity: number,
    zoom?: number,
    rotate?: number,
    copies?: number,
    detectAndFillWithGradient?: boolean
}
