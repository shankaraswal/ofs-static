const webpackConfig = require('../config/webpack.config')

module.exports = {
  "stories": [
    "../src/**/*.stories.jsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    const ourConfig = webpackConfig('development');
    return {
      ...config,
      module: {
        ...config.module,
        rules: ourConfig.module.rules,
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...ourConfig.resolve.alias,
        }
      }
    }
  },
}