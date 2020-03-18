var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var ROOT = process.cwd();
const path = require('path');

var dev_WebpackConfig = require('./webpack.config')



var webServerPromise = function(){
    return new Promise((res,rej)=>{
        var compiler = webpack(dev_WebpackConfig, function() {
            console.log('测试环境构建完成\n')
            setTimeout(function() {
                res(server)
            })
        })
        var server = new webpackDevServer(compiler, {
            contentBase: 
            [
                path.join(ROOT, './'),
            ],
            disableHostCheck: true,
            hot: true,
            host: '0.0.0.0',
        })
        server.listen(9927, 'localhost', function() {
            console.log('正在构建测试环境中,测试地址:http://localhost:9927\n');
        });
    })
}




module.exports = webServerPromise
module.exports.default = module.exports 