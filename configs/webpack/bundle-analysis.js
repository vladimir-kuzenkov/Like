const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const productionConfig = require('./prod');

module.exports = merge(productionConfig, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
