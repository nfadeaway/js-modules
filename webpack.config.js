const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCSSExtractPlugin()
  ],
  devServer: {
    static: './dist',
  }
};
