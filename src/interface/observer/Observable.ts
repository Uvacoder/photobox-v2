import {Commands} from "../../constants/Commands";
import {Observer} from "./Observer";

export interface Observable {

    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(event: Commands, ...data: any[]):void
}
