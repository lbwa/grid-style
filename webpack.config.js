const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
          'style-loader',
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
    })
  ]
}