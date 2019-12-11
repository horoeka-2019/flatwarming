const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    process.env.NODE_ENV === 'production'
      ? new Dotenv({ path: './.prod.env' })
      : new Dotenv()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
