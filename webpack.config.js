const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'file-loader?name=[name].css',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app', 'index.html'),
    filename: 'index.html',
    inject: 'body',
  })],
};
