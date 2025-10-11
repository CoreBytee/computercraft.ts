/** @noSelfInFile **/

interface IPeripheral { }

declare class CommandPeripheral implements IPeripheral {
    getCommand(): string;
    setCommand(command: string): void;
    runCommand(): LuaMultiReturn<[boolean, string | undefined]>;
}

declare class ComputerPeripheral implements IPeripheral {
    turnOn(): void;
    shutdown(): void;
    reboot(): void;
    getID(): number;
    isOn(): boolean;
    getLabel(): string;
}

declare class DrivePeripheral implements IPeripheral {
    isDiskPresent(): boolean;
    getDiskLabel(): string;
    setDiskLabel(label?: string | undefined): void;
    hasData(): boolean;
    getMountPath(): string;
    hasAudio(): boolean;
    getAudioTitle(): string;
    playAudio(): void;
    stopAudio(): void;
    ejectDisk(): void;
    getDiskID(): number;
}

declare class ModemPeripheral implements IPeripheral {
    open(channel: number): void;
    isOpen(channel: number): boolean;
    close(channel: number): void;
    closeAll(): void;
    transmit(channel: number, replyChannel: number, payload: any): void;
    isWireless(): boolean;
}

declare class WiredModemPeripheral extends ModemPeripheral {
    getNamesRemote(): string[];
    isPresentRemote(name: string): boolean;
    getTypeRemote(name: string): string;
    getMethodsRemote(name: string): string[];
    callRemote(name: string, method: string, ...args: string[]): LuaMultiReturn<[...any[]]>;
    getNameLocal(): string;
}

declare class MonitorPeripheral implements IPeripheral, ITerminal {
    write(text: string): void;
    blit(text: string, textColors: string, backgroundColors: string): void;
    clear(): void;
    clearLine(): void;
    getCursorPos(): LuaMultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getCursorBlink(): boolean;
    setCursorBlink(blink: boolean): void;
    isColor(): boolean;
    isColour(): boolean;
    getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    scroll(n: number): void;
    getTextColor(): Color;
    getTextColour(): Colour;
    setTextColor(color: Color): void;
    setTextColour(color: Colour): void;
    getBackgroundColor(): Color;
    getBackgroundColour(): Colour;
    setBackgroundColor(color: Color): void;
    setBackgroundColour(color: Colour): void;
    getPaletteColor(color: Color): LuaMultiReturn<[Color, Color, Color]>;
    getPaletteColour(color: Colour): LuaMultiReturn<[Colour, Colour, Colour]>;
    setPaletteColor(color: Color, rgb: number): void;
    setPaletteColor(color: Color, r: number, g: number, b: number): void;
    setPaletteColour(color: Colour, rgb: number): void;
    setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    getGraphicsMode(): boolean | number;
    setGraphicsMode(mode: boolean | number): void;
    getPixel(x: number, y: number): number;
    setPixel(x: number, y: number, color: Color): void;
    getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    getFrozen(): boolean;
    setFrozen(frozen: boolean): void;
    setTextScale(scale: number): void;
}

declare class PrinterPeripheral implements IPeripheral {
    write(...args: (string | number)[]): void;
    getCursorPos(): LuaMultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getPageSize(): LuaMultiReturn<[number, number]>;
    newPage(): void;
    endPage(): void;
    setPageTitle(title?: string | undefined): void;
    getInkLevel(): number;
    getPaperLevel(): number;
}

declare class SpeakerPeripheral implements IPeripheral {
    playSound(name: string, volume?: number, pitch?: number): void;
    playNote(name: string, volume?: number, pitch?: number): void;
    playAudio(data: number[], volume?: number): boolean;
    stop(): void;
}

declare class EnergyStoragePeripheral implements IPeripheral {
    getEnergy(): number;
    getEnergyCapacity(): number;
}

declare class FluidStoragePeripheral implements IPeripheral {
    tanks(): { [index: number]: { name: string, amount: number } };
    pushFluid(to: string, limit?: number, name?: string): number;
    pullFluid(from: string, limit?: number, name?: string): number;
}

declare type SlotDetail = {
    name: string;
    count: number;
    nbt?: string;
}

declare type ItemDetail = SlotDetail & {
    displayName: string;
    maxCount: number;
    damage?: number;
    maxDamage?: number;
    durability?: number;
    tags: string[];
    lore?: string[]; //?
    enchantments?: { name: string, level: number, displayName: string }[];
    unbreakable?: boolean;
}

declare class InventoryPeripheral implements IPeripheral {
    size(): number;
    list(): { [index: number]: SlotDetail };
    getItemDetail(slot: number): ItemDetail | undefined;
    getItemLimit(slot: number): number;
    pushItems(to: string, slot: number, limit?: number, toSlot?: number): number;
    pullItems(from: string, slot: number, limit?: number, fromSlot?: number): number;
}

declare namespace peripheral {
    function getNames(): string[];
    function isPresent(name: string): boolean;
    function getType(peripheral: IPeripheral | string): LuaMultiReturn<[...string[]]>;
    function hasType(peripheral: IPeripheral | string, type: string): boolean | undefined;
    function getMethods(name: string): string[] | undefined;
    function getName(peripheral: IPeripheral): string;
    function call(side: string, method: string, ...args: any[]): LuaMultiReturn<[...any[]]>;
    function wrap(name: string): IPeripheral | undefined;
    function find(type: string, filter?: (name: string, peripheral: IPeripheral) => boolean): LuaMultiReturn<[...IPeripheral[]]>;
}