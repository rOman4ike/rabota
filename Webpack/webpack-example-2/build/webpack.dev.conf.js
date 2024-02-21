const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8081,
    // Пока не сохраняет файлы в dist (никак)
    static: {
      directory: baseWebpackConfig.externals.paths.dist,
    },
    devMiddleware: {
      writeToDisk: true
    },
    // Нету такого в webpack5
    // warnings: false,
    // errors: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
