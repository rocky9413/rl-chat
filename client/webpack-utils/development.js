const webpack = require('webpack');
// const path = require('path');

module.exports = () => ({
  devServer: {
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 8080,
    proxy: {
      context: () => true,
      '/api/**': { target: 'http://localhost:3000' },
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
