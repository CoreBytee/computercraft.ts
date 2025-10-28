/** @noSelfInFile **/

/** @noSelf */
declare namespace redstone {
	function getSides(): string[];
	function setOutput(side: string, on: boolean): void;
	function getOutput(side: string): boolean;
	function getInput(side: string): boolean;
	function setAnalogOutput(side: string, value: number): void;
	function getAnalogOutput(side: string): number;
	function getAnalogInput(side: string): number;
	function setAnalogueOutput(side: string, value: number): void;
	function getAnalogueOutput(side: string): number;
	function getAnalogueInput(side: string): number;
	function setBundledOutput(side: string, value: Color): void;
	function getBundledOutput(side: string): Color;
	function getBundledInput(side: string): Color;
	function testBundledInput(side: string, mask: number): boolean;
}
