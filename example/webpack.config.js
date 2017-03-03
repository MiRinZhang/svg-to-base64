const path = require('path'),
 webpack = require('webpack'),
 HtmlWebpackPlugin = require('html-webpack-plugin'),
 HOST = "0.0.0.0",
 PORT = 3000;

module.exports = {
  devServer: {
      compress: true,
      inline: true,
      hot: true,
      historyApiFallback: true,
      port: PORT,
      host: HOST,
      open: true,
  },
  entry: "./src/main",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash:5].chunk.js",
  },
  resolve: {
    extensions: ['','.js', '.jsx', '.svg', '.svgx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.(svg|svgx)$/,
        exclude: /node_modules/,
        loader: 'svg2base64'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
