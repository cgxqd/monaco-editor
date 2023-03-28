export * from 'monaco-editor';

type languages = ("ts" | "css" | "html" | "json")[];

declare const initWorkerUrl: (basePath?: string, languages?: languages) => Promise<void>;

export { initWorkerUrl };
