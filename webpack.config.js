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
    path: resolve('dist')
  },

  module: {
    rules: [
      {
        test: /.sass$/,
        include: [resolve('layout'), resolve('assets')],
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

  devtool: devMode ? 'cheap-module-eval-source-map' : '',

  devServer: {
    host: '0.0.0.0',

    port: '8080',

    overlay: {
      warning: false,
      errors: true
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css'
    })
  ]
}
