import {Option} from "./options/Option";
import {ImageTile} from "../components/image-tile/ImageTile";
import {ImageParameters} from "./image/ImageParameters";

export interface ExportedProperties{
    options: Option[];
    photos: ImageParameters[];
    extra: string;
}
