/** @noSelfInFile **/

declare namespace help {
    function path(): string;
    function setPath(path: string): void;
    function lookup(topic: string): string | undefined;
    function topics(): string[];
    function completeTopic(prefix: string): string[];
}