const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: __dirname + "/index.js", 
  output: {
    path: __dirname + "/docs",
    filename: "[name].[hash].js"
  },
  // resolve: {
  //   alias: {
  //     "@": resolve("./src/*")
  //   }
  // },
  devtool: "inline-source-map", //'source-map',
  devServer: {
    contentBase: "./docs", 
    historyApiFallback: true, //不跳转
    inline: true,
    port: 9010,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // use: ExtractTextPlugin.extract({
        //     fallback: "style-loader",
        //     use: ["css-loader"]
        // })
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
        // use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     //resolve-url-loader may be chained before sass-loader if necessary
        //     use: ['css-loader', 'sass-loader']
        // })
      },
      {
        // test: /\.(dae|obj|glb|gltf)$/,
        // loader: 'raw'
      },
      {
        test: /\.(gif|png|jpe?g|svg|tif|glb)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
              // outputPath: 'assets/'
            }
          }
        ]
      }, // 下面几行才是 html-loader 的配置内容
      {
        test: /\.(eot|woff2?|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: "fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
      //   {
      //     test: /\.tsx?$/,
      //     use: "ts-loader",
      //     exclude: /node_modules/
      //   }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      //   new TsconfigPathsPlugin({
      //     /* options: see below */
      //   })
    ]
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: __dirname + "/assets", //打包的静态资源目录地址
        to: "./assets" //打包到docs下面的public
      }
    ]),
    // new TsconfigPathsPlugin({/* options: see below */ }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "DUI",
      template: "./index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    // new HtmlWebpackPlugin({
    //     template: __dirname + "/index.html" //new 一个这个插件的实例，并传入相关的参数
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.minimize(),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: true
    }),
    // 这两行是新增的
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
