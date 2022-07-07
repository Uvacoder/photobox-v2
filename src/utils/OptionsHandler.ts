import {Option} from "../interface/options/Option";
import {OptionItem} from "../interface/options/OptionItem";
import {HandledOptionResult} from "../interface/options/HandledOptionResult";
import SerializableMap from "./SerializableMap";
import {PreselectedOption} from "../interface/options/PreselectedOption";

export default class OptionsHandler {

    /**
     * Transforms array of Option to map, option id -> Option
     * @param options array of options
     */
    public static toMap(options: Option[]): SerializableMap<string, Option> {
        const result = new SerializableMap<string, Option>();
        options.map(obj => {

            if (!obj.option_values_map) {
                obj.option_values_map = new SerializableMap<string, OptionItem>();
            }
            obj.option_values.map(v => {
                v.relation_options_map = new SerializableMap(v.relation_options.map(el => {
                    return [el.option_id, el.option_value_id];
                }));

                obj.option_values_map.set(v.option_value_id, v);
            })
            //obj.option_values_map = res;
            result.set(obj.option_id, obj);
        });
        return result;
    }

    /**
     *
     * @param originalOptions
     * @param selectedOptionsMap
     * @param checked
     * @param optionId
     * @param valueId
     */
    public static handleOptionChange(originalOptions: Map<string, Option>,
                                     selectedOptionsMap: Map<string, OptionItem>,
                                     checked: boolean,
                                     optionId: string,
                                     valueId: string): HandledOptionResult | undefined {

        const options = new SerializableMap(originalOptions);
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

    public static buildOptionsMapFromSelectedOptionsIds(originalOptions: Map<string, Option>,
                                                        selectedOptionsMap: Map<string, OptionItem>,
                                                        selectedOption: PreselectedOption): HandledOptionResult | undefined {
        // const selectedOptionsMap = new Map<string, OptionItem>();
        return OptionsHandler.handleOptionChange(
            originalOptions,
            selectedOptionsMap,
            selectedOption.checked,
            selectedOption.option_id?.toString(),
            selectedOption.option_value_id?.toString()
        );
    }
}
