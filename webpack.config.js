const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV === 'development'
const releaseMode = process.env.NODE_ENV === 'release'

function resolve (dir) {
  return join(__dirname, dir)
}

module.exports = {
  mode: process.env.NODE_ENV === 'release' ? 'production' : process.env.NODE_ENV,

  target: 'web',

  context: resolve('./'),

  entry: resolve('src/index.js'),

  output: {
    filename: 'app.js',
    path: releaseMode ? resolve('dist') : resolve('docs')
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
      filename: releaseMode ? 'grid-style.css' : '[name].[contenthash:8].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash:8].css'
    })
  ]
}
