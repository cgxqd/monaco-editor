import { defineConfig } from "tsup";

export default defineConfig(() => {
  return {
    globalName: "monaco",
    entry: ["index.ts"],
    splitting: true,
    format: ["cjs", "esm", "iife"],
    // target: "es5",
    dts: true,
    clean: true,
    treeshake: true,
    minify: true
  };
});
