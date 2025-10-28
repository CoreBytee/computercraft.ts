/** @noSelfInFile **/

declare namespace disk {
	function isPresent(name: string): boolean;
	function getLabel(name: string): string | undefined;
	function setLabel(name: string, label?: string | undefined): void;
	function hasData(name: string): boolean;
	function getMountPath(name: string): string | undefined;
	function hasAudio(name: string): boolean;
	function getAudioTitle(name: string): string | undefined;
	function playAudio(name: string): void;
	function stopAudio(name: string): void;
	function eject(name: string): void;
	function getID(name: string): number;
}
