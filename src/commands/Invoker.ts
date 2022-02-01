import ICommand from "../interface/ICommand";

export default class Invoker{
    // The Invoker Class
    private commands: { [id: string]: ICommand }

    constructor() {
        this.commands = {}
    }

    register(commandName: string, command: ICommand) {
        // Register commands in the Invoker
        if(this.commands[commandName]){
            console.log(`Command '${commandName}' has been registered earlier. This action will replace old one.`);
        }
        this.commands[commandName] = command
    }

    execute(commandName: string) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute()
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }
}
