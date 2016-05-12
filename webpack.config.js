var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: [
      './src/main/index.js',
      './src/main/index.less'
    ]
  },
  output: {
    path: './target/out',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  externals: [
    {
      'react': true,
      'react-dom': true
    }
  ],
  resolve: {
    root: [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less?strictUnits=true&strictMath=true')}
    ]
  }
};
