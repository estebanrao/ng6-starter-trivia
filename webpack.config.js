var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules/],
        loader: 'ng-annotate!babel'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!resolve-url!sass?sourceMap')
        // TODO: Fix SASS multiple imports
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  externals: {
    'angular': 'angular',
    'ui.router': 'angular-ui-router',
    'notie': 'notie'
  },
  postcss: function () {
      return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  sassLoader: {
    outputStyle: 'expanded',
    sourceComments: true,
    includePaths: [ 'client/app/common' ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    new ExtractTextPlugin('styles.css'),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
