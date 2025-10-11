/** @noSelfInFile **/

declare namespace rednet {
    var CHANNEL_BROADCAST: number;
    var CHANNEL_REPEAT: number;
    var MAX_ID_CHANNELS: number;
    function open(modem: string): void;
    function close(modem?: string): void;
    function isOpen(modem?: string): boolean;
    function send(recipient: number, message: any, protocol?: string): boolean;
    function broadcast(message: any, protocol?: string): void;
    function receive(filter?: string, timeout?: number): LuaMultiReturn<[number, any, string | undefined] | [undefined]>;
    function host(protocol: string, hostname: string): void;
    function unhost(protocol: string): void;
    function lookup(protocol: string, hostname?: string): LuaMultiReturn<[...number[]]>;
    function run(): void;
}