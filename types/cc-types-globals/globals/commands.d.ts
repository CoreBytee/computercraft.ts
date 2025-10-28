/** @noSelfInFile **/

/** @noSelf */
declare namespace commands {
	function exec(
		command: string,
	): LuaMultiReturn<[boolean, string[], number | undefined]>;
	function execAsync(command: string): number;
	function list(command: string): string[];
	function getBlockPosition(): LuaMultiReturn<[number, number, number]>;
	function getBlockInfo(
		x: number,
		y: number,
		z: number,
		dimension?: string,
	): LuaTable | Object;
	function getBlockInfos(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		dimension?: string,
	): (LuaTable | Object)[];
}
