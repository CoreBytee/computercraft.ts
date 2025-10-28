/** @noSelfInFile **/

/** @noSelf */
declare namespace shell {
	function exit(): void;
	function dir(): string;
	function setDir(path: string): void;
	function path(): string;
	function setPath(path: string): void;
	function resolve(path: string): string;
	function resolveProgram(name: string): string;
	function aliases(): { [name: string]: string };
	function setAlias(name: string, program: string): void;
	function clearAlias(name: string): void;
	function programs(showHidden?: boolean): string[];
	function getRunningProgram(): string;
	function run(command: string, ...args: string[]): boolean;
	function execute(command: string, ...args: string[]): boolean;
	function openTab(command: string, ...args: string[]): number;
	function switchTab(id: number): void;
	function complete(prefix: string): string[];
	function completeProgram(prefix: string): string[];
	function setCompletionFunction(
		path: string,
		completion: (
			shell: LuaTable | Object,
			index: number,
			partial: string,
			previous: string[],
		) => string[],
	): void;
	function getCompletionInfo(): {
		fnComplete: (
			shell: LuaTable | Object,
			index: number,
			partial: string,
			previous: string[],
		) => string[];
	}[];
}
