import {Option} from "./options/Option";
import {ExportedProperties} from "./ExportedProperties";
import {PreselectedOption} from "./options/PreselectedOption";

export interface PhotoBoxParameters {
    container: string;
    options: Option[];
    preselectedOptions?: PreselectedOption[];
    itemsPerPage: number;
    onDeleteAllPhotosCallback: () => void;
    onMakeOrderCallback: (properties: ExportedProperties) => void;
    onOpenUploadWindowCallback: () => void;
    onPropertiesChangedCallback: (properties: ExportedProperties) => void;
}
