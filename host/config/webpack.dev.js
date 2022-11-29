const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("../package.json");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../", "index.js"),
  output: {
    filename: "[name].bundle.[hash].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "Host",
      remotes: {
        Remote: `Remote@http://localhost:4000/moduleEntry.js`,
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
};
