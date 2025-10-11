/** @noSelfInFile **/

declare namespace gps {
    var CHANNEL_GPS: number;
    function locate(timeout?: number, debug?: boolean): LuaMultiReturn<[number, number, number]>;
}