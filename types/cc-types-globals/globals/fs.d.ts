/** @noSelfInFile **/

declare class ReadFileHandle {
	public close(): void;
	public seek(whence?: "cur" | "set" | "end", offset?: number): number;
	public read(count?: number): string | number;
	public readLine(withTrailing?: boolean): string;
	public readAll(): string;
}

/** @noSelf */
declare class WriteFileHandle {
	public close(): void;
	public seek(whence?: "cur" | "set" | "end", offset?: number): number;
	public write(value: any): void;
	public writeLine(value: string): void;
	public flush(): void;
}

type FileAttributes = {
	size: number;
	isDir: boolean;
	isReadOnly: boolean;
	created: number;
	modified: number;
};

declare const fs: {
	list(this: void, path: string): string[];
	exists(this: void, path: string): boolean;
	isDir(this: void, path: string): boolean;
	isReadOnly(this: void, path: string): boolean;
	getName(this: void, path: string): string;
	getDrive(this: void, path: string): string;
	getSize(this: void, path: string): number;
	getFreeSpace(this: void, path: string): number;
	makeDir(this: void, path: string): void;
	move(this: void, from: string, to: string): void;
	copy(this: void, from: string, to: string): void;
	delete(this: void, path: string): void;
	combine(this: void, base: string, ...local: string[]): string;
	open(
		this: void,
		path: string,
		mode: "r" | "rb",
	): LuaMultiReturn<[ReadFileHandle] | [undefined, string]>;
	open(
		this: void,
		path: string,
		mode: "w" | "wb" | "a" | "ab",
	): LuaMultiReturn<[WriteFileHandle] | [undefined, string]>;
	open(
		this: void,
		path: string,
		mode: "r+" | "rb+" | "w+" | "wb+" | "a+" | "ab+",
	): LuaMultiReturn<[ReadFileHandle & WriteFileHandle] | [undefined, string]>;
	find(this: void, wildcard: string): string[];
	getDir(this: void, path: string): string;
	complete(
		this: void,
		partial: string,
		path: string,
		includeFiles?: boolean,
		includeSlashes?: boolean,
	): string[];
	complete(
		this: void,
		partial: string,
		path: string,
		options: {
			include_dirs?: boolean;
			include_files?: boolean;
			include_hidden?: boolean;
		},
	): string[];
	getCapacity(this: void, path: string): number;
	attributes(this: void, path: string): FileAttributes;
	isDriveRoot(this: void, path: string): boolean;
};
