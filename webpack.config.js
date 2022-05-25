/**
 * core nodejs moduleの1つ。
 * デフォルトでnodejsが提供しているmodule
 */
const path = require("path");
/**
 * このpluginでcontenthashが書き込まれたhtmlファイルの出力が可能
 * https://github.com/jantimon/html-webpack-plugin#options
 */
const HtmlWebpackPulgin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");
const env = dotenv.config().parsed;

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  plugins: [
    new HtmlWebpackPulgin({
      title: "Lounge Jungle",
      template: path.resolve(__dirname, "src", "public", "index.html"),
    }),

    /**
     * コード上で以下のkeyに該当する箇所をvalueで上書き
     */
    new webpack.DefinePlugin({
      "process.env.EMAILJS_SERVICE_ID": JSON.stringify(env.EMAILJS_SERVICE_ID),
      "process.env.EMAILJS_TEMPLATE_ID": JSON.stringify(
        env.EMAILJS_TEMPLATE_ID
      ),
      "process.env.EMAILJS_PUBLIC_KEY": JSON.stringify(env.EMAILJS_PUBLIC_KEY),
    }),
  ],
  output: {
    /**
     * [contenthash]をつけることでbundle後のファイル名にフィンガープリントをつけることができる。
     * bundle後のファイル名が必ず同じファイル名だとコードの差分があってもcacheされたbundleファイルをクライアントが読み込んでしまう。
     * フィンガープリントがあることでコードの差分が出るとファイル名も変わるのでコードの差分がある場合はクライアント側でもcacheを破棄して新しいbundleファイルを読み込める。
     */
    filename: "bundle.[contenthash].js",
    /**
     * __dirnameはnodeの変数で絶対パスを返す。
     * path.resolveを活用するのはパスの区切りが/でない場合もあるため。
     * path.resolveを活用すればパスの区切りを環境によって使い分けて結合してくれる
     */
    path: path.resolve(__dirname, "dist"),

    /**
     * pathで指定したコンパイル後のファイルを全削除してからbundleファイルを配置
     */
    clean: true,

    // react-router-domに認識させるために必要
    publicPath: "/",
  },
  /**
   * bundleファイルのsource-mapをdevtoolで確認できる。
   */
  devtool: "inline-source-map",
  /**
   * https://webpack.js.org/guides/build-performance/#typescript-loader
   */
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  /**
   * tsファイルを直接bundleする際にimportの拡張子を補完する。
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },

  devServer: {
    historyApiFallback: true,
    client: {
      logging: "warn",
    },
  },
};
