const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const { dependencies } = require("../package.json");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../", "index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Remote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": path.resolve(__dirname, "../components/app/app"),
        "./Button": path.resolve(__dirname, "../components/button/button"),
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
  devServer: {
    port: 4000,
  },
};
