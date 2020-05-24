const path = require('path')
module.exports = {
  entry: {
    main: './#src/js/main.js'
  },

 output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './js'),
    publicPath: '/js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  devServer: {
    overlay: true
  },
}