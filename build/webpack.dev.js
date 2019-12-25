const merge = require('webpack-merge');
const baseConfig  = require('./webpack.base');
const resolve = require('./utils/resolve');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('public'),
  }
});
