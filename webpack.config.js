const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'output.js',
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};