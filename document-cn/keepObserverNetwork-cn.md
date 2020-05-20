# keepObserverNetwork

### Function

提供 window.XMLHttpRequest 以及window.fetch相关请求api的监听，纯ProducerServer服务


### Config	

```TypeScript
     /*
    	function:
    	    默认超时时间 (ms)
    	default: 
    	    20000
    	explain: 
    	    默认超时时间 20S;
    */
    timeout: Number
     /*
    	function:
    	    屏蔽URL
    	default: 
    	    []
    	explain: 
    	    忽略相关url的监听,采用indexOf匹配 request.url
    */
    ignoreRequestList: String[]
    /*
    	function:
    	    是否捕获响应内容
    	default:
    	    true
    	explain: 
    	    是否捕获响应Response内容
    */
    isCatchResponseContent:Boolean
     /*
    	function:
    	    是否自动开始上报
    	default:
    	    true
    	explain: 
    	    keepObserver.use(keepObserverNetwork)注册后，将开启自动监听
    */
    automaticStart:Boolean
```

### Api 

```TypeScript
/*
    function:
        停止监听
	params
		void
	return 
	    void
	explain: 
	    注册后，使用keepObserver.apis('networkStop') 调用到此方法
*/
stopObserver():void

/*
   function:
        开始监听，
	params
		void
	return 
	    void
	explain: 
	    注册后，使用keepObserver.apis('networkStart') 调用到此方法
*/
startObserver():void

/*
   function:
        取消patch，返还window相关Api
	params
		void
	return 
	    void
	explain: 
	    取消patch，返还window相关Api
	    注册后，使用keepObserver.apis('networkCancelPatch') 调用到此方法
	    ps:这种方式会和angular 6的zone 等polyfills.js产生冲突，并且返还后将无法再次开启startObserver也将失效
*/
cancelPatch():void
```


### type


```TypeScript
    //上报格式
    interface catchParams<networkType> = {
        type: 'monitor'                         //类型,	     monitor | performance| analyse | report
        typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
        data: networkType;                                                                     //捕获数据
        location?: string;                                                                      //捕获位置	
        environment?: string;                                                                   //捕获环境                                                           
        reportTime?: number                                                                     //捕获时间搓
        //标识项
        isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
        isError?: boolean;                                                                      //是否是错误信息
        isPerformance?: boolean;                                                                //是否是性能信息
        isAnalyse?: boolean;
    }
    
    type networkType = {
        type: 'ajax'|'fetch',        
        statusType: 'request'|'response'        //请求状态           
        method: string;   			            //请求方法
        url: string;     			            //请求baseUrl
        requestHead?: any;     	                //请求头
        responseHead?: any;                     //请求响应头
        params?: any;  			                //请求URL上携带的参数
        body?: string;      		            //请求postData
        status:  number;       	                //请求状态码
        startTime?:number;     	                //请求开始时间
        endTime?: number;       	            //请求结束时间
        costTime?: number;      	            //请求耗时
        response?: string;			            //请求原始响应数据
        responseType?: string;   	            //请求响应类型
        timeout?: number;                       //如果超时 这里是设置的超时时间
        errorContent?: string;                  //错误信息
        //状态
        isTimeout?: boolean;                    //是否超时 
        isError?: boolean;                      //这个请求是否出现错误
    }
```




