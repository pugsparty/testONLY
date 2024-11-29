const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    compress: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          stylesHandler,
          "style-loader", // 3. Инжектит стили в DOM
          "css-loader", // 2. Преобразует CSS в CommonJS
          "sass-loader", // 1. Компилирует SCSS в CSS
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".scss"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};

module.exports = config;
