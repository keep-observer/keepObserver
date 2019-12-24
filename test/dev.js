


var webServerPromise = require('./webpack.test.env')



webServerPromise().then(function(server){
    console.log('开发环境构建完成 地址:http://localhost:9927')
})
