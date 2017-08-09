const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'cheap-module-source-map',
  entry: './index.js',
  output: {
    path: `${__dirname}/src/`,
    filename: 'test.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
            ['emotion/babel', { extractStatic: true }],
          ],
        },
      },
      {
        test: [/emotion\.css$/, /\.css$/],
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
};
