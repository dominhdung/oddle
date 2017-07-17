// postcss config
const webpack = require('webpack');
const postCSSConfig = require('./postcss.config');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../client/assets');
const SRC_DIR = path.resolve(__dirname, '../client/src');
const SHARED_DIR = path.resolve(__dirname, '../shared');

const config = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: [SRC_DIR, SHARED_DIR],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
        watch: true,
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
        watch: true,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss',
        ],
        watch: true,
      },
      {
        test: /\.(png|jpg)$/, loader: 'url?limit=8192',
      },
    ],
  },
  postcss: () => postCSSConfig,
  devtool: 'source-map',
  debug: true,
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

module.exports = config;
