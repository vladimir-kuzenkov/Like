const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const DEFAULT_API_URL = 'https://websites-test.platform.taximaster.ru';

module.exports = (env) => {
  const API_URL = env && env.apiUrl ? env.apiUrl : DEFAULT_API_URL;

  return {
    node: {
      global: false,
    },
    resolve: {
      extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
      alias: {
        '@ant-design/icons/lib/dist$': resolve(__dirname, '../../src/components/antd-icons/antd-icons.tsx'),
      },
    },
    context: resolve(__dirname, '../../src'),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                plugins: [ 'babel-plugin-styled-components' ],
              },
            },
            'source-map-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                plugins: [ 'babel-plugin-styled-components' ],
              },
            },
            'ts-loader',
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html.ejs' }),
      new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify(API_URL) }),
    ],
    externals: {},
    performance: {
      hints: false,
    },

  };
};
