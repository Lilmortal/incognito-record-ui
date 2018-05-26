const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
