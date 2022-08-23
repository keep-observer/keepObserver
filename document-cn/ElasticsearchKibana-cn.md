# Elasticsearch+kibana
    1.Elasticsearch以及kibana安装
    2.查询日志，筛选索引

## 安装

请使用docker安装，任意6.5+版本即可，请注意es的版本和kibana的版本必须一致

**注意:原因是homebrew安装的情况下因为oss协议的原因不自带xpack，而apm依赖xpack提供的数据图形化显示，在6.5之后的版本xpack无法单独安装**


### 安装并启动es

1. 下载es镜像
 `docker pull elasticsearch:6.8.1`

2. 查看镜像id
`docker images` 找到elasticsearch:6.8.1的镜像id

3. 启动镜像并且配置端口
`docker run -it --name ${name} -d -p 9200:9200 -p 9300:9300 -p 5601:5601 ${上一步获取到的镜像id}`

4. 查看容器是否启动成功`
docker ps`,访问elasticsearch 端口9200，如果能成功访问并且看到一段es详情的json表示启动成功


### 安装并启动kibana

1.下载kibana镜像，**注意必须和es版本一致** `docker pull kibana:6.8.1`

2.查看镜像id
`docker images`

3.启动kibana
`docker run -it -d -e ELASTICSEARCH_URL=http://127.0.0.1:9200 --name ${name} --network=container:${找到elasticsearch:6.8.1的镜像id}  ${kibana:6.8.1的镜像id}`

4.访问kiaban
http://你的IP:5601/app/kibana

### 安装apm服务

访问kiaban，查看apm安装和使用步骤

安装完成后访问
`vi apm-server.yml`

修改apm对外服务
`
rum : 
    enabled: true
`


## KeepObserverKibanaApmReport上报索引对照表

###


1. KeepObserverKibanaApmReport提供api

```typescript
    /********************************公共部分*************************/
    setUserInfo({
        id: string;       
        username: string;
        email: string;
    })
    id =  context.user.id
    username = context.user.username
    email = context.user.email
    context.user.ip                                 //上报用户ip地址，一般用作,visualize统计用户去重计数
    /*config*/
    serviceName =  context.service.name             
    agentName = context.service.agent.name          /* 类似 --tag */
    agentVersion = context.service.agent.version    /* 版本区分 --version */
    /*default*/
    window.navigator.userAgent = context.user.user-agent  //设备信息-支持模糊查询
    window.location.href = transaction.name               //当前url信息-支持模糊查询
    /********************************功能部分*************************/
    /*page-load*/
    //Kibana APM菜单下查看  transaction type 选择page-load 查看可视化报表
    //discover index
    transactipn.type = `page-load`
    transaction.duration.us
    transaction.marks.agent.domComplete
    transaction.marks.agent.domInteractive
    transaction.marks.agent.firstContentfulPaint
    transaction.marks.agent.timeToFirstByte
    transaction.marks.navigationTiming = {
        connectEnd,connectStart,domComplete,domContentLoadedEventEnd,domContentLoadedEventStart,
        domInteractive,domLoading,domainLookupEnd,domainLookupStart,fetchStart,loadEventEnd,
        loadEventStart,requestStart,responseEnd,responseStart,
    }
    /*error*/
    //Kibana APM菜单下 项目详细照片中  error 查看可视化报表
    //discover index
    processor.event = 'error'
    error.exception.message
    error.exception.stacktrace
    error.exception.type
    error.id
```

2. keepObserverNetwork
```typescript
    transactipn.type = `network`
    context.tags.method
    context.tags.statusType
    context.tags.type   			            
    context.tags.url    			           
    context.tags.requestHead     	               
    context.tags.responseHead                     
    context.tags.params  			               
    context.tags.body      		            
    context.tags.status      	               
    context.tags.startTime     	                
    context.tags.endTime       	           
    context.tags.costTime      	            
    context.tags.response			                
    context.tags.responseType   	            
    context.tags.timeout                      
    context.tags.errorContent                     
    context.tags.isTimeout                 
    context.tags.isError
```

3.  keepObserverLog
```typescript
    transactipn.type = `log`
    context.tags.type
    context.tags.data
```

4.  KeepObserverHtmlElementActive
```typescript
    transactipn.type = `htmlElementActive`
    context.tags.type
    context.tags.title
    context.tags.xPath
    context.tags.value
```

5.  KeepObserverMiddlewareKibanaApmTrack
```typescript
    transactipn.type = `kibanaApmTrack`
    //log
    context.tags.type
    context.tags.data
    //network
    context.tags.method
    context.tags.url
    context.tags.params
    context.tags.body
    context.tags.status
    context.tags.startTime
    context.tags.endTime
    context.tags.costTime
    context.tags.response
    context.tags.timeout
    //htmlElementActive
    context.tags.type
    context.tags.title
    context.tags.xPath
    context.tags.value
    //error
    context.tags.message   
    context.tags.filename
```
