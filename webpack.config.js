var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        }),
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              
            //use: ['style-loader', 'css-loader'],//不单独抽出css，把读到css内容转为js字符串,再讲字符串翻译为style标签内容放入html中
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
}