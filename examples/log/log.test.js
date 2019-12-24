
var logTest = function(browser){
    var host = browser.globals.domain
        console.log('start test')
    // // 启动浏览器
        debugger
        client.url(host)
        //     // 确保输入框可以使用.
        //     .waitForElementVisible('body', 3000)
        //     //检查是否弹出请登录
        //     .waitForElementVisible('.popup-body', 5000)
        //     //检查是否是请登录
        //     .expect.element('.popup-body').text.to.contain('请重新登录');
        // //点击确定登录
        // client.click(".popup-body button")
        //     .pause(500);
        // //判断是否跳转
        // client.assert.urlContains(host + '/#/login')
}


module.exports = logTest