const custom = require('../webpack.config');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "storybook-addon-outline",
    "storybook-addon-code-preview",
    "@storybook/addon-measure",
    "@storybook/addon-viewport",
  ],
  "core": {
    "builder": "webpack5",
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: { ...config.resolve.alias, ...custom.resolve.alias },
    },
  }),
}