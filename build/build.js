
process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')

var webpackConfig = require('./webpack.config.build')
var pacelWebpackConfig = require('./webpack.config.pace')



//打包测试环境
function pacel(){
    var spinner = ora('开始打包无压缩包')
    spinner.start()
    webpack(pacelWebpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('无压缩包打包成功.\n')) 
    })
}



var spinner = ora('开始打包压缩包')
    spinner.start()
webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('压缩包打包成功.\n'))
    //开始打包无压缩包
    pacel();
})




