const { merge } = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// todo сделать мерджинг поля rules, т.к. merge - сливает поверхностную копию конфигов, а кэш из общего конфига вызывает ошибку при первой сборке после изменений
module.exports = (env, argv) =>
  merge(commonConfig(env, argv), {
    mode: 'production',
    entry: './index.tsx',
    output: {
      filename: 'js/bundle.[hash].min.js',
      path: resolve(__dirname, '../../dist'),
      publicPath: '/',
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 1,
              },
            },
          ]
        },
      ]
    }
  });
