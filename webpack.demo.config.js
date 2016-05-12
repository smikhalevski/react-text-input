var path = require('path'),
    webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/demo/index.js'
  },
  output: {
    path: './target/demo',
    filename: '[name].js'
  },
  resolve: {
    root: [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/demo/index.html',
      minify: {collapseWhitespace: true}
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.json$/, loader: 'hson'},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less?strictUnits=true&strictMath=true')},
      {test: /\.(png|jpg)$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  }
};
