process.env.NODE_ENV = 'production'

var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')

var buildWebpackConfig = require('./webpack.config.build')
var buildMiniWebpackConfig = require('./webpack.config.build.mini')



function build() {
    var spinner = ora('开始打包无压缩包')
    spinner.start()
    var defer = new Promise(function(res, rej) {
        webpack(buildWebpackConfig, function(err, stats) {
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
            res()
        })
    })
    return defer
}


function buildMini() {
    var spinner = ora('开始打包压缩包')
    spinner.start()
    var defer = new Promise(function(res, rej) {
        webpack(buildMiniWebpackConfig, function(err, stats) {
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
            res()
        })
    })
    return defer
}




//启动
build().then(function() {
    return buildMini()
})


