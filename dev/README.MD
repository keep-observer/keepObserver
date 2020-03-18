1.Expect
在browser实例上以.expect.element开头的BDD（行为驱动测试）风格的接口，0.7及以上版本nightwatch可用。通过.element方法传入一个selector（参考querySelector或者jq的语法）获取到dom实例，通过.text、.value、.attribute等方法获取到实例属性。还有一些语意明确的修饰：


http://nightwatchjs.org/api#expect-matchers


to
be
been
is
that
which
and
has
with
at
does
of
再加上比较判断:

.equal(value)/.contain(value)/.match(regex)

.selected

.present
复制代码还有时间修饰.before(ms)（表示一段时间之内）、.after(ms)（表示一段时间之后）。就像造句一样:某某元素的某某属性（在某某时间）（不）等于什么值，这就是BDD风格的测试代码。例如：
this.demoTest = function (browser) {
      browser.expect.element('body').to.have.attribute('data-attr');
      browser.expect.element('body').to.not.have.attribute('data-attr');
      browser.expect.element('body').to.not.have.attribute('data-attr', 'Testing if body does not have data-attr');
      browser.expect.element('body').to.have.attribute('data-attr').before(100);
      browser.expect.element('body').to.have.attribute('data-attr')
    .equals('some attribute');
      browser.expect.element('body').to.have.attribute('data-attr')
    .not.equals('other attribute');
      browser.expect.element('body').to.have.attribute('data-attr')
    .which.contains('something');
      browser.expect.element('body').to.have.attribute('data-attr')
    .which.matches(/^something\ else/);
};
复制代码2.Assert
以.assert/.verify开头的两套相同的方法库，区别是assert如果断言失败则退出整个测试用例所有步，verify则打印后继续进行。
this.demoTest = function (browser) {
      browser.verify.title("Nightwatch.js");
      browser.assert.title("Nightwatch.js");
};
复制代码有如下判断方法：
.attributeContains(selector, attribute, expected[, message])
检查指定元素（selector）的指定属性（attribute）是否包含有期待的值（expected）打印出指定信息（可选填的message）其他方法讲解类似，不一一赘述

.attributeEquals(selector, attribute, expected[, message])
检查元素指定属性是否等于预期

.containText(selector, expectedText[, message])
包含有指定的文本

.cssClassPresent(selector, className[, message])
检查元素指定class是否存在

.cssClassNotPresent(selector, className[, message])
检查元素指定class是否不存在

.cssProperty(selector, cssProperty, expected[, message])
检查元素指定css属性的值是否等于预期

.elementPresent(selector[, message)
检查指定元素是否存在于DOM中

.elementNotPresent(selector[, message)
检查指定元素是否不存在于DOM中

.hidden(selector[, message)
检查指定元素是否不可见

.title(expected[, message])
检查页面标题是否等于预期

.urlContains(expectedText[, message])
检查当前URL是否包含预期的值

.urlEquals(expected[, message])
检查当前URL是否等于预期的值

.value(selector, expectedText[, message])
检查指定元素的value是否等于预期

.valueContains(selector, expectedText[, message])
检查指定元素的value是否包含预期的值

.visible(selector[, message)
检查指定元素是否可见
复制代码3.Commands
很多命令的读写，可以操作BOM、DOM对象：
.clearValue(selector[, message])
清空input、textarea的值

.click(selector[, callback])
callback为执行完命令后需要执行的回调

.closeWindow([callback])

.deleteCookie(cookieName[, callback])

.deleteCookies([callback])

.end([callback])
结束会话（关闭窗口）

.getAttribute(selector, attribute, callback)

.getCookie(cookieName, callback)

.getCookies(callback)

.getCssProperty(selector, cssProperty, callback)

.getElementSize(selector, callback)

.getLocation(selector, callback)

.getLocationInView(selector, callback)

.getLog(typeString, callback)
获取selenium的log，其中type为string或者function

.getLogTypes(callback)

.getTagName(selector, callback)

.getText(selector, callback)

.getTitle(callback)

.getValue(selector, callback)

.init([url])
url方法的别名，如果不传url则跳转到配置中的launch_url

.injectScript(scriptUrl[, id, callback])
注入script

.isLogAvailable(typeString, callback)
typeString为string或者function，用来测试log的type是否可用

.isVisible(selector, callback)

.maximizeWindow([callback])
最大化当前窗口

.moveToElement(selector, xoffset, yoffset[, callback])
移动鼠标到相对于指定元素的指定位置

.pause(ms[, callback])
暂停指定的时间，如果没有时间，则无限暂停

.perform(callback)
一个简单的命令，允许在回调中访问api

.resizeWindow(width, height[, callback])
调整窗口的尺寸

.saveScreenshot(fileName, callback)

.setCookie(cookie[, callback])

.setValue(selector, inputValue[, callback])

.setWindowPosition(offsetX, offsetY[, callback])

.submitForm(selector[, callback])

.switchWindow(handleOrName[, callback])

.urlHash(hash)

.useCss()
设置当前选择器模式为CSS

.useXpath()
设置当前选择器模式为Xpath

.waitForElementNotPresent(selector, time[, abortOnFailure, callback, message])
指定元素指定时间内是否不存在

.waitForElementNotVisible(selector, time[, abortOnFailure, callback, message])
指定元素指定时间内是否不可见

.waitForElementPresent(selector, time[, abortOnFailure, callback, message])

.waitForElementVisible(selector, time[, abortOnFailure, callback, message])
复制代码简单的例子：
this.demoTest = function (browser) {
    browser.click("#main ul li a.first", function(response) {
    this.assert.ok(browser === this, "Check if the context is right.");
    this.assert.ok(typeof response == "object", "We got a response object.");
    });
};
复制代码4.webdriver protocol
可以操作一些更底层的东西，比如：

Sessions
Navigation
Command Contexts
Elements
Element State
Element Interaction
Element Location
Document Handling
Cookies
User Actions
User Prompts
Screen Capture
Mobile Related

简单的例子：
module.exports = {
 'demo Test' : function(browser) {
    browser.element('css selector', 'body', function(res) {
      console.log(res)
    });
  }
};

