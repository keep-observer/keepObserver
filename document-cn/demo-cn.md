# 在线demo

### 引入前端sdk

0. 在你的项目中安装KeepObserver

```TypeScript
    npm install keep-observers
```

1. 建立 monitor.js 文件,代码如下

```TypeScript
    import KeepObserver,{
        KeepObserverLog,
        KeepObserverNetwork,
        KeepObserverHtmlElementActive,
        KeepObserverMiddlewareKibanaApmTrack,
        KeepObserverKibanaApmReport,
    } from 'keep-observers'
    //实例初始化，更多config信息,请查看文档
    var ko = new KeepObserver({ 
        isPrint:false,                          //console打印的部分不在显示
        isInterruptNormal:false,                //全量捕获上报
        isGlobalElementActionCatch:true,        //是否全部html交互捕获
        serviceName: `demo`,                    //上报的服务名，查询索引
        //注意线上demo-elk定时删除数据，请不要使用这个demo服务器作为你的线上应用
        //https
        // serverUrl: "https://apm.notcore.com",
        //http
        serverUrl: "http://114.115.236.50:8200",   //上报地址
        agentVersion: "0.0.0",                     //上报服务的版本号，ABtest的时候使用区分
    })
    // 注册监控基础服务
    ko.use(KeepObserverLog)
    ko.use(KeepObserverNetwork)
    ko.use(KeepObserverHtmlElementActive)
    // 注册elk上报服务
    ko.use(KeepObserverKibanaApmReport)
    // 用户行为追踪
    ko.use(KeepObserverMiddlewareKibanaApmTrack)
    //export instance
    export default ko
```

2. 在你的项目中,引入该文件,并运行
```TypeScript
  //index.js
  import ko from './monitor.js'
```

### 访问kibana查看日志以及报表数据
ps: 线上demo服务,定时删除数据，只做demo使用，请不要把这个服务应用在你的线上项目中

demo后台kibana地址

http://114.115.236.50:5601/

kibana查询日志教程: https://www.elastic.co/guide/cn/kibana/current/discover.html

index Patten 请使用 apm*

右侧菜单项 点击apm菜单，可以查看到当前所有挂载日志服务汇总。以及服务的page-load信息

上报服务,索引对照表(过滤字段表): https://github.com/keep-observer/keepObserver/blob/master/document-cn/ElasticsearchKibana-cn.md


### 一键部署你的私有 Elasticsearch+kibana 服务
docker部署教程: https://github.com/keep-observer/keepObserver/blob/master/document-cn/ElasticsearchKibana-cn.md

