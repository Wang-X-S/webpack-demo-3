var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
      },
    output:{
        filename:'index.[contenthash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
        title: '我的',
        filename: 'index.html',
        template: './index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
}