"use strict"

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: "./app.js",
    lang: "./lang/lang.js", lang_cn: "./lang/cn.js", lang_en: "./lang/en.js",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },

  devtool: false,

  resolve: {
    // Files with the following extensions here can be "import"
    // without the extension.
    //
    // Needs ".json" and ".scss" for Grommet.
    extensions: [".wepack.js", ".web.js",
                 ".jsx", ".js",
                 ".json",
                 ".scss", ".css",
                 ".png", ".svg"],
    alias: {
      store: path.resolve(__dirname, "src/store"),
      styles: path.resolve(__dirname, "src/styles"),
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
      configs: path.resolve(__dirname, "src/configs"),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ],
      }, {
        // Run eslint. See .eslinrc for configuration.
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
      }, {
        // Markdown raw txt loader.
        test: /\.md$/,
        loader: "raw-loader",
      }, {
        test: /\.yml$/,
        exclude: /node_modules/,
        use: [
          { loader: "json-loader" },
          { loader: "yaml-loader" }
        ],
      }, {
        // Load the images. They goes through image-webpack-loader
        // first, and then file-loader.
        //
        // Now you can import images just like js.
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'assets/[hash:base64:55].[ext]',
            }
          }, {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              }
            }
          }
        ]
      }, {
        // This is to apply the following style loaders in (reverse) order.
        // Grommet scss files needs to be processed this way.
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          }, {
            loader: "css-loader",
          }, {
            loader: "resolve-url-loader",
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [
                "./node_modules",
              ]
            }
          }
        ],
      }, {
        test: /\.less$/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {sourceMap: 1}
        }, "less-loader"]
      }, {
        // For font-awesome (woff)
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/font-woff",
            }
          }
        ],
      }, {
        // For font-awesome (ttf)
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
      }, {
         test: /\.mp4/,
         use: {
           loader: 'url-loader',
           options: {
             limit: 10000,
             mimtetype: 'video/mp4',
           }
         }
       },
       {
         test: /\.html$/,
         use: 'html-loader?attrs[]=video:src'
       }
    ]
  },

  plugins: [
    // Show compilation progress bar.
    new ProgressBarPlugin(),

    // Generate the actual html from the hbs.
    new HtmlWebpackPlugin({
      template: "./index.hbs",
      // Include only the app. Do not include the service worker.
      chunks: [ "app" ]
    }),
    new FaviconsWebpackPlugin("./assets/favicon.png"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],

  // Disable the warning of large size bundle files.
  performance: {
    hints: false
  },
};
