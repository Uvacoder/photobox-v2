import {Option} from "./options/Option";
import {ImageTileImpl} from "../components/image-tile/impl/ImageTileImpl";
import {ImageParameters} from "./image/ImageParameters";
import {PreselectedOption} from "./options/PreselectedOption";

export interface ExportedProperties{
    options: Option[];
    photos: ImageParameters[];
    selectedOptions: PreselectedOption[];
    extra: string;
}
