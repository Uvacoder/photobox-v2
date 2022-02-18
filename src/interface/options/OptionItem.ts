import {OptionItemRelation} from "./OptionItemRelation";

export interface OptionItem{
    description: string; // full option description
    image: string; // image for option
    name: string; // option name
    option_value_id: string; // option id
    price: string; // option price
    label: string; // option label, is used to determine option behavior
    disabled: boolean | undefined, // specify if option is disabled(is conflicted)
    selected: boolean | undefined, // specify if option is selected
    conflictedOptions: string[] | null, // list of options which conflicts with current
    relation_options: OptionItemRelation[]; // list of allowed option
    value: string[] | string | null; // can contain payload for internal mechanism
}
