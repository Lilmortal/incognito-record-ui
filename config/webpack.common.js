const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// TODO: Read up more about polyfills
// TODO: Read up more about PWA, e.g. using WorkboxWebpackPlugin

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(__dirname, "..", "src/index.js")]
  },
  module: {
    rules: [
      {
        test: /\.inline.svg$/,
        use: ["svg-react-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              publicPath: "/"
            }
          }
        ]
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
      hash: true,
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
  }
};
