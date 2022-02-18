import {Option} from "./options/Option";
import {ImageTile} from "../components/image-tile/ImageTile";

export interface ExportedProperties{
    options: Option[];
    photos: ImageTile[];
    extra: string;
}
