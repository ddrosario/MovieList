const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        options: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
