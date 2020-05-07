# KeepObserverNetwork

### Function

	嵌入拦截浏览器 window.XMLHttpRequest，拦截捕获全部请求,并且通过设置超时时间可捕获超时响应接口

### Config	

```javascript
networkCustom :{	
	/*
		接口响应超时时间(ms)	
		default: 20000, 20s
		explain: ''
	*/
    timeout: int,
    /*
    	忽略URL 
    	default: false,
    	explain: 
            忽略请求地址，数组方式传递如：
            ignoreRequestList: [
                'vdata.amap.com',
                '/api/content/detail/',
                'restapi.amap.com',
                'hot-update'
            ],
    */
    ignoreRequestList: Boolean or Array，
    /*
    	自定义判断接口返回是否正确
    	default: false,
    	explain: 
    		自定义判断请求响应回调钩子
    		function(ajaxInfo)
            params:ajaxInfo:{
            //	method:   			请求方法
            //	url:      			请求baseUrl
            //	reqHead:     		请求头
            //	resHead:        	请求响应头
            //	params:   			请求URL上携带的参数
            //	data:       		请求postData
            //	status:         	请求状态码
            //	startTime:      	请求开始时间
            //	endTime:        	请求结束时间
            //	costTime:       	请求耗时
            //	response: 			请求原始响应数据
            //	responseType    	请求响应类型
            },
            return: 如果响应数据判断不正确,返回错误errorMessage:type string将记录到errorContent			中并且立即上报,接口响应正确返回false
            ps: 如果返回false表示接口正确,否则表示接口错误，将返回内容记录到errorContent中并且立即上报服务器
    */
	onHandleJudgeResponse: Boolean or Function,
	/*
		自定义处理响应数据 
		default: false,
    	explain: 
    		自定义处理请求响应回调钩子,应用于一些加密传输
        	function(ajaxInfo);
        	params:ajaxInfo:同上
        	return 自定义处理后信息
        	explan: 在某些web项目中,采用请求加密, 此时response数据为密文,可在这里做解密操作
	*/
	onHandleResponseData : Boolean or Function,
	/*
		自定义处理请求数据 
		default: false,
    	explain: 
    		自定义处理请求数据回调钩子,应用于一些加密传输
        	function(ajaxInfo);
        	params:ajaxInfo:同上
        	return 自定义处理后信息
        	explan: 在某些web项目中,采用请求加密, 此时传输RequestData数据为密文,可在这里做解密操作
	*/
	onHandleRequestData : Boolean or Function,
}
```

### Api 

```javascript
	/*
		停止监听	
		params: null,
		return: null
		explain: 
	*/
    $networkStop
    /*
    	开始监听 
    	params: null,
		return: null
		explain: 
    */
    $networkStart
```

### pipeQueueReportData

```
{
        method:   			请求方法
        url:      			请求baseUrl
        requestHead:     	请求头
        responseHead:       请求响应头
        params:   			请求URL上携带的参数
        data:       		请求postData
        status:         	请求状态码
        startTime:      	请求开始时间
        endTime:        	请求结束时间
        costTime:       	请求耗时
        response: 			请求原始响应数据
        responseType    	请求响应类型
        handleResData:     	如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
        handleReqData:      如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
        isTimeout:          是否超时 如果存在这个字段 则说明已经上报,忽略处理
        timeout:            如果超时 这里是设置的超时时间
        isError:            这个请求是否出现错误
        errorContent:       错误信息
}
```

	