/** @noSelfInFile **/

declare namespace parallel {
	function waitForAny(...args: (() => void)[]): void;
	function waitForAll(...args: (() => void)[]): void;
}
