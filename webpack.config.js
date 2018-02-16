const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './client/index.js',

  output : {
    filename: 'app.js',
    path    : path.join(__dirname, '/client')
  },
  resolve: {

    // aliasを追加
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },

  module : {
    rules: [
      {
        test   : /\.vue$/,
        loader : 'vue-loader',
        options: {}
      },
    ]
  },
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    }),
    new webpack.ProvidePlugin({
      $     : 'jquery',
      jQuery: 'jquery'
    })
  ]
};
