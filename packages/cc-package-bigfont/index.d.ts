/** @noSelf **/
declare module "@corebyte/cc-package-bigfont" {
	export function bigWrite(text: string): void;
	export function bigBlit(
		text: string,
		textColor: number,
		backgroundColor: number,
	): void;
	export function bigPrint(text: string): void;

	export function hugeWrite(text: string): void;
	export function hugeBlit(
		text: string,
		textColor: number,
		backgroundColor: number,
	): void;
	export function hugePrint(text: string): void;

	export function writeOn(
		terminal: ITerminal,
		size: number,
		text: string,
		x: number,
		y: number,
	): void;
	export function blitOn(
		terminal: ITerminal,
		text: string,
		textColor: string,
		backgroundColor: string,
	): void;

	export function makeBlittleText(
		size: number,
		text: string,
		textColor: number,
		backgroundColor: string,
	): void;
	export function generateFontSize(size: number): boolean;
}
