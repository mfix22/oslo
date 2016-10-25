var webpack = require('webpack');
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/bin',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
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
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.pug$/,
        loader: "pug"
      },
      {
        test: /\.md$/,
        loader: "raw"
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
  ]
};
