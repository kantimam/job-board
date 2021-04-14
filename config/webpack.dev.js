/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');



const config = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    writeToDisk: (filePath) => {
      return /\.json$/.test(filePath);
    },
  },
  
};

module.exports = config;
