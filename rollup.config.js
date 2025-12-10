import nodeResolve from "@rollup/plugin-node-resolve";

// rollup.config.mjs
export default {
  input: "src/worldApp-external/main.js",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};
