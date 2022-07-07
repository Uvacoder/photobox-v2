import {Observer} from "../../interface/observer/Observer";
import {Observable} from "../../interface/observer/Observable";
import {ImageActions} from "../../interface/image/ImageActions";
import {ImageParameters} from "../../interface/image/ImageParameters";
import {ImagePrintMode} from "../../constants/ImagePrintMode";
import {PreselectedOption} from "../../interface/options/PreselectedOption";

export interface Viewport extends Observer, Observable{
    addImage(parameters: any): void;
    getImagesNumber(): number;
    zoomIn(): void;
    zoomOut(): void;
    renderImages(): void;
    setAspectRatio(width: number, height: number): void;
    setMode(mode: ImagePrintMode): void;
    fillColor(fill: boolean): void;
    setBorderWeight(thickness: number): void;
    setBorderColor(color: string): void;
    deleteAllImages(): void;
    serializePhotos(): ImageParameters[];
    getPhotoProperties(): ImageParameters[];
    setPreselectedOptions(preselectedOptions: PreselectedOption[]): void;
    getSelectedOptions(): PreselectedOption[];
}