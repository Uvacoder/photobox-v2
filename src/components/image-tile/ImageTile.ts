import {IState} from "./view";
import {ImageParameters} from "../../interface/image/ImageParameters";
import {ImagePrintMode} from "../../constants/ImagePrintMode";

export interface ImageTile {
   uuid: string;
   render(parameters: ImageParameters): HTMLElement;

}