var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:'./src/index.js',
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
    ]
}