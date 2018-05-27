const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  // We use [chunkhash] here so that each bundle have a different chunk number.
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  plugins: [
    // Some libraries like React use process.env.NODE_ENV internally, it's best to put this here.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // To make sure vendor cache does not change, this plugin will hash the relative path of the module instead of using module.id.
    new webpack.HashedModuleIdsPlugin()
  ]
});
