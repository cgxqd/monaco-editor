import { defineConfig } from "tsup";

export default defineConfig(() => {
	return {
		globalName: "monaco",
		entry: ["index.ts"],
		format: ["esm", "iife"],
		splitting: true,
		dts: true,
		clean: true,
		treeshake: true,
		minify: true,
	};
});
