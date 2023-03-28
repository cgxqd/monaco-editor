export interface Memoizify {
	(...args: any[]): any;
	cache: Map<any, any>;
}

export type languages = ("ts" | "css" | "html" | "json")[];
