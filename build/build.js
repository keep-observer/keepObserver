process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')

// var webpackConfig = require('./webpack.config.build')
// var pacelWebpackConfig = require('./webpack.config.pace')
var separateWebpackConfig = require('./webpack.config.separate')


// function pacel() {
//     var spinner = ora('开始打包无压缩包')
//     spinner.start()
//     var defer = new Promise(function(res, rej) {
//         webpack(pacelWebpackConfig, function(err, stats) {
//             spinner.stop()
//             if (err) throw err
//             process.stdout.write(stats.toString({
//                 colors: true,
//                 modules: false,
//                 children: false,
//                 chunks: false,
//                 chunkModules: false
//             }) + '\n\n')
//             console.log(chalk.cyan('无压缩包打包成功.\n'))
//             res()
//         })
//     })
//     return defer
// }


// function build() {
//     var spinner = ora('开始打包压缩包')
//     spinner.start()
//     var defer = new Promise(function(res, rej) {
//         webpack(webpackConfig, function(err, stats) {
//             spinner.stop()
//             if (err) throw err
//             process.stdout.write(stats.toString({
//                 colors: true,
//                 modules: false,
//                 children: false,
//                 chunks: false,
//                 chunkModules: false
//             }) + '\n\n')
//             console.log(chalk.cyan('压缩包打包成功.\n'))
//             res()
//         })
//     })
//     return defer
// }


function separate() {
    var spinner = ora('开始打包分离包')
    spinner.start()
    var defer = new Promise(function(res, rej) {
        webpack(separateWebpackConfig, function(err, stats) {
            spinner.stop()
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            console.log(chalk.cyan('分离包打包成功.\n'))
            res()
        })
    })
    return defer
}

//启动
// build().then(function() {
//     return pacel()
// }).then(function() {
//     return separate()
// })


separate()