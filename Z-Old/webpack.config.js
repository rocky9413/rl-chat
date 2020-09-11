const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./webpack-utils/${env}`)(env);
const addPresets = require('./webpack-utils/addPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  const js = {
    test: /\.jsx?/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  };

  const ts = {
    test: /\.ts$/,
    use: 'ts-loader'
  };

  const file = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return webpackMerge(
    {
      mode,
      target: 'web',
      entry: {
        main: path.resolve(__dirname, './src/index.js')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      resolve: {
        extensions: ['.js', '.jsx', '.css']
      },
      module: {
        rules: [js, ts, file]
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          filename: 'index.html',
          favicon: path.resolve(__dirname, './images/R.ico')
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    addPresets({ mode, presets })
  );
};
