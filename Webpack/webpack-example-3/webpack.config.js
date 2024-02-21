const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const Dotenv = require('dotenv-webpack')
const TerserPlugin = require("terser-webpack-plugin");


const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = (env) => {
  // const mode = (env.production ? 'production' : 'development')

  return {
    mode: 'production',
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
      main: `./main.js`,
    },
    output: {
      filename: '[name].[id].[chunkhash:8].js',
      path: path.resolve(__dirname, './dist'),
      clean: true
    },
    devServer: {
      hot: true
    },
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              unused: true,
              dead_code: true,
            },
          },
        })
      ]
    },
    // resolve: {
      // fallback: {
        // 'jsdom': false,
      // }
    // },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Yep, its working',
        template: path.resolve(__dirname, './src/html/index.html'),
        inject: 'body',
        filename: 'index.html',
        // filename: 'index.[contenthash:8].html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        }
      }),
      // new Dotenv({
      //   path: `./.env.${mode}`,
      //   // prefix: mode
      // }),
      // new webpack.ProvidePlugin({
        // $: 'jquery',
      // }),
      // new webpack.AutomaticPrefetchPlugin()
      new WebpackManifestPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
}
