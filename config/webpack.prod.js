const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  // We use [chunkhash] here so that each bundle have a different chunk number.
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    // Some libraries like React use process.env.NODE_ENV internally, it's best to put this here.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // To make sure vendor cache does not change, this plugin will hash the relative path of the module
    // instead of using module.id.
    new webpack.HashedModuleIdsPlugin(),
    // Extract css files into a seperate bundle
    new MiniCssExtractPlugin({
      filename: "[name].[hash].bundle.css",
      chunkFilename: "[id].[hash].bundle.css"
    })
  ],
  optimization: {
    minimizer: [
      // Currently webpack v4 does not have CSS minimizer built in, so this plugin will do.
      // It can be removed when webpack v5 is out.
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }
});
