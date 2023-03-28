import { Memoizify, languages } from "./types";
export * from "monaco-editor";

function memoize<U extends Function, K extends U & Memoizify>(
	this: any,
	func: U,
	resolver?: Function
): K {
	const memoizify = (...args: any) => {
		const key = resolver ? resolver.apply(this, args) : args[0];
		const cache = memoizify.cache;
		if (cache.has(key)) return cache.get(key);
		const result = func.apply(this, args);
		memoizify.cache = cache.set(key, result) || cache;
		return result;
	};
	memoizify.cache = new Map();
	return memoizify as K;
}

async function getBlob(url: string) {
	const res = await fetch(url);
	const text = await res.text();
	return URL.createObjectURL(new Blob([text]));
}

const catchGetBlob = memoize(getBlob);

async function getWorkerURL(basePath: string, languages: languages = []) {
	return {
		jsonWorker: languages.includes("json")
			? await catchGetBlob(basePath + "/dist/worker/json.global.js")
			: "",
		cssWorker: languages.includes("css")
			? await catchGetBlob(basePath + "/dist/worker/css.global.js")
			: "",
		htmlWorker: languages.includes("html")
			? await catchGetBlob(basePath + "/dist/worker/html.global.js")
			: "",
		tsWorker: languages.includes("ts")
			? await catchGetBlob(basePath + "/dist/worker/ts.global.js")
			: "",
		editorWorker: await catchGetBlob(
			basePath + "/dist/worker/editor.global.js"
		),
	};
}

export const initWorkerUrl = async (
	basePath = "",
	languages: languages = []
) => {
	const { jsonWorker, cssWorker, htmlWorker, tsWorker, editorWorker } =
		await getWorkerURL(basePath, languages);

	if (typeof self !== "undefined") {
		self.MonacoEnvironment = {
			getWorkerUrl(_, label) {
				if (label === "json") return jsonWorker;
				if (label === "css" || label === "scss" || label === "less") {
					return cssWorker;
				}
				if (
					label === "html" ||
					label === "handlebars" ||
					label === "razor"
				) {
					return htmlWorker;
				}
				if (label === "typescript" || label === "javascript") {
					return tsWorker;
				}
				return editorWorker;
			},
		};
	}
};
