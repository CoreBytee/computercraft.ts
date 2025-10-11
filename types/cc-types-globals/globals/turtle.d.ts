/** @noSelfInFile **/

declare namespace turtle {
    function craft(quantity?: number): LuaMultiReturn<[true, undefined] | [false, string]>;
    function forward(): LuaMultiReturn<[boolean, string | undefined]>;
    function back(): LuaMultiReturn<[boolean, string | undefined]>;
    function up(): LuaMultiReturn<[boolean, string | undefined]>;
    function down(): LuaMultiReturn<[boolean, string | undefined]>;
    function turnLeft(): LuaMultiReturn<[boolean, string | undefined]>;
    function turnRight(): LuaMultiReturn<[boolean, string | undefined]>;
    function select(slotNum: number): true;
    function getSelectedSlot(): number;

    function getItemCount(slotNum?: number): number;

    function getItemSpace(slotNum?: number): number;

    function getItemDetail(slotNum?: number, detailed?: boolean): LuaTable | Object | undefined;

    function equipLeft(): LuaMultiReturn<[true, undefined] | [false, string]>;
    function equipRight(): LuaMultiReturn<[true, undefined] | [false, string]>;

    function attack(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
    function attackUp(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
    function attackDown(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;

    function dig(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
    function digUp(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
    function digDown(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;

    function place(text?: string): LuaMultiReturn<[boolean, string | undefined]>;
    function placeUp(text?: string): LuaMultiReturn<[boolean, string | undefined]>;
    function placeDown(text?: string): LuaMultiReturn<[boolean, string | undefined]>;

    function detect(): boolean;
    function detectUp(): boolean;
    function detectDown(): boolean;

    function inspect(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;
    function inspectUp(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;
    function inspectDown(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;

    function compare(): boolean;
    function compareUp(): boolean;
    function compareDown(): boolean;

    function drop(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
    function dropUp(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
    function dropDown(count?: number): LuaMultiReturn<[boolean, string | undefined]>;

    function suck(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
    function suckUp(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
    function suckDown(count?: number): LuaMultiReturn<[boolean, string | undefined]>;

    function refuel(count?: number): LuaMultiReturn<[true, undefined] | [false, string]>;
    function getFuelLevel(): number | 'unlimited';
    function getFuelLimit(): number | 'unlimited';

    function transferTo(slotNum: number, quantity?: number): boolean;
}