export function parseArguments(args: string[]): { [key: string]: string[] } {
    const parsedArgs: { [key: string]: string[] } = {};
    for (let i = 0; i < args.length; i += 2) {
        const argName = args[i].startsWith("--") ? args[i].substring(2) : args[i];
        const argValue = args[i + 1];

        parsedArgs[argName] ||= [];

        if (argValue && !argValue.startsWith("--")) {
            parsedArgs[argName].push(argValue);
        }
    }
    return parsedArgs;
}