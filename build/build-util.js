process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')


var utilSeparateWebpackConfig = require('./webpack.config.util')

var spinner = ora('开始打包公共依赖')
spinner.start()
return new Promise(function(res, rej) {
    webpack(utilSeparateWebpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('公共依赖打包成功.\n'))
        res()
    })
})


