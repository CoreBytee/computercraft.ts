import { writeOn } from "@corebyte/cc-package-morefonts";

const monitor = peripheral.wrap("back") as MonitorPeripheral;
const station = peripheral.wrap("bottom") as TrainStationPeripheral;

const [width, height] = monitor.getSize();

function draw(frame: number) {
	monitor.setBackgroundColor(colors.white);
	monitor.setTextColor(colors.black);
	monitor.setCursorPos(1, 1);
	monitor.clear();

	writeOn(monitor, "1", null, null, {
		scale: 8,
		dx: 4,
		dy: 5,
		anchorHor: "center",
		anchorVer: "center",
	});

	if (station.isTrainPresent()) {
		const name = station.getTrainName();
		writeOn(monitor, name, null, height - 4, {
			scale: 1,
			anchorHor: "center",
			anchorVer: "top",
		});
	}
}

let frame = 0;
while (true) {
	draw(frame++);
	sleep(1);
}
