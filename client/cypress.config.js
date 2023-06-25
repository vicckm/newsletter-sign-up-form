const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.config');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: webpackConfig,
    },
    specPattern: 'src/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      on('file:preprocessor', (file) => {
        webpackPreprocessor();
      });
    },
  },
});
