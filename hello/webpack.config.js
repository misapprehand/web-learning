const path = require('path');

module.exports = {
  entry: {
    './src/js_basic/hello': './src/js_basic/hello.js',
    './src/calc/calc': './src/calc/calc.js',
    './index': './src/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name]_bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
};
