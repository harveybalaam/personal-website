import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "warn",
    perf: "warn",
    style: "warn",
    suspicious: "warn",
  },
  rules: {
    "eslint/capitalized-comments": "off",
    "eslint/no-magic-numbers": "off",
    "eslint/no-unused-vars": "error",
    "eslint/one-var": "off",
    "unicorn/filename-case": "off",
  },
});
