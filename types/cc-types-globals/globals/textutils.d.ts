/** @noSelfInFile **/

type UnserializeJSONOptions = {
	nbt_style?: boolean;
	parse_null?: boolean;
	parse_empty_array?: boolean;
};
type SerializeOptions = {
	compact?: boolean;
	allow_repetitions?: boolean;
};
type SerializeJSONOptions = {
	nbtStyle?: boolean;
	allow_repetitions?: boolean;
	unicode_strings?: boolean;
};

/** @noSelf */
declare namespace textutils {
	var empty_json_array: Object;
	var json_null: Object;
	function slowWrite(text: string, rate?: number): void;
	function slowPrint(text: string, rate?: number): void;
	function formatTime(time: number, hour24?: boolean): string;
	function pagedPrint(text: string, freeLines?: number): number;
	function tabulate(...args: (LuaTable | Object | Color)[]): void;
	function pagedTabulate(...args: (LuaTable | Object | Color)[]): void;
	function serialize(tab: any, options?: SerializeOptions): string;
	function serialise(tab: any, options?: SerializeOptions): string;
	function serializeJSON(tab: any, nbtStyle?: boolean): string;
	function serialiseJSON(tab: any, nbtStyle?: boolean): string;
	function serializeJSON(tab: any, options: SerializeJSONOptions): string;
	function serialiseJSON(tab: any, options: SerializeJSONOptions): string;
	function unserialize(str: string): any;
	function unserialise(str: string): any;
	function unserializeJSON(str: string, options?: UnserializeJSONOptions): any;
	function unserialiseJSON(str: string, options?: UnserializeJSONOptions): any;
	function urlEncode(url: string): string;
	function complete(searchText: string, searchTable?: any): string[];
}
