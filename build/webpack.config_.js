const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "none",
  entry: { lzq19515: "./src/lzq19515.js", "lzq19515.min": "./src/lzq19515.js" },
  output: {
    path: path.resolve(__dirname, "../dist"),
    // filename: "lzq19515.js",
    filename: "[name].js",
    globalObject: "this",
    libraryExport: "default",
    library: "LZQ",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./styles/lzq19515.css"),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyjsWebpackPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};
