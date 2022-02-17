import {Option} from "../interface/options/Option";
import {OptionItem} from "../interface/options/OptionItem";

export default class OptionsHandler {
    private options: Option[];
    private optionsAsMap: Map<string, Option> | undefined;

    constructor(options: Option[]) {
        this.options = options;
    }

    public static toMap(options: Option[]): Map<string, Option> {
        const result = new Map<string, Option>();
        options.map(obj => {

            if (!obj.option_values_map) {
                obj.option_values_map = new Map<string, OptionItem>();
            }
            obj.option_values.map(v => {
                obj.option_values_map.set(v.option_value_id, v);
            })
            //obj.option_values_map = res;
            result.set(obj.option_id, obj);
        });
        return result;
    }
}
