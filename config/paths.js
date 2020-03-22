const path = require('path');

const config = {
  entry: './src/index.js',
  output: path.resolve(__dirname, '..', 'dist'),
  template: './src/index.html',
  favicon: './src/static/icons/favicon.ico'
};

module.exports = config;
