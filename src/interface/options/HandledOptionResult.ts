import {OptionItem} from "./OptionItem";
import {Option} from "./Option";

export interface HandledOptionResult {
    affectedOption: Option;
    affectedOptionItem: OptionItem;
    updatedOptions: Map<string, Option>;
}
