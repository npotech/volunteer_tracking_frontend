var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

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
        inject:true,
        template:'src/index.html',
        filename: './index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: __dirname + '/dist',
      compress: true,
      port: 9000
    }
  };
