const resolvedAliases = require("./aliases");
const path = require("path");

module.exports = {
  root: true,
  plugins: ["unused-imports"],
  extends: [
    require.resolve("../eslint-config"), // Local Package
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/components/**/*.stories.{js,jsx,ts,tsx}",
          "**/components/**/*.spec.{js,jsx,ts,tsx}",
          "**/testUtils/**/*.{js,ts}",
          "*.js",
          "**/webpack.config.js",
        ],
      },
    ],
    "no-unused-vars": "off", // covered by unused-imports
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "tsconfig.json"),
      },
      alias: {
        map: Object.entries(resolvedAliases(__dirname)),
      },
    },
    react: {
      pragma: "createElement",
    },
  },
  // Typescript configuration
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: path.resolve(__dirname, "tsconfig.json"),
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": "off", // covered by unused-imports
      },
    },
    {
      files: ["**/*.stories.*", "**/*.spec.*"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
