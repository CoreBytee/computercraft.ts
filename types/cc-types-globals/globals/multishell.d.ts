/** @noSelfInFile **/

declare namespace multishell {
	function getFocus(): number;
	function setFocus(n: number): boolean;
	function getTitle(n: number): string | undefined;
	function setTitle(n: number, title: string): void;
	function getCurrent(): number;
	function launch(env: LuaTable, path: string, ...args: string[]): number;
	function getCount(): number;
}
