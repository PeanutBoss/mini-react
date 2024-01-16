const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  devtool: 'cheap-source-map',
  mode: 'development'
}

