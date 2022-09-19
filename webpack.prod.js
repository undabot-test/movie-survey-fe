const { resolve } = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash:8].js',
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
})
