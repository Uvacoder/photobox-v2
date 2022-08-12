import  Cropper from "cropperjs";
import {IconProps} from "solid-icons";
// @ts-ignore
import {AriaAttributes} from "solid-js/jsx-runtime";
// @ts-ignore
import {DOMAttributes} from "solid-js/types/jsx";
import {TippyOptions} from 'solid-tippy';

declare module "*.module.css";

interface Map<K, V> {
    toJson(): string;
}

interface MapConstructor {
    fromJson(jsonStr: string): Map<any, any>;
}

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            tippy: TippyOptions | boolean | undefined;
        }
    }
}