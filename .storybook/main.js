module.exports = {
  stories: ["../components/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-docs"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
