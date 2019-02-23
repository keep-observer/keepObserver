var path = require('path')


module.exports = {
    //监控文件
    module:{
        loaders:[{
            //监听js
            test: /\.js$/,
            include:[path.resolve(__dirname,'../src')],
            loaders:['babel-loader'],
        },{
            test: /\.(scss|css)$/,
            use: ['to-string-loader', 'css-loader','sass-loader'],
        }],
    },
    resolve:{
        extensions:['.js'],
    }
}


