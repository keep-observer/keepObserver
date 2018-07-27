# Keep-observer

##### **这是一个应用于 javascript 中的监控库**

- **关于keep-observer:**    这是一个基于javascript编写的用于线上生产环境监控库，适用于web PC端以及移动端的无感嵌入，全部基于原生js方法编写，采用嵌入式监控，不与其他任何第三方库起冲突。体积仅32KB。
- **功能:**   
  - 监控全局 ***console*** 相关日志，
  - 捕获 ***JSerror*** 错误信息，
  - 监控全局 ***XMLHttpRequest*** 请求，
  - 详细捕获分析 ***项目首屏加载等性能分析***，
  - ***vue项目*** 可配置捕获相关错误 
  - **捕获相关错误上报** 服务器日志分析

- **兼容与支持:**   兼容目前所有主流框架运行版本, **vue angular  react**等框架。**IE 678暂未测试**



## Use And reportMonitorData

#### 	关于keepObserver使用:

​			keepObserver 在 new keepObserver()后 : **开始运行监控。首先读取系统信息和性能详情， 在嵌入拦截window.console相关的方法以及window.XMLHttpRequest方法，进行监控log和ajax网络请求**，

​			注意在keepObserver运行期间 **如果不设置develop = true 将默认生产环境**，在生产环境中.window.console相关的接口打印信息，将被keepObserver拦截，**并不显示在控制台console中**

​			同时 window.console相关的方法的打印信息，以及window.XMLHttpRequest方法的每一次请求，也被拦截并记录在localStorage缓存中，在上报的时候按需要打包合并上报。



#### 	关于上报服务器：

##### 		keepObserver 在遇到以下几种情况下,将进行上报服务器操作

​			 	： 捕获到js错误  script Error

​				：console.error() 被调用输出错误信息

​				：ajax请求响应超时  network timeout

​				：ajax请求出现错误  status !== 200

​				:  如果配置自定义判断ajax请求onHandleJudgeResponse钩子, 在钩子返回不等于false时，判断为ajax请求不正确

​				：如果配置相关拦截数据缓存满时上报：比如 max_network_fillIsReport,，max_system_fillIsReport，max_log_fillIsReport，等

​				：如果需要监控vue，在vue拦截到错误信息后



**更多配置信息，以及上报参数，请参考doucmentation**



## Installation

​	请使用 npm安装包

```
	npm install keep-observers
```



## Examples

#### 	一个简单的使用例子

```javascript
import KeepObserver from 'keep-observers';
//启动
var keepObserver = new KeepObserver({
	project:'netcar',
	develop:true,
	//网络监控配置
	networkCustom:{
		timeout:30000,
	},
	//数据上传相关配置
	reportCustom:{
		reportUrl:['http://localhost:3000/api/v1/keepObserver/report'],
	}
});
```

##### 	更多config配置详情，以及相关api等，请参考doucmentation。



## Documentation

#### 	相关文档说明

- **api方法:**   **[api-document](https://github.com/keep-observer/keepObserver/blob/master/document/api.md)**
- **config配置说明:**   **[config-document](https://github.com/keep-observer/keepObserver/blob/master/document/config.md)**
- **report上报内容:**   **[report-document](https://github.com/keep-observer/keepObserver/blob/master/document/report.md)**

​	

