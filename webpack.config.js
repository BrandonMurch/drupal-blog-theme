const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var path = require("path");

// change these variables to fit your project
const jsPath = "./js";
const cssPath = "./sass";
const outputPath = "dist";
const localDomain = "localhost";
const entryPoints = {
  // 'app' is the output name, people commonly use 'bundle'
  // you can have more than 1 entry point
  app: jsPath + "/custom.js",
  style: cssPath + "/style.sass"
};

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),

    // Uncomment this if you want to use CSS Live reload
    new BrowserSyncPlugin(
      {
        proxy: localDomain,
        files: [outputPath + "/*.css"],
        injectCss: true
      },
      { reload: false }
    )
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: { indentedSyntax: true }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|ttf|eot|svg)$/i,
        type: "asset/inline"
      }
    ]
  }
};