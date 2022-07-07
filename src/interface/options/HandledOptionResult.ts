import {OptionItem} from "./OptionItem";
import {Option} from "./Option";
import SerializableMap from "../../utils/SerializableMap";

export interface HandledOptionResult {
    affectedOption: Option;
    affectedOptionItem: OptionItem;
    updatedOptions: SerializableMap<string, Option>;
}
