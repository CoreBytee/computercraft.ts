type Font = {
	data: string;
	startX: string;
	lengthX: string;
	charW: number;
	charH: number;
	sepWidth?: number;
	spaceWidth?: number;
	lineSepHeight?: number;
	fontname?: string;
	author?: string;
	source?: string;
	license?: string;
	copyright?: string;
}

type FontOptions = {
	font?: string|Font;
	dx?: number;
	dy?: number;
	scale?: number;
	wrapWidth?: number | "nowrap";
	condense?: boolean;
	endOnNewLine?: boolean;
	sepWidth?: number;
	spaceWidth?: number;
	lineSepHeight?: number;
	textAlign?: "left" | "center" | "right";
	anchorHor?: "left" | "center" | "right";
	anchorVer?: "top" | "center" | "bottom";
}

/** @noSelf **/
declare module "@corebyte/cc-package-morefonts" {
	export function setDefaultFontOptions(options: FontOptions): void;
	export function loadFont(path:string): Font
	export function calculateTextSize(text: string, options:FontOptions):LuaMultiReturn<[number, number, string[],number[]]>
	export function print(text:string, options: FontOptions): LuaMultiReturn<[number, number]>
	export function write(text:string, options: FontOptions): LuaMultiReturn<[number, number]>
	export function writeOn(terminal: ITerminal, text: string, x: number, y: number, options: FontOptions): LuaMultiReturn<[number, number]>
}
