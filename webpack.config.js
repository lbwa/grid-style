const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV === 'development'

function resolve (dir) {
  return join(__dirname, dir)
}

module.exports = {
  mode: process.env.NODE_ENV,
  
  target: 'web',

  context: resolve('./'),

  entry: resolve('src/index.js'),

  output: {
    filename: 'app.js',
    path: resolve('docs')
  },

  module: {
    rules: [
      {
        test: /.sass$/,
        include: [resolve('assets')],
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash:8].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash:8].css'
    })
  ]
}