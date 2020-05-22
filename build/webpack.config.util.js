var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.config.base.js')
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var FileManagerPlugin = require('filemanager-webpack-plugin');
var merge = require('webpack-merge')



module.exports = merge(baseWebpackConfig, {
    mode: 'development',  //开发
    entry: {
        index: './src/util/index.ts',
    },
    //输出文件
    output: {
        //文件命名
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
        //输出目录
        path: path.resolve(__dirname, '../@util'),
    },
    devtool: false,
    plugins: [
        new ProgressBarPlugin(),
        new FileManagerPlugin({
            onEnd: [
                {
                    copy: [
                        { source: path.resolve(__dirname, '../src/util/package.json'), destination: path.resolve(__dirname, '../@util') }
                    ]
                }
            ]
        })
    ]
})