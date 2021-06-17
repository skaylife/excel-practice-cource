const { node } = require("webpack");
const path = require('path');

node.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: '.index.js',
  output: {
    filename: 'bundele.js',
    path: path.resolve(__dirname, 'dist')
  }
}