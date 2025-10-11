/** @noSelfInFile **/

declare namespace pocket {
    function equipBack(): LuaMultiReturn<[boolean, string | undefined]>;
    function unequipBack(): LuaMultiReturn<[boolean, string | undefined]>;
}