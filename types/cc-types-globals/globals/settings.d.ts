/** @noSelfInFile **/

type SettingOptions = {
	description?: string;
	default?: any;
	type?: string;
};

/** @noSelf */
declare namespace settings {
	function define(name: string, options?: SettingOptions): void;
	function undefine(name: string): void;
	function set(name: string, value: any): void;
	function get(name: string, defaultValue?: any): any;
	function getDetails(name: string): SettingOptions;
	function unset(name: string): void;
	function clear(): void;
	function getNames(): string[];
	function load(path?: string): boolean;
	function save(path?: string): boolean;
}
