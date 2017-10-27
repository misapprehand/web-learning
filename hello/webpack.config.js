const path = require('path');

module.exports = {
  entry: {
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
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src']
  }
};
