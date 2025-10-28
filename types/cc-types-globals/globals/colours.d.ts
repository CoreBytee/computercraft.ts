/** @noSelfInFile **/

type Colour = number;

/** @noSelf */
declare namespace colours {
	var white: Colour;
	var orange: Colour;
	var magenta: Colour;
	var lightBlue: Colour;
	var yellow: Colour;
	var lime: Colour;
	var pink: Colour;
	var gray: Colour;
	var lightGray: Colour;
	var cyan: Colour;
	var purple: Colour;
	var blue: Colour;
	var brown: Colour;
	var green: Colour;
	var red: Colour;
	var black: Colour;

	/**
	 * Combines a set of colours (or sets of colours) into a larger set. Useful for Bundled Cables.
	 * @param colours The colours to combine
	 * @returns The combined colours
	 */
	function combine(...colours: Colour[]): Colour;

	/**
	 * Removes one or more colours (or sets of colours) from an initial set. Useful for Bundled Cables.
	 * Each parameter beyond the first may be a single colour or may be a set of colours (in the latter case, all colours in the set are removed from the original set).
	 * @param colours The colours to remove from the first colour
	 * @returns The resulting colours
	 */
	function subtract(...colours: Colour[]): Colour;

	/**
	 * Tests whether colour is contained within colours. Useful for Bundled Cables.
	 * @param colours A colour, or colour set
	 * @param colour A colour or set of colours that colours should contain
	 * @returns Whether colours contains colour
	 */
	function test(colours: Colour, colour: Colour): boolean;

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
	 * Converts the given colour to a paint/blit hex character (0-9a-f).
	 * This is equivalent to converting floor(log_2(colour)) to hexadecimal. Values outside the range of a valid colour will error.
	 * @param colour
	 * @returns The blit hex code of the colour.
	 */
	function toBlit(colour: Colour): string;

	/**
	 * Converts the given paint/blit hex character (0-9a-f) to a colour.
	 * This is equivalent to converting the hex character to a number and then 2 ^ decimal
	 * @param hex The paint/blit hex character to convert
	 * @returns The colour
	 */
	function fromBlit(hex: string): Colour | undefined;
}
