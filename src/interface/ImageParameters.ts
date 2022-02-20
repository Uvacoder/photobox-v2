import {ImagePrintMode} from "../constants/ImagePrintMode";
import {Option} from "./options/Option";
import {FrameType} from "../constants/FrameType";

export interface ImageParameters {

    src: {
        thumbnail: string,
        full: string
    }
    cropData: Cropper.Data | null | undefined;
    size: { width: number, height: number };
    imagePrintMode: ImagePrintMode;
    frame?: {
        color: string,
        thickness: number,
        type?: FrameType
    },
    quantity: number,
    zoom?: number,
    rotate?: number,
    detectAndFillWithGradient?: boolean,
    options?: Map<string, Option>,
    colorAdjustment?: {
        hue?: number,
        brightness?: number,
        contrast?: number,
    }
}
