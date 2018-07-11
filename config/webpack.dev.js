const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    hot: true,
    port: 3000,
    // fall back to index.html if requested resource could not be found
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        // We cannot use MiniCssExtractPlugin.loader because as of now, it does not support HMR.
        // It will support it in the future but for now this is the fallback.
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
        ],
      },
    ],
  },
  // We can't use [chunkhash] in dev mode is because it is not compatible with webpack-dev-server,
  // as well as severely increases build time in dev.
  // The differences between [hash] and [chunkhash] is [hash] is calculated for a build, whereas
  // [chunkhash] is calculated for each chunks.
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    // Vendor bundles should not change unless we update their versions. But because it's internal module.id
    // change when there is a change, it is not properly cached.
    // NamedModulesPlugin uses the path of the module instead of module.id. It is useful in development as the
    // output is more readable, but it takes longer to run.
    // Module.id is this: module.id === require.resolve("./file.js").
    new webpack.NamedModulesPlugin(),
    // Needed to enable HMR
    new webpack.HotModuleReplacementPlugin(),
    // This sets the global variables
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    // Extract css files into a seperate bundle
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // Setup stylelint
    new StyleLintPlugin(),
  ],
});
