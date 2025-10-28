/** @noSelfInFile **/

type RequestOptions = {
	url: string;
	body?: string;
	headers?: LuaMap<string, string>;
	binary?: boolean;
	method?: string;
	redirect?: boolean;
	timeout?: number;
};
type WebSocketOptions = {
	url: string;
	headers?: LuaMap<string, string>;
	timeout?: number;
};

/** @noSelf */
declare class HTTPResponse {
	public getResponseCode(): number;
	public getResponseHeaders(): LuaMap<string, string>;
	public read(count?: number): string | number | undefined;
	public readLine(withTrailing: boolean): string | undefined;
	public readAll(): string | undefined;
	public close(): void;
}

/** @noSelf */
declare class WebSocket {
	public receive(timeout?: number): string | undefined;
	public send(message: string, binary?: boolean): void;
	public close(): void;
}

/** @noSelf */
declare namespace http {
	function request(
		url: string,
		body?: string,
		headers?: LuaMap<string, string>,
		binary?: boolean,
	): void;
	function request(options: RequestOptions): void;
	function get(
		url: string,
		headers?: LuaMap<string, string>,
		binary?: boolean,
	): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
	function get(
		options: RequestOptions,
	): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
	function post(
		url: string,
		body?: string,
		headers?: LuaMap<string, string>,
		binary?: boolean,
	): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
	function post(
		options: RequestOptions,
	): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
	function checkURLAsync(url: string): void;
	function checkURL(url: string): boolean;
	function websocket(
		url: string,
		headers?: LuaMap<string, string>,
	): LuaMultiReturn<[WebSocket] | [false, string]>;
	function websocket(
		options: WebSocketOptions,
	): LuaMultiReturn<[WebSocket] | [false, string]>;
	function websocketAsync(url: string, headers?: LuaMap<string, string>): void;
	function websocketAsync(options: WebSocketOptions): void;
}
