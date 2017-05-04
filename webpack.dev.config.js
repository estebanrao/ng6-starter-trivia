var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.plugins = config.plugins.concat([

  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('development'),
      'API_URL': JSON.stringify('http://localhost:3001/')
    }
  }),

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
