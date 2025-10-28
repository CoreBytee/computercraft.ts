/** @noSelfInFile **/

/** @customConstructor vector.new */
/** @noSelf */
declare class Vector {
	constructor(x: number, y: number, z: number);
	public x: number;
	public y: number;
	public z: number;
	public add(this: Vector, o: Vector): Vector;
	public sub(this: Vector, o: Vector): Vector;
	public mul(this: Vector, o: number): Vector;
	public div(this: Vector, o: number): Vector;
	public unm(this: Vector): Vector;
	public dot(this: Vector, o: Vector): number;
	public cross(this: Vector, o: Vector): Vector;
	public length(this: Vector): number;
	public normalize(this: Vector): Vector;
	public round(this: Vector, tolerance?: number): Vector;
	public tostring(this: Vector): string;
	public equals(this: Vector, o: Vector): boolean;
}
