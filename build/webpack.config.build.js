var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.config.base.js')
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var merge = require('webpack-merge')


module.exports = merge(baseWebpackConfig, {
    entry: {
        'keepObserver.all.mini': [
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
    devtool: 'cheap-module-source-map',
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        //压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
})