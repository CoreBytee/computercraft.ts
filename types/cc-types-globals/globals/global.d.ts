/** @noSelfInFile **/

declare function sleep(time: number): void;
declare function write(str: string): number;
declare function print(...str: any[]): number;
declare function printError(...str: any[]): void;
declare function read(replaceChar?: string, history?: string[], completeFn?: (partial: string) => string[], defaultValue?: string): string;
declare var _CC_DEFAULT_SETTINGS: string;
declare var _CC_DISABLE_LUA51_FEATURES: boolean;
declare var _HOST: string;