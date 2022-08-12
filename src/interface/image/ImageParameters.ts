import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {Option} from "../options/Option";
import {FrameType} from "../../constants/FrameType";
import SerializableMap from "../../utils/SerializableMap";
import {JsonMap} from "serialazy/lib/dist/json_type";
import {PreselectedOption} from "../options/PreselectedOption";

export interface ImageParameters {

    src: {
        thumbnail: string,
        full: string,
        adjusted?: string
    }
    cropData?: Cropper.Data | null | undefined;
    cropDataForRender?: Cropper.Data | null | undefined;
    canvasData?: Cropper.CanvasData | null | undefined;
    size: { width: number, height: number };
    imagePrintMode: ImagePrintMode;
    frame: {
        color: string,
        thickness: number,
        type: FrameType
    },
    resolution: number[] | string | null;
    selectedOptions: PreselectedOption[];
    quantity: number;
    zoom?: number;
    rotate: number;
    isManuallyRotated?: boolean;
    detectAndFillWithGradient?: boolean;
    options: SerializableMap<string, Option>;
    autoColorEnhance: boolean;
    autoDetectBestFrame: boolean;
    colorAdjustment: {
        saturation: number,
        brightness: number,
        contrast: number,
    }
    params?: object;

    serialize(): JsonMap;
    serializeImageProperties(): ImageParameters;
    deserialize(input: JsonMap): void;
    clone(): ImageParameters;
    getProperty(name: string): any;
}
