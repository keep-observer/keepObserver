//测试开始模块
var startTest = {
    'testStart': function(browser) {
        var host = browser.globals.domain
        console.log('开始测试')
    },
}
//测试结束模块
var endTest = {
    'testEnd': function(browser) {
        browser.end()
    },
}





var nightWatchTestArray = Object.assign({},
    startTest,
    require('../examples/log/log.test'),
    // require('./index/index/index.test.js'),
    // require('./index/administrate/administrate.test.js'),
    // endTest
)




module.exports = nightWatchTestArray