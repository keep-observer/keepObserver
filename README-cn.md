# Keep-observer

[![Build Status](https://travis-ci.com/keep-observer/keepObserver.svg?branch=master)](https://travis-ci.com/keep-observer/keepObserver)
[![Coverage Status](https://coveralls.io/repos/github/keep-observer/keepObserver/badge.svg)](https://coveralls.io/github/keep-observer/keepObserver)

##### **这是一个应用于web端中的监控服务** 

  [线上demo](https://github.com/keep-observer/keepObserver/blob/master/document-cn/demo-cn.md)

- **关于keep-observer:**    
  - 这是一个基于纯javascript编写用于线上环境监控，适用于web:PC端以及移动端的无感嵌入捕获，并持续追踪用户交互行为，
  - 支持Elasticsearch+kibana数据可视化后台显示,提供docker快速私有化部署
  - 提供细粒度时间维度分析以及关键字段索引搜索
  - 提供单用户追踪记录，一连串事件持续追踪,并提供错误回溯
  - 提供pageLoad首屏加载分析,时间维度,多版本对比
  - 采用插件服务组合方式，提供中间件扩展接口
  - 支持可自由组合监控内容，并且允许自定义扩充控捕获服务，自定义上报服务等。
  - 配置信息和API以及自定义服务,详细信息见 [keepObserver](https://github.com/keep-observer/keepObserver/blob/master/document-cn/keepObserver-cn.md)
- **你为什么需要keep-observer?**
    - 你的业务需要: **业务监控，异常报警，错误追踪**
    - 你的业务需要: **分析首屏性能信息,需要提供ABtest等灰度测试的结果数据分析**
    - 你需要: **日志细粒度的搜索以及查询，并提供可视化数据报表**
    - 你需要: **用户行为操作追踪,异常错误回溯查询**
    - 你的团队: **没有后端资源提供，完全由前端团队操作**
    - **可提供快速接入监控，快速部署后端服务，无复杂的服务端操作，前端技术人员即可安装部署**
    - **高自定义扩展度，允许自定义扩展其他服务**
- **功能:**  
  - keepObserverLog
    - 拦截捕获全局 ***console*** 相关日志,包括(error,log,warn,time,timeEnd,clear,info,debug)等
    - 配置信息以及API详细信息见 [keepObserverLog](https://github.com/keep-observer/keepObserver/blob/master/document-cn/keepObserverLog-cn.md)
  - keepObserverNetwork
    - 捕获全局 ***XMLHttpRequest***以及***fetch***请求
    - 配置信息以及API详细信息见[keepObserverNetwork](https://github.com/keep-observer/keepObserver/blob/master/document-cn/keepObserverNetwork-cn.md)
  - KeepObserverHtmlElementActive
    - 捕获用户dom交互(click,change)事件，并提供xPath路径追踪
    - 配置信息以及API详细信息见[KeepObserverHtmlElementActive](https://github.com/keep-observer/keepObserver/blob/master/document-cn/KeepObserverHtmlElementActive-cn.md)
  - KeepObserverKibanaApmReport
    - 使用Elasticsearch+kibana需要这个服务。依靠kibana APM上报数据 
    - 配置信息以及API详细信息见[KeepObserverKibanaApmReport](https://github.com/keep-observer/keepObserver/blob/master/document-cn/KeepObserverKibanaApmReport-cn.md)
  - KeepObserverMiddlewareKibanaApmTrack
    - 中间件扩展服务，提供kibana时间轴追踪日志记录
    - 配置信息以及API详细信息见[KeepObserverMiddlewareKibanaApmTrack](https://github.com/keep-observer/keepObserver/blob/master/document-cn/KeepObserverMiddlewareKibanaApmTrack-cn.md)
- **兼容与支持:**   
    - 兼容目前所有主流框架运行版本, **vue angular  react**等框架。**IE 678暂未测试**



## Use And reportMonitorData
### 安装与索引
[ElasticsearchKibana](https://github.com/keep-observer/keepObserver/blob/master/document-cn/ElasticsearchKibana-cn.md)

#### 	关于keepObserver:
keepObserver本身只维护一个**pipeMQ**以及相关**middlewareServer**服务,所有的监控捕获服务以及上报服务均由插件提供,并提供中间件扩展接口,扩展信息通道,
#####  结构设计如下
- **ProducerServer**:  提供捕获数据。如log  network error 相关catch
- **ConsumerServer**:  处理接收到的数据。如上报到后台服务器 kibanaAPM
- **MiddlerwareServer**:   在ProducerServer发起一个消息时,将经过MiddlerwareServerArray的处理才最终达到ConsumerServer，MiddlerwareServer具有interrupt和next的特性,将控制消息是否达到下一个MiddlerwareServer处理或被中断

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/keepObserver.png)

MiddlerwareServer结构如下</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/keepObserver_middleService.png)

#### 	关于Elasticsearch+kibana
数据存储阶段，核心的使用场景在于 不同数据维度的灵活查询，逐层分析对比各个维度的数据快速定位到问题，而这恰好可以利用elasticsearch的检索特性，即使对于一个最小集合的elasticsearch集群，也可以比较轻松实现每天千万级别的日志量的存储和查询,并且配套kibana完成数据可视化，以及查询搜索相关日志内容,以及提供快速私有化部署docker

最简单的一个日志查询，提供细粒度的时间维度以及相关字段的搜索</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/kibana.jpg)</br>

详细的单用户行为追踪</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/track.jpg)</br>

page-load的查询分析</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/page-load.jpg)

## Installation

```
	npm install keep-observers
```



## Examples

#### 	一个简单的使用例子

```javascript
import KeepObserver,{
    KeepObserverLog,
    KeepObserverNetwork,
    KeepObserverHtmlElementActive,
    KeepObserverMiddlewareKibanaApmTrack,
    KeepObserverKibanaApmReport,
} from 'keep-observers'
//实例
const ko = new KeepObserver({ 
    isInterruptNormal:true,         //KeepObserverMiddlewareKibanaApmTrack use
    isGlobalElementActionCatch:true, //KeepObserverHtmlElementActive use
    serverUrl:'http://localhost:8200', //KeepObserverKibanaApmReport use
    serviceName: "push-test", //KeepObserverKibanaApmReport use
    agentVersion: "step_1",   //KeepObserverKibanaApmReport use
})
//注册监控服务
ko.use(KeepObserverLog)
ko.use(KeepObserverNetwork)
ko.use(KeepObserverHtmlElementActive)
//注册kibanaApm上报
ko.use(KeepObserverKibanaApmReport)
//注册中间件时间轴追踪服务
ko.use(KeepObserverMiddlewareKibanaApmTrack)
```

#### 自定义服务例子

```javascript
import KeepObserver,{
    KeepObserverLog,
    KeepObserverNetwork,
    KeepObserverHtmlElementActive,
    KeepObserverMiddlewareKibanaApmTrack,
    KeepObserverKibanaApmReport,
} from 'keep-observers'

//简单的一个本地存储插件
/*
    这样可以获取扩展中间件服务
    ps:注意这样获取的中间件服务无法和其他插件共享
    import { KeepObserverPublic } from 'keep-observers/@util/index'
    class LocalstorageMiddlewareServer extends KeepObserverPublic{
        apply(){
            
        }
    }
    const server = new LocalstorageMiddlewareServer()
    server.useMiddle //注册
    server.runMiddle //执行
*/
class LocalstorageMiddlewareServer {
    constructor(config) {
        /*
        config={
            isInterruptNormal:true,
            isGlobalElementActionCatch:true,
            serverUrl:'http://localhost:8200',
            serviceName: "push-test",
            agentVersion: "step_1"
        }
        */
    }
    apply({
        //更多参数请查看Documentation
        sendMessage,                //发送消息方法
        useExtendMiddle,    //注册中间件扩展,等效ko.useMiddle()
        middleScopeNames,   //中间件命名
        registerSendDoneCallback    //注册发送结束空闲回调
    }) {
        const [sendMessageName] = middleScopeNames
        //注册中间件服务
        useExtendMiddle(sendMessageNamem,(interrupt,next)=>(message)=>{
            //这只是一个简单的例子，举例使用 
            var value = JSON.stringify(message)
            localStorage.setItem('message', value);
            //转入下一个中间件
            //interrupt(message) 将直接跳过下级中间件处理进入kibanaApm上报
            //interrupt(false) 将直接跳过下级中间件处理并忽略本次消息
            next(message)
        })
        /*
            如果存在返回
            return {
                remove:(key)=>localStorage.removeItem(key)
            }
            可以通过ko.apis('remove','message')调用到此返回方法
        */
    }
}

//实例
const ko = new KeepObserver({ 
    isInterruptNormal:true,
    isGlobalElementActionCatch:true,
    serverUrl:'http://localhost:8200',
    serviceName: "push-test",
    agentVersion: "step_1",
})
//注册监控服务
ko.use(KeepObserverLog)
ko.use(KeepObserverNetwork)
ko.use(KeepObserverHtmlElementActive)
//注册kibanaApm上报
ko.use(KeepObserverKibanaApmReport)
//注册中间件时间轴追踪服务
ko.use(KeepObserverMiddlewareKibanaApmTrack)
//注册自定义服务
//也可以这样 ko.use(new LocalstorageMiddlewareServer())
ko.use(LocalstorageMiddlewareServer)
```
##### 	更多config配置详情，以及相关api等，请参考Documentation。


