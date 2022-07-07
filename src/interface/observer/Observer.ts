import {Commands} from "../../constants/Commands";

export interface Observer {
    update(event: Commands, ...args: any[]):void
}
