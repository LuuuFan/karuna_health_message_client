const path = require('path');
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

let plugins = [
]; // if using any plugins for both dev and production

const devPlugins = []; // if using any plugins for development

const prodPlugins = [
  new MinifyPlugin({}, {
    sourceMap: false,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'public', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: prodPlugins,
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'source-map'
};