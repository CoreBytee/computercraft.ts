/** @noSelfInFile **/

type Color = number;

/** @noSelf */
declare namespace colors {
	var white: Color;
	var orange: Color;
	var magenta: Color;
	var lightBlue: Color;
	var yellow: Color;
	var lime: Color;
	var pink: Color;
	var gray: Color;
	var lightGray: Color;
	var cyan: Color;
	var purple: Color;
	var blue: Color;
	var brown: Color;
	var green: Color;
	var red: Color;
	var black: Color;

	/**
	 * Combines a set of colors (or sets of colors) into a larger set. Useful for Bundled Cables.
	 * @param colors The colors to combine
	 * @returns The combined colors
	 */
	function combine(...colors: Color[]): Color;

	/**
	 * Removes one or more colors (or sets of colors) from an initial set. Useful for Bundled Cables.
	 * Each parameter beyond the first may be a single color or may be a set of colors (in the latter case, all colors in the set are removed from the original set).
	 * @param colors The colors to remove from the first color
	 * @returns The resulting colors
	 */
	function subtract(...colors: Color[]): Color;

	/**
	 * Tests whether color is contained within colors. Useful for Bundled Cables.
	 * @param colors A color, or color set
	 * @param color A color or set of colors that colors should contain
	 * @returns Whether colors contains color
	 */
	function test(colors: Color, color: Color): boolean;

	/**
	 * Combine a three-colour RGB value into one hexadecimal representation.
	 * @param r The red channel, should be between 0 and 1.
	 * @param g The green channel, should be between 0 and 1.
	 * @param b The blue channel, should be between 0 and 1.
	 * @returns The combined hexadecimal colour.
	 */
	function packRGB(r: number, g: number, b: number): number;

	/**
	 * Separate a hexadecimal RGB colour into its three constituent channels.
	 * @param rgb The combined hexadecimal colour.
	 * @returns The red, green and blue channels, each between 0 and 1.
	 */
	function unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;

	/**
	 * Converts the given color to a paint/blit hex character (0-9a-f).
	 * This is equivalent to converting floor(log_2(color)) to hexadecimal. Values outside the range of a valid colour will error.
	 * @param color
	 * @returns The blit hex code of the color.
	 */
	function toBlit(color: Color): string;

	/**
	 * Converts the given paint/blit hex character (0-9a-f) to a color.
	 * This is equivalent to converting the hex character to a number and then 2 ^ decimal
	 * @param hex The paint/blit hex character to convert
	 * @returns The color
	 */
	function fromBlit(hex: string): Color | undefined;
}
