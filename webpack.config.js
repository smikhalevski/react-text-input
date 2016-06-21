var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: [
      './src/main/index.less',
      './src/main/index.js'
    ]
  },
  output: {
    path: './target/out',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
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
