let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    bundle: './app/index.js'
  },
  
  output: {
    path: __dirname + '/app/dist/',
    filename: '[name].js'
  },
  
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /.*\.(gif|png|svg|jpe?g)(\?.*)?$/i,
        loader: 'url-loader?limit=25000',
      },
      {
        test: /\.(ttf|eot|otf|woff(2)?)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'font/[hash].[ext]'
        }
      },
      {
        test: /[\/]angular\.js$/,
        loader: "exports-loader?angular"
      }
    ]
  },
  
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    })
  ]
};
