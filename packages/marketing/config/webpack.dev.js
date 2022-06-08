const { merge } = require('webpack-merge')
const HtmlebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFeredationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFeredationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig)