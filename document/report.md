# Keep-observer-doucment



### reportContent-explan

```javascript
/*
	keepObserver 上报服务器内容
*/
var reportData = {
    /*
    	上报类型 network log vue system 等
    	例如 
    		networl  表示window.XMLHttpRequest错误
    		log 	 表示 jsError 或则console.error() 错误 
    		vue 	 表示拦截的vue错误
    		system   系统信息
    	type: string
    */
    reportType,
    /*
    	项目名
    	type: string
    */
    project,
    /*
    	keepObserver版本
    	type: string
    */
    projectVersion
    /*
    	上报时间搓
    	type number
    */
    reportTime
    /*
    	用户自定义上报数据
    	在keepObserver.setCustomReport(params)中获取 = params
    */
    customeInfo,
    /*
    	上报的数据 存在两种格式
    	type: object or array
    	***************************
    	当类型为数组时,表示是合并上报
        {
    		log 		//表示为window.console中拦截的数据 array格式
    		network   	//表示拦截的window.XMLHttpRequest数据 array格式
    		vue         //表示拦截的vue错误 array格式   
        }
        当类型为数组时,表示内容为reportType的上报数据
        *******************  各类型数据详细子数据格式在下方描述  ******************
        子数据格式通用{
        	typeName    //类型 例如network log vue system 等
        	location    //当前记录的URL地址 来源window.location.href
        	reportTime  //记录上报的时间搓
        	data:		// array 该类型详细数据  各类型详细数据请看下方
        }
    */
    data
}

```

### System：

```javascript

//重定向次数：单位(ms)
redirectCount
//跳转耗时：单位(ms)
redirectTime 
//APP CACHE 耗时：单位(ms)
appcacheTime
//DNS 解析耗时：单位(ms)
dns
//TCP 链接耗时：单位(ms)
tcp
//等待服务器响应耗时（注意是否存在cache）：单位(ms)
request
//内容加载耗时（注意是否存在cache）:单位(ms)
response
//总体网络交互耗时，即开始跳转到服务器资源下载完成：单位(ms)
network 
//渲染处理：单位(ms)
DOMrender 
//抛出 load 事件：单位(ms)
onloadTime 
//总耗时：单位(ms)
total
//可交互：单位(ms
DOMactive 
//请求响应耗时，即 T0，注意cache：单位(ms
webResponse 
//首次出现内容，即 T1：单位(ms
webLoad 
//内容加载完毕，即 T3：单位(ms
webLoadEnd 
//系统平台信息 来源window.navigator.userAgent
systemInfo
//首屏加载的信息详情 array
requestPerformance = [
    //类型 例如:script link 等  
    type
    //文件名 例如 http://localhost:8080/app.js
    name
    //加载耗时 ms
    time
    //文件大小 kb
    size
]
```

### Network:

```javascript
	method:   			//请求方法
    url:      			//请求baseUrl
    reqHead:     		//请求头
    resHead:        	//请求响应头
    params:   			//请求URL上携带的参数
    data:       		//请求postData
    status:         	//请求状态码
    startTime:      	//请求开始时间
    endTime:        	//请求结束时间
    costTime:       	//请求耗时
    response: 			//请求原始响应数据
    responseType    	//请求响应类型
    handleResData:     	//如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
    handleReqData:      //如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
    isTimeout:          //是否超时 如果存在这个字段 则说明已经上报,忽略处理
    timeout:            //如果超时 这里是设置的超时时间
    isError:            //这个请求是否出现错误
    errorContent:       //错误信息
```

### log

```javascript
// 类型 例如 warn log error info debug    特殊类型 jsError 表示JS运行中报错
type
// 输出的打印信息	
// jsError类型特殊错误格式：errMsg:错误信息 url:错误地址 line:错误行 colum:错误列
data
```

### vue

```javascript
infoMsg   	//信息详情
errMsg    	//错误信息
stackMsg  	//错误堆栈信息
isError   	//vue出错
```

