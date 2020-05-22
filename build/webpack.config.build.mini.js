var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.config.base.js')
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var merge = require('webpack-merge')


module.exports = merge(baseWebpackConfig, {
    entry: {
        'keepObserver.mini': [
            './src/index.mini.ts',
        ],
    },
    //输出文件
    output: {
        //文件命名
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
        //输出目录
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'cheap-module-source-map',
     //压缩
    optimization: {
        minimize: true
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new BundleAnalyzerPlugin()
    ]
})