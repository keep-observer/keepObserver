var path = require('path')


module.exports = {
    //监控文件
    module:{
        rules:[
            {
              test: /\.ts$/,
              use:['babel-loader','ts-loader'],
              exclude:/node_modules/
            },
            {
                test: /\.js$/,
                use:['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['to-string-loader', 'css-loader','sass-loader'],
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js'],
    }
}
