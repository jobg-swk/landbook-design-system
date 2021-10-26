const isCommonJS = process.env.BABEL_ENVL_ENV === "cjs";
const isESM = process.env.BABEL_ENV === "esm";

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: isCommonJS ? "commonjs" : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ];

  const plugins = ["@babel/transform-runtime"];

  return {
    presets,
    plugins,
  };
};
