process.env.NODE_ENV = 'production'

var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')


var separateWebpackConfig = require('./webpack.config.separate')

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
return separate()