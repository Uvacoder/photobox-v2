import {Observer} from "../../interface/observer/Observer";
import {Observable} from "../../interface/observer/Observable";
import {PreselectedOption} from "../../interface/options/PreselectedOption";

export interface Toolbar extends Observer, Observable{
    updateImageUploadProgress(progress: number): void;
    setImageProcessingStatus(text: string | null): void;
    resetOptions(): void;
    setPreselectedOptions(preselectedOptions: PreselectedOption[]): void;
}