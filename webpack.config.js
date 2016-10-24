var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = function makeWebpackConfig() {
  var config = {};

  config.devtool = 'eval';

  config.entry = './src/index';

  config.output = {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  };

  config.resolve = {
    extensions: ['', '.js', '.jsx', '.css']
  };

  config.module = {
    loaders: [
      // Support for .jsx files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },

      // support for .scss files
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },

      // Support for .css files
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },

      // copy those assets to output
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=fonts/[name].[hash].[ext]?'
      }
    ]
  };

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version', '> 1%', 'IE > 8']
    })
  ];

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    port: 8080,
    stats: 'minimal'
  };

  return config;
}();
