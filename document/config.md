# Keep-observer-document

### config - list

```javascript
//配置
var keepObserverConfig = {
    /*
    	监控项目名
    	type: string
    	default: 'unKonw'
    	explan: 在上报的reportData中会携带此信息
    */
    project,
    /*
    	是否是开发模式
    	type: boolean
    	default: false
    	explan: 表示是否是开发模式,当为false默认生产环境,此时window.console系列相关接口将无打印输出,启动上传report时将不打印log通知
    */
    develop,
    /*
    	开发模式下获取到监控数据打印
    	type: boolean
    	default: false
    	explan: 开发模式下启用，当KeepObserver拦截到监控信息时,是否打印通知
    */
    developGetMsgLog,
    /*
    	开发模式下监控数据缓存内容超出丢弃打印
    	type: boolean
    	default: false
    	explan: 开发模式下启用，当拦截的监控信息本地缓存超出时,将丢弃最早记录数据，丢弃时是否打印通知
    */
    develogDiscardLog,
    /*
    	开发模式下删除缓存数据打印
    	type: boolean
    	default: false
    	explan: 开发模式下启用，当上报结束删除缓存数据时或手动删除缓存时,是否打印删除数据
    */
    develogDeleteLog,
    /*
    	是否开启vue监控
    	type: boolean
    	default: false
    	explan: 是否开启监控vue项目
    */
    isVue,
    /*
    	Vue实例
    	tyoe: object instanceof Vue,
    	default: null,
    	explan: Vue实例对象
    */
    vueInstance,
    
    
    /******************    上报服务器相关配置   ********************/
    reportCusom:{
        /**************  上报缓存数据相关配置  ***************/
        /*
        	如果没有设置监控数据缓存长度的默认值
        	type: number
        	default: 3
        	explan: 如果没有配置相关监控内容的缓存长度,统一默认取值
        */
        max_cache,
        /*
        	系统信息和首屏性能分析监控缓存长度
        	type: number,
        	default: 1
        	explan: 系统信息和首屏性能分析数据,最大缓存数据长度
        */
        max_system_cache,
        /*
        	系统信息和首屏性能分析监控，缓存长度满时,是否立即上传
        	type: boolean,
        	default: true,
        	explan: 缓存长度满时,是否立即上传
        */
        max_system_fillIsReport,
        /*
        	ajax请求,监控数据缓存长度
        	type: number,
        	default: 5,
        	explan: ajax请求捕获数据,最大缓存长度
        */
        max_network_cache,
        /*
        	ajax请求，缓存长度满时,是否立即上传
        	type: boolean,
        	default: false,
        */
        max_network_fillIsReport,
        /*
        	 window.console相关打印捕获数据,监控数据缓存长度
        	type: number,
        	default: 15,
        	explan: window.console相关打印捕获数据,最大缓存长度
        */
        max_log_cache,
        /*
        	window.console相关打印捕获数据,是否立即上传
        	type: boolean,
        	default: false,
        */
        max_log_fillIsReport,
        /*
        	vue捕获错误等信息,监控数据缓存长度
        	type: number,
        	default: 1,
        	explan: vue捕获错误等信息,最大缓存长度
        */
        max_vue_cache,
        /*
        	vue捕获错误等信息，缓存长度满时,是否立即上传
        	type: boolean,
        	default: true,
        */
        max_vue_cache,
        /*************** 上传服务器相关配置  **************/
        /*
        	上报数据后端服务器接收的接口地址
        	type: array [string,string...]
        	default: false;
        	explan: 监控数据上报,后端服务器的接收接口地址,数组类型，如果有多个,将依次上传
        */
        reportUrl,
        /*
        	上报数据给服务器失败回调
        	type: function
        	default: false
        	params: function(reportInfo/#上报内容#/,reportUrl/#如果配置了上报服务器接口则存在#/)
        	return: 暂无用
        	explan: 上传数据给服务器失败回调,若无配置上报服务器接口地址上报时也会触发
        */
        onReportFail,
        /*
        	上报前替换,接收接口URL
        	type: function
        	default: false
        	params: function(reportUrl)
        	return: 新的请求url
        	explan: 上传数据给服务器前,替换服务器接收接口地址
        */
        onReportBeforeSetUrl,
        /*
        	上报前设置自定义上报请求头  
        	type: function
        	default: false
        	params: function(reportUrl)
        	return requestHeaders obj
        	explan: 自定义上报接口请求头,比如上报接口需要验证设置authorization请求头等,这里设置 
        */
        onReportBeforeSetHead,
        /*
        	上报前,回调钩子
        	type:function
        	default:false,
        	params: function (reportInfo,reportUrl,requestHeaders)
        	return: 暂时无用
        	explan: keepObserver上报数据只上报一次,上报过程如果服务器出错无法正确接收,不会重新上报，如需重传,这里保存下数据 可在上传失败回调onReportFail或onReportResultHook中重传
        */
        onReportBeforeHook,
        /*
        	上报结果返回,回调钩子
        	type: function
        	default: false
        	params: function (resultInfo,reportUrl,responseHead)
        	explan: 上报服务器，服务器接收后的回调钩子 XML.status = 200 才下触发
        */
        onReportResultHook
    },
    
    
    /******************    捕获系统信息和性能分析相关   ********************/
    systemCustom:{
        /*
        	是否每天只记录一次
        	type: boolean,
        	default: true,
        	explan: 是否每天只记录一次系统信息和访问首屏性能捕获,false每次访问网页都会记录
        */
        isOneDay,
        /*
        	是否启动访问首屏性能捕获
        	type: boolean,
        	default: true,
        	explan: 是否捕获性能分析，如果浏览器不支持 Performance.Api 则无效
        */
        isPerformance,
        /*
        	是否启动首屏加载信息性能捕获
        	type: boolean,
        	default: true,
        	explan: 是否启动首屏加载信息性能捕获，如果浏览器不支持 Performance.Api 则无效
        */
        isPerformanceRequest,
        /*
        	在获取到system和首屏性能捕获后，是否立即上报服务器
        	type: boolean,
        	default: true,
        	explan: 是否立即上报服务器
        */
        immediatelyiReport,
    },
    
    
    /******************    XMLHttpRequest请求监控捕获相关配置   ********************/
    networkCustom:{
    	/*
    		XMLHttpRequest请求监控，超时时间(ms)
    		type: number,
    		default: 20000,
    		explan: 监控XMLHttpRequest请求响应时间,响应超时后,立即上报服务器
    	*/
  		timeout,
    	/*
    		需要屏蔽监控的url
    		type: array [ string,string,....],
    		default: 20000,
    		explan: 需要屏蔽监控的url, 比如高德地图相关URL接口 例如ignoreRequestList = ['vdata.amap.com','/api/content/detail/','restapi.amap.com'],将忽略该相关匹配url的请求
    	*/
    	ignoreRequestList,
    	/*
    		自定义判断接口是否正确
    		type:function
    		default:false,
    		params: function(ajaxInfo)
            ajaxInfo:{
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
            return: 如果响应数据判断不正确,返回错误errorMessage:type string将记录到errorContent中并且立即上报,接口响应正确返回false
            explan: 如果返回false表示接口正确,否则表示接口错误，将返回内容记录到errorContent中并且立即上报服务器
    	*/
    	onHandleJudgeResponse,
    	/*
    		自定义处响应数据
    		type:function
    		default:false,
    		params: function(ajaxInfo);
    		ajaxInfo:同上
    		return 自定义处理后信息
    		explan: 在某些web项目中,采用请求加密, 此时response数据为密文,可在这里做解密操作
    	*/
    	onHandleResponseData,
   		/*
    		自定义处请求数据
    		type:function
    		default:false,
    		params: function(ajaxInfo);
    		ajaxInfo:同上
    		return 自定义处理后信息
    		explan: 在某些web项目中,采用请求加密, 此时传输RequestData数据为密文,可在这里做解密操作
    	*/
    	onHandleRequestData,
	},
	

	/******************    window.console相关API操作,监控捕获相关配置   ********************/
    logCustom:{
        /*
        	是否捕获跨域加载JS文件中的错误
        	type: boolean,
        	default: true,
        	explan: 在某些项目中,存在动态加载的跨域script文件, 如果为false,在此文件中报错，将获取不到相关的错误信息
        */
		catchCrossDomain
    }
    
    /*end config*/
}

```

​	