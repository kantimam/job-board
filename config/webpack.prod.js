/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');
const CopyPlugin = require('copy-webpack-plugin');

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: 'mocks',
    },
    {
      from: '404.html'
    }
  ],
});

const config = {
  ...baseConfig,
  plugins: [...baseConfig.plugins, copyPlugin],
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 350000,
    maxAssetSize: 350000
  }
};

module.exports = config;
