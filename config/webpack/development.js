const paths = require('../paths');

const config = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: paths.output,
    historyApiFallback: true
  }
};

module.exports = config;
