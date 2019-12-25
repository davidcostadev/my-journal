const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./utils/resolve');
// const cssLoader = require('./rules/cssLoader');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  chunksSortMode: 'dependency'
});

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      // cssLoader
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'source-map'
};
