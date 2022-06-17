const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        modules: false,
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-react",
  ],
};

let plugins = [
  "@emotion",
  // Removing prop types will also remove doc strings which are used to populate the description in a components ArgTable
  ["transform-react-remove-prop-types", { disable: true }],
  ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-modules-commonjs",
];

let presets = config.presets.map((preset) =>
  preset === "@babel/preset-react"
    ? ["@babel/preset-react", { runtime: "automatic" }]
    : preset
);

presets.push("@babel/preset-typescript");

if (process.env.NODE_ENV === "production") {
  plugins.push("react-remove-properties");
}

const overrides = [
  {
    plugins,
    presets,
  },
];

const modifiedConfig = {
  overrides,
};

module.exports = modifiedConfig;
