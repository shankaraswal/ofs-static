/* eslint-disable */
const path = require('path')

const resolve = require('./webpack.config.resolve')

module.exports = {
  entry: ['../src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [],
  resolve,
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /\.global\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.global\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: true,
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /\.global\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('resolve-url-loader'),
          },
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          }
        ],
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      {
        test: /\.global\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('resolve-url-loader'),
          },
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 2,
              modules: false,
            },
          }
        ],
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      {
        test: /\.(jpe?g|png|ico|gif|otf)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]_[hash]',
            },
          },
        ],
      },
    ],
  },
}
