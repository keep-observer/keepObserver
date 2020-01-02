


var webServerPromise = require('./webpack.test.env')
var networkServer = require('./network.service')


webServerPromise().then(function(server){
    networkServer()
    console.log('开发环境构建完成 地址:http://localhost:9927')
})
