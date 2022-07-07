import {IState} from "./view";
import {ImageParameters} from "../../interface/image/ImageParameters";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {PreselectedOption} from "../../interface/options/PreselectedOption";

export interface ImageTile {
   uuid: string;
   show(): HTMLElement;
   updateParameters(selectedOption: PreselectedOption, parameters?: ImageParameters): string | undefined;
   copyImageParameter(): ImageParameters;
   serializeState(): any;
   shallowSerialize(): any;
   updateZoom(): void;
   detectColorPalette(fill: boolean): void;
   setFrameWeight(thickness: number): void;
   setFrameColor(color: string): void;
}