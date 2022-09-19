const { resolve } = require('path')
require('dotenv').config()
const { EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const tsconfigAlias = require('./tsconfig.alias.json')

module.exports = {
  entry: {
    worker: './service-worker/index.ts',
    app: {
      import: './src/index.tsx',
      dependOn: 'worker',
    },
  },
  plugins: [
    new EnvironmentPlugin(['PORT', 'SURVEY_API']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['.ts', '.tsx', '.js'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve(__dirname, 'src'), resolve(__dirname, 'service-worker')],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: resolve(__dirname, 'src/assets'),
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.js'],
    alias: Object.entries(tsconfigAlias.compilerOptions.paths).reduce((acc, entry) => {
      const [key, value] = entry
      acc[key.replace('/*', '')] = resolve(__dirname, value[0].replace('*', ''))
      return acc
    }, {}),
  },
}
