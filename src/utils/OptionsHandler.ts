import {Option} from "../interface/options/Option";
import {OptionItem} from "../interface/options/OptionItem";
import {HandledOptionResult} from "../interface/options/HandledOptionResult";

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

    public static handleOptionChange(originalOptions: Map<string, Option>,
                                     selectedOptionsMap: Map<string, OptionItem>,
                                     checked: boolean,
                                     optionId: string,
                                     valueId: string): HandledOptionResult | undefined {

        const options = new Map(originalOptions);
        // reset all disabled options
        options.forEach(option => {
            option.option_values_map.forEach(value => {
                value.disabled = false;
                // reset array with conflicted options
                value.conflictedOptions = null;
            })
        })


        // get option
        const option = options.get(optionId);
        if (!option || !option.option_values_map) {
            return;
        }

        // unselect all variants of option
        option.option_values_map.forEach((item) => {
            item.selected = false;
        });

        // get option item
        const affectedOption = option.option_values_map.get(valueId);
        if (!affectedOption) {
            return;
        }
        // set selected option item as option name
        option.selected_name = affectedOption.name;
        affectedOption.selected = checked;

        // update map with changed options
        selectedOptionsMap.set(optionId, affectedOption);

        // delete option from selected when it was unchecked
        if (!affectedOption.selected) {
            selectedOptionsMap.delete(optionId);
            option.selected_name = null;
        }

        // go through all selected options
        selectedOptionsMap.forEach((selectedOption: OptionItem, key: string) => {
            // go through related options of selected option
            selectedOption.relation_options.map(relatedOptions => {
                if (!options.get(relatedOptions.option_id)) {
                    return;
                }
                const optionByRelatedOptions = options.get(relatedOptions.option_id);
                if (!optionByRelatedOptions) {
                    return;
                }
                // go through option values and disable if it's not in the related options list
                // apart add to option value list of conflicted options
                optionByRelatedOptions.option_values_map.forEach(optionValue => {
                    if (!relatedOptions.option_value_id.includes(optionValue.option_value_id)) {
                        optionValue.disabled = true;
                        if (!optionValue.conflictedOptions) {
                            optionValue.conflictedOptions = [];
                        }
                        // @ts-ignore
                        optionValue.conflictedOptions.push(`${options.get(key).name}: ${selectedOption.name}`)
                    }
                })
            })
        });
        return {
            affectedOptionItem: affectedOption,
            affectedOption: option,
            updatedOptions: options
        }
    }
}
