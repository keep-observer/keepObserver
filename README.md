# Keep-observer

##### **这是一个应用于 javascript web端中的监控服务** 

- **关于keep-observer:**    
  - 这是一个基于javascript编写的用于线上生产环境监控，适用于web:PC端以及移动端的无感嵌入捕获，
  - 采用插槽服务组合方式，各捕获相关服务上报数据在消息管道中流通，由上报服务在管道消息中接收捕获信息选择性上报服务端后台
  - 支持可自由组合监控内容，并且允许自定义监扩充控捕获服务，自定义上报服务等。
- **功能:**  
  - keepObserverLog相关服务
    - 拦截捕获全局 ***console*** 相关日志,包括(error,log,warn,time,timeEnd,clear,info,debug)等
    - 捕获javascript 允行期间全局错误: ***JSerror***等错误信息
  - keepObserverNetwork相关服务
    - 捕获全局 ***XMLHttpRequest*** 请求
  - keepObserverVue相关服务
    - ***vue项目*** 捕获相关错误 
  - keepObserverLoad相关服务
    - 性能捕获分析 ***项目首屏加载等性能分析***
  - keepObserverReport相关服务
    - 应用于将拦截数据包上报相关后台服务器
    - 详细信息见下方：**关于上报服务**
- **兼容与支持:**   兼容目前所有主流框架运行版本, **vue angular  react**等框架。**IE 678暂未测试**



## Use And reportMonitorData

#### 	关于keepObserver使用:

- 	keepObserver支持自定义配置监控服务,在不自定义配置服务的情况,默认加载全部服务，包括(keepObserverLog，keepObserverNetwork， keepObserverVue，keepObserverLoad，keepObserverReport）等
-        keepObserver 在 new keepObserver()后 : **开始运行监控。首先尝试读取系统首屏加载信息， 在嵌入拦截window.console相关的方法以及window.XMLHttpRequest方法，进行监控log和ajax网络请求**，
- 	注意在keepObserver运行期间 **如果不设置develop = true 将默认生产环境**，在生产环境中.window.console相关的接口打印信息，将被keepObserver拦截，**并不显示在控制台console中**
-         同时 window.console相关的方法的打印信息，以及window.XMLHttpRequest方法的每一次请求，也被拦截并记录在localStorage缓存中，在上报的时候按需要打包合并上报。	



#### 	关于上报服务器：

##### 		keepObserverReport 在遇到以下几种情况下,将进行上报服务器操作

##### 		Monitor类型：（并且合并发生错误时，前几条正常的request和window.console相关信息，用于提供向前追踪错误）

```javascript
			： 捕获到js错误  script Error
            
        	： console.error() 被调用输出错误信息	
            
			： ajax请求响应超时  network timeout

			： ajax请求出现错误  status !== 200

			:  如果配置自定义判断ajax请求onHandleJudgeResponse钩子, 在钩子返回不等于false时，判断为ajax请求不正确

			： 如果需要监控vue，在vue拦截到错误信息后
```

**Performance类型：以下内容将会直接上传并且无合并追踪信息**

```javascript
			: 首屏load相关信息,每天首次打开将上报
```

**更多配置信息，以及上报参数，请参考Documentation**



## Installation

	请使用 npm安装包

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

#### 自定义服务例子

```javascript
import keepObserver from 'keep-observers/dist/keepObserver.js'
import keepObserverReport from 'keep-observers/dist/keepObserverReport.js'
import KeepObserverLog from 'keep-observers/dist/KeepObserverLog.js'
import KeepObserverNetwork from 'keep-observers/dist/KeepObserverNetwork.js'
//import KeepObserverVue from 'keep-observers/dist/KeepObserverVue.js'
import KeepObserverLoad from 'keep-observers/dist/KeepObserverLoad.js'

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
// not Monitor vue
keepObserver.use(keepObserverReport)
keepObserver.use(KeepObserverLog)
keepObserver.use(KeepObserverNetwork)
//keepObserver.use(KeepObserverVue)
keepObserver.use(KeepObserverLoad)
```

##### 	更多config配置详情，以及相关api等，请参考Documentation。



## Documentation

#### 	相关文档说明

- **keepObserver实例和自定义插件服务**   **[keepObserver](https://github.com/keep-observer/keepObserver/blob/master/document/keepObserver.md)**

- **上报服务:**   **[keepObserverReport](https://github.com/keep-observer/keepObserver/blob/master/document/report.md)**
- **window.console以及jsError相关监控服务:**   **[KeepObserverLog](https://github.com/keep-observer/keepObserver/blob/master/document/log.md)**

- **XMLHttpRequest相关监控服务**   **[KeepObserverNetwork](https://github.com/keep-observer/keepObserver/blob/master/document/network.md)**
- **vue错误相关拦截服务:**   **[KeepObserverVue](https://github.com/keep-observer/keepObserver/blob/master/document/vue.md)**

- **首屏加载分析onload服务:**   **[KeepObserverLoad](https://github.com/keep-observer/keepObserver/blob/master/document/kiad.md)**