var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.config.base.js')
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var merge = require('webpack-merge')


module.exports = merge(baseWebpackConfig, {
    entry: {
        'keepObserver.all': [
            './src/instance/index.all',
        ],
    },
    //输出文件
    output: {
        //文件命名
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        //输出目录
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: false,
    plugins: [
        new ProgressBarPlugin(),
    ]
})