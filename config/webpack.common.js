const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// TODO: Read up more about polyfills
// TODO: Read up more about PWA, e.g. using WorkboxWebpackPlugin

module.exports = {
  entry: {
    app: path.resolve(__dirname, "..", "src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    // Get the template and create an index.html with the <script> tags that points to our bundle files injected.
    // This is useful because we don't want the hassle of changing the <script> location when we rename/add/remove
    // our bundle names.
    new HtmlWebpackPlugin({
      title: "Incognito Record",
      filename: "index.html",
      template: path.resolve(__dirname, "..", "template/index.html")
    }),
    // Sometimes our /dist folder might have unused files. This plugin deletes the folder before we start building
    // our bundles.
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "..") })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // This moves all our vendor files into a seperate bundle (e.g. lodash, react). This bundle rarely changes,
        // hence we should cache this more often.
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    alias: {
      // @import "~" means @import "src/styles/styles.scss"
      "~": path.resolve(__dirname, "../src/styles/styles.scss")
    }
  }
};
