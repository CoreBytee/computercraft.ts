/** @noSelfInFile **/

declare namespace paintutils {
	function parseImage(image: string): number[][] | undefined;
	function loadImage(path: string): number[][] | undefined;
	function drawPixel(x: number, y: number, color?: Color): void;
	function drawLine(
		startX: number,
		startY: number,
		endX: number,
		endY: number,
		color?: Color,
	): void;
	function drawBox(
		startX: number,
		startY: number,
		endX: number,
		endY: number,
		color?: Color,
	): void;
	function drawFilledBox(
		startX: number,
		startY: number,
		endX: number,
		endY: number,
		color?: Color,
	): void;
	function drawImage(image: number[][], x: number, y: number): void;
}
