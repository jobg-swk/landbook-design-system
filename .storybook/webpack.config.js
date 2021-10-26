module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          propFilter(prop) {
            if (prop.parent) {
              return !prop.parent.fileName.includes("@types/react");
            }

            return true;
          },
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
