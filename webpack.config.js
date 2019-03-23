var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title:'Volunteer Checkin',
        template:'./src/index.html',
        filename: './index.html' 
      })
    ]
  };