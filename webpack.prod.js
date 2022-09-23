const { resolve } = require('path')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          filter: (resourcePath) => {
            if (/.html$/.test(resourcePath)) {
              return false
            }
            return true
          },
        },
      ],
    }),
  ],
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
})
