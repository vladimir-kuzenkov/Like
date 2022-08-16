// development config
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = (env, argv) =>
  merge(commonConfig(env, argv), {
    mode: 'development',
    entry: [
      './index.tsx',
    ],
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
          ]
        },
      ]
    }
  });
