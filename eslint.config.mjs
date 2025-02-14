import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "standard",
      "plugin:tailwindcss/recommended",
      "prettier",
    ],
    rules: {
      "no-undef": "off",
    },
  },
];
