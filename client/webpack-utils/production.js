const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
