const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /\.s?[ac]ss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"]
    }
  );

  return defaultConfig;
};
