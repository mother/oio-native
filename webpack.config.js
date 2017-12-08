const webpack = require('webpack')
const path = require('path');

module.exports = {
   devtool: 'cheap-module-source-map',
   entry: './index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'umd'
   },
   externals: {
      react: 'react',
      'react-native': 'react-native'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         }
      ]
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin({
         compress: true,
         mangle: false,
         sourceMap: true
      })
   ]
}
