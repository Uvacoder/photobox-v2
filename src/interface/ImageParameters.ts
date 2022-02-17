import {ImagePrintMode} from "../constants/ImagePrintMode";

export interface ImageParameters {

    src: {
        thumbnail: string,
        full: string
    }
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
    detectAndFillWithGradient?: boolean,
    colorAdjustment?: {
        hue?: number,
        brightness?: number,
        contrast?: number,
    }
}
