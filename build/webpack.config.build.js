var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.config.base.js')
var merge = require('webpack-merge')


module.exports = merge(baseWebpackConfig, {
	entry:{
		'keepObserver.mini':[
			'./src/instance/index',
		],
	},
	 //输出文件
    output:{
        //文件命名
        filename:'[name].js',
        libraryTarget: 'umd',
        //输出目录
        path:path.resolve(__dirname,'../dist'),
    },
  	devtool: 'cheap-module-source-map',
  	plugins: [
  		//压缩
  		new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      },
	      sourceMap: true
	    }),
  	]
})


