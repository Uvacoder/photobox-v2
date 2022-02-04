import Command from "../interface/Command";
import {Action} from "../interface/Action";

export default class Invoker{
    // The Invoker Class
    private commands: { [id: string]: Command }

    constructor() {
        this.commands = {}
    }

    register(commandName: string, command: Command) {
        // Register commands in the Invoker
        if(this.commands[commandName]){
            console.warn(`Command '${commandName}' has been registered earlier. This action will replace the old one.`);
        }
        this.commands[commandName] = command
    }

    execute(action: Action) {
        // Execute any registered commands
        if (action.type in this.commands) {
            if(action.payload){
                console.debug(`Executing command: '${action.type}' with payload: ${action.payload}`);
            }else{
                console.debug(`Executing command: '${action.type}' without payload`);
            }
            this.commands[action.type].execute(action.payload)
        } else {
            console.warn(`Command [${action.type}] not recognised`)
        }
    }
}
