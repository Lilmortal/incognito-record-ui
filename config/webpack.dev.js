const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "..", "dist"),
    hot: true,
    port: 3000
  },
  // We can't use [chunkhash] in dev mode is because it is not compatible with webpack-dev-server, as well as severely increases build time in dev.
  // The differences between [hash] and [chunkhash] is [hash] is calculated for a build, whereas [chunkhash] is calculated for each chunks.
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  plugins: [
    // Vendor bundles should not change unless we update their versions. But because it's internal module.id change when there is a change, it is not properly cached.
    // NamedModulesPlugin uses the path of the module instead of module.id. It is useful in development as the output is more readable, but it takes longer to run.
    // Module.id is this: module.id === require.resolve("./file.js").
    new webpack.NamedModulesPlugin(),
    // Needed to enable HMR
    new webpack.HotModuleReplacementPlugin(),
    // This sets the global variables
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ]
});
