import { defineConfig } from "tsup";

export default defineConfig(() => {
	return {
		format: ["iife"],
		entry: {
			"worker/ts":
				"node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js",
			"worker/json":
				"node_modules/monaco-editor/esm/vs/language/json/json.worker.js",
			"worker/html":
				"node_modules/monaco-editor/esm/vs/language/html/html.worker.js",
			"worker/css":
				"node_modules/monaco-editor/esm/vs/language/css/css.worker.js",
			"worker/editor":
				"node_modules/monaco-editor/esm/vs/editor/editor.worker.js",
		},
		splitting: false,
		dts: false,
		clean: false,
		treeshake: true,
		minify: true,
	};
});
