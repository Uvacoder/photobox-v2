import {Option} from "./options/Option";
import {ImageTileImpl} from "../components/image-tile/ImageTileImpl";
import {ImageParameters} from "./image/ImageParameters";

export interface ExportedProperties{
    options: Option[];
    photos: ImageParameters[];
    extra: string;
}
