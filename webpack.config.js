const webpack = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname + '/bin',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass'],
        // loader: ExtractTextPlugin.extract('style', ['css','sass'])
      },
      {
        test: /\.md$/,
        loader: "raw"
      },
    ]
  },
  devtool: 'source-map',
  // plugins: [
  //   new ExtractTextPlugin('../assets/styles/[name].css'),
  //   new webpack.ProvidePlugin({
  //      $: "jquery",
  //      jQuery: "jquery"
  //  })
  // ]
};
