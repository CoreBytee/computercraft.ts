/** @noSelfInFile **/

declare type LuaDate = {
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    sec: number;
    wday: number;
    yday: number;
    isdst: boolean;
}

declare namespace os {
    function version(): string;
    function getComputerID(): number;
    function computerID(): number;
    function getComputerLabel(): string | undefined;
    function computerLabel(): string | undefined;
    function setComputerLabel(label?: string | undefined): void;
    function run(env: LuaTable, path: string, ...args: string[]): boolean;
    function queueEvent(type: string, ...param: any[]): void;
    function clock(): number;
    function startTimer(timeout: number): number;
    function cancelTimer(id: number): void;
    function time(mode?: string | undefined): number;
    function sleep(timeout: number): void;
    function day(mode?: string | undefined): number;
    function setAlarm(time: number): number;
    function cancelAlarm(id: number): void;
    function shutdown(): void;
    function reboot(): void;
    function epoch(mode?: string | undefined): number;
    function date(format?: string | undefined, time?: number | undefined): string | LuaDate;
    function pullEvent(filter?: string | undefined): LuaMultiReturn<[string, ...any[]]>;
    function pullEventRaw(filter?: string | undefined): LuaMultiReturn<[string, ...any[]]>;
}