/** @noSelfInFile **/

/**
 * @customConstructor window.create
 * @noSelf */
declare class Window implements ITerminal {
    constructor(parent: ITerminal, x: number, y: number, width: number, height: number, visible?: boolean);
    public write(text: string): void;
    public blit(text: string, textColors: string, backgroundColors: string): void;
    public clear(): void;
    public clearLine(): void;
    public getCursorPos(): LuaMultiReturn<[number, number]>;
    public setCursorPos(x: number, y: number): void;
    public getCursorBlink(): boolean;
    public setCursorBlink(blink: boolean): void;
    public isColor(): boolean;
    public isColour(): boolean;
    public getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    public scroll(n: number): void;
    public getTextColor(): Color;
    public getTextColour(): Colour;
    public setTextColor(color: Color): void;
    public setTextColour(color: Colour): void;
    public getBackgroundColor(): Color;
    public getBackgroundColour(): Colour;
    public setBackgroundColor(color: Color): void;
    public setBackgroundColour(color: Colour): void;
    public getPaletteColor(color: Color): LuaMultiReturn<[number, number, number]>;
    public getPaletteColour(color: Colour): LuaMultiReturn<[number, number, number]>;
    public setPaletteColor(color: Color, rgb: number): void;
    public setPaletteColor(color: Color, r: number, g: number, b: number): void;
    public setPaletteColour(color: Colour, rgb: number): void;
    public setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    public getGraphicsMode(): boolean | number;
    public setGraphicsMode(mode: boolean | number): void;
    public getPixel(x: number, y: number): number;
    public setPixel(x: number, y: number, color: Color): void;
    public getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    public setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    public getFrozen(): boolean;
    public setFrozen(frozen: boolean): void;
    public getVisible(): boolean;
    public setVisible(visible: boolean): void;
    public redraw(): void;
    public restoreCursor(): void;
    public getPosition(): LuaMultiReturn<[number, number]>;
    public reposition(x: number, y: number, width?: number, height?: number): void;
}