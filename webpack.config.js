const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "assets/[name].[contenthash].js" : "assets/[name].js",
      publicPath: "/",
      clean: true
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      })
    ],
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, "public")
      }
    }
  };
};

