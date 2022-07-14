import {ImageParameters} from "../interface/image/ImageParameters";
import {ImagePrintMode} from "../constants/ImagePrintMode";
import {Option} from "../interface/options/Option";
import {FrameType} from "../constants/FrameType";
import {deflate, inflate, Serialize} from "serialazy";
import {JsonMap} from "serialazy/lib/dist/json_type";
import SerializableMap from "./SerializableMap";
import {OptionItem} from "../interface/options/OptionItem";
import {PreselectedOption} from "../interface/options/PreselectedOption";
// @ts-ignore
import alias from 'alias-decorator'
import {Constants} from "../constants/Constants";
import {measureAsync, measureSync} from "./decorators";

const objectSerializer = {
    down: (value: any) => {
        if (!value) {
            return null;
        }
        return JSON.parse(JSON.stringify(value))
    },

    up: (value: any) => {
        return (value);
    },
    optional: true,
    nullable: true
};


export default class ImageParametersImpl implements ImageParameters {

    getProperty(name: string): any {
        // @ts-ignore
        //return this[name];

        switch (name) {
            case Constants.PRINT_MODE_OPTION_LABEL:
                return this.imagePrintMode

            case Constants.FRAME_OPTION_LABEL:
                return this.frame

        }
    }

    @Serialize.Custom(objectSerializer)
    colorAdjustment: { saturation: number; brightness: number; contrast: number } = {
        saturation: 1,
        brightness: 1,
        contrast: 1
    };

    @Serialize.Custom(objectSerializer)
    cropData?: Cropper.Data;

    @Serialize.Custom(objectSerializer)
    cropDataForRender?: Cropper.Data;

    @Serialize.Custom(objectSerializer)
    canvasData?: Cropper.CanvasData;

    @Serialize({optional: true})
    detectAndFillWithGradient: boolean = false;

    @Serialize.Custom(objectSerializer)
    frame: { color: string; thickness: number; type: FrameType } = {
        color: '#fff',
        thickness: 5,
        type: FrameType.NONE
    };

    @Serialize({optional: true})
    imagePrintMode: ImagePrintMode = ImagePrintMode.CROP;

    @Serialize.Custom({
        down: (val: SerializableMap<string, Option>) => {
            // console.log(JSON.parse(val.toJson()));
            return JSON.stringify(val.toJSON());
        },

        up: (val: any) => {
            if (!val) {
                return new SerializableMap<string, Option>();
            }
            return new SerializableMap<string, Option>((val))
        }
    })
    options: SerializableMap<string, Option> = new SerializableMap<string, Option>();

    @Serialize.Custom({
        down: (value: any) => {
            return (value);
        },
        up: (value: any) => {
            return (value);
        }
    })
    selectedOptions: PreselectedOption[] = [];


    @Serialize({optional: true})
    quantity: number = 1;

    @Serialize({optional: true})
    rotate: number = 0;

    @Serialize()
    isManuallyRotated: boolean = false;

    @Serialize.Custom(objectSerializer)
    size: { width: number; height: number } = {
        width: 9,
        height: 9
    };

    @Serialize.Custom(objectSerializer)
    src: { thumbnail: string; full: string; adjusted?: string } = {
        thumbnail: '',
        full: ''
    };

    @Serialize()
    zoom: number = 0;

    @Serialize()
    autoColorEnhance: boolean = false;

    @Serialize()
    autoDetectBestFrame: boolean = true;

    @Serialize.Custom(
        {
            up: value => {
                if (!value) {
                    return null;
                }
                return value.toString().split('x').map(v => parseInt(v));
            },
            down: value => {
                if (!value) {
                    return null;
                }
                return (value as []).join('x');
            }
        }
    )
    resolution = null;

    @Serialize.Custom(objectSerializer)
    params?: object;


    constructor() {
    }

    public serialize(keepOptions: boolean = false): JsonMap {

        if (!keepOptions) {
            //this.options = new SerializableMap<string, Option>();
        }

        let serialized = ((deflate(this)));
        //delete serialized['options'];
        return serialized;
    }

    public shallowSerialize(): ImageParameters {
        const params = new ImageParametersImpl();
        params.quantity = this.quantity;
        if (this.selectedOptions) {
            params.selectedOptions = JSON.parse(JSON.stringify(this.selectedOptions));
        }
        params.params = this.params;
        return params;
    }

    public deserialize(input: JsonMap) {
        let inflated = inflate(ImageParametersImpl, (input));


        for (let [key, value] of inflated.options) {
            value.option_values_map = SerializableMap.fromJSON(value.option_values_map);
        }

        return inflated;
    }


    public clone(): ImageParameters {
        const params = new ImageParametersImpl();
        params.options = SerializableMap.fromJSON((this.options.toJSON()));

        for (let [key, value] of params.options) {
            value.option_values_map = SerializableMap.fromJSON(value.option_values_map);
        }
        //console.log(params.options.get('82')!.option_values_map);


        //params.options = this.options;

        params.src = {
            thumbnail: this.src.thumbnail,
            full: this.src.full,
            adjusted: this.src.adjusted,
        };

        params.frame = {
            color: this.frame.color,
            thickness: this.frame.thickness,
            type: this.frame.type,
        }

        params.imagePrintMode = this.imagePrintMode;
        params.detectAndFillWithGradient = this.detectAndFillWithGradient;
        params.size = {
            height: this.size.height,
            width: this.size.width
        };

        params.autoColorEnhance = this.autoColorEnhance;
        params.autoDetectBestFrame = this.autoDetectBestFrame;

        params.colorAdjustment = {
            saturation: this.colorAdjustment.saturation,
            brightness: this.colorAdjustment.brightness,
            contrast: this.colorAdjustment.contrast,
        }

        if (this.cropData) {
            params.cropData = JSON.parse(JSON.stringify(this.cropData));
        }

        if (this.canvasData) {
            params.canvasData = JSON.parse(JSON.stringify(this.canvasData));
        }

        if (this.params) {
            params.params = this.params;
        }

        params.resolution = this.resolution;

        params.quantity = this.quantity;
        params.rotate = this.rotate;
        params.isManuallyRotated = this.isManuallyRotated;
        params.zoom = this.zoom;

        params.selectedOptions = JSON.parse(JSON.stringify(this.selectedOptions));

        return params;
    }
}