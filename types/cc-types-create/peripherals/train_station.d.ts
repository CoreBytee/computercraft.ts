/** @noSelfInFile **/

type TrainScheduleInstruction =
	| {
			id: "create:destination";
			data: {
				text: string;
			};
	  }
	| {
			id: "create:rename";
			data: {
				text: string;
			};
	  }
	| {
			id: "create:throttle";
			data: {
				value: number;
			};
	  };

type TrainScheduleEntry = {
	instruction: TrainScheduleInstruction;
};

type TrainSchedule = {
	cyclic: boolean;
	entries: TrainScheduleEntry[];
};

declare class TrainStationPeripheral implements IPeripheral {
	assemble(): void;
	disassemble(): void;
	setAssemblyMode(assemblyMode: boolean): boolean;
	isInAssemblyMode(): boolean;
	getStationName(): string;
	setStationName(name: string): void;
	isTrainPresent(): boolean;
	isTrainImminent(): boolean;
	isTrainEnroute(): boolean;
	getTrainName(): string;
	setTrainName(name: string): void;
	hasSchedule(): boolean;
	getSchedule(): TrainSchedule;
	setSchedule(schedule: TrainSchedule): void;
	canTrainReach(destination: string): boolean;
	distanceTo(destination: string): void;
}
