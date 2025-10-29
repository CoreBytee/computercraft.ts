import { join } from "node:path";
import { Glob } from "bun";
import { readJSONSync, writeJsonSync } from "fs-extra";

function scan(pattern: string, directory: string) {
	const glob = new Glob(pattern);
	return Array.from(glob.scanSync(directory));
}

const packages = scan("!node_modules/**/package.json", ".").filter((path) => {
	const json = readJSONSync(path);
	return !json.private;
});

const basePackage = readJSONSync("package.json");

alert(
	`This action will publish the folling packages to npm:\n- ${packages.join("\n- ")}\n\nDo you want to continue?`,
);

for (const path of packages) {
	const root = join(path, "..");
	console.log("Publishing", root);

	// Update version
	const json = readJSONSync(path);
	json.version = basePackage.version;
	writeJsonSync(path, json, { spaces: 4 });

	// Publish
	Bun.spawnSync({
		cmd: ["bun", "publish", "--access", "public"],
		cwd: root,
	});
}

console.log("Publishing finished!");
