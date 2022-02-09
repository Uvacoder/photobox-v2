import {Commands} from "../constants/Commands";

export interface Action {
    type: Commands | string;
    payload?: object | boolean | string | number
}
