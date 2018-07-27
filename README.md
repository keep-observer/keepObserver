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

