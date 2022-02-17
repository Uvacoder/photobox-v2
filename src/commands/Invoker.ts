import Command from "../interface/command/Command";
import {Action} from "../interface/command/Action";
import {Commands} from "../constants/Commands";

export default class Invoker{
    // The Invoker Class
    private commands: { [id: string]: Command }

    constructor() {
        this.commands = {}
    }

    register(commandName: Commands | string, command: Command) {
        // Register commands in the Invoker
        if(this.commands[commandName]){
            console.warn(`Command '${commandName}' has been registered earlier. This action will replace the old one.`);
        }
        this.commands[commandName] = command
    }

    execute(action: Action) {
        // Execute any registered commands
        if (action.type in this.commands) {
            if(action.payload != undefined){
                console.debug(`Executing command: '${Commands[action.type as number]}' with payload: ${JSON.stringify(action.payload)}`);
            }else{
                console.debug(`Executing command: '${Commands[action.type as number]}' without payload`);
            }
            this.commands[action.type].execute(action.payload)
        } else {
            console.warn(`Command [${action.type}] not recognised`)
        }
    }
}
