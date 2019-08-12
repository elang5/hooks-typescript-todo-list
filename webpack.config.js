const path = require('path')
const rules = [
  {
    // any file ending in .tsx except in node-modules folder use the babel-loader 
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    // Once code is production ready, we build it into build folder
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: { rules },
  // So we don't have to write .ts or .js on import! 
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 5000
  }
}