export * from "monaco-editor";

export const initWorkerUrl = (basePath = "") => {
	if (typeof self !== "undefined") {
		self.MonacoEnvironment = {
			getWorkerUrl(_, label) {
				if (label === "json") {
					return basePath + "/dist/worker/json.global.js";
				}
				if (label === "css" || label === "scss" || label === "less") {
					return basePath + "/dist/worker/css.global.js";
				}
				if (
					label === "html" ||
					label === "handlebars" ||
					label === "razor"
				) {
					return basePath + "/dist/worker/html.global.js";
				}
				if (label === "typescript" || label === "javascript") {
					return basePath + "/dist/worker/ts.global.js";
				}
				return basePath + "/dist/worker/editor.global.js";
			},
		};
	}
};
