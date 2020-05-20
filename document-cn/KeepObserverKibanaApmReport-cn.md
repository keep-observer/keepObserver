# KeepObserverKibanaApmReport

### Function

这是一个基于 elastic-apm-js-core底层库封装编写集成kibana-APM的上报服务，纯ConsumerServer服务,上报功能基于 elastic-apm-js-core底层transaction上报模式, 扩展 transaction 部分功能


elastic-apm-js 文档 api:https://www.elastic.co/guide/en/apm/agent/js-base/current/api.html#apm-set-user-context


### Config	

```TypeScript
     /*
    	function:
    	    上报url
    	default:
    	    null
    	explain: 
    	    kibanaAPM服务提供的上报接口地址;
    */
    serverUrl: String
     /*
    	function:
    	    服务名
    	default: 
    	    'undefined'
    	explain: 
    	    kibanaApm->content.serive.name查询索引
    */
    serviceName: String
    /*
        function:  
            版本
    	default: 
    	    'undefined'
    	explain: 
    	    kibanaApm->context.service.agent.version查询索引
    */
    agentVersion:String
    /*
    	function:
    	    是否自动开始上报
    	default: 
    	    true
    	explain: 
    	    keepObserver.use(KeepObserverKibanaApmReport)注册后，将开启自动
    */
    automaticStart:Boolean
    /*
    	function:
    	    是否启动pageload检测
    	default: 
    	    true
    	explain: 
    	    启动page-load首屏加载性能分析
    */
    isCatchPageload:Boolean
    /*
    	function:
    	    是否启动错误捕获
    	default: 
    	    true
    	explain: 
    	    启动APM自带error捕获功能
    */
    isCatchError:Boolean
    /*
    	function:
    	    追踪持续时间(ms)
    	default: 
    	    999999999999999999999
    	explain: 
    	    transaction的存活时间
    */
    transactionDurationThreshold:Number
    /*
    	function:
    	    堆积数据上传间隔(ms)
    	default: 
    	    0
    	explain: 
    	    transaction的大流量数上传间隔时间
    */
    flushInterval:Number
    /*
    	function:
    	    错误上传间隔(ms)
    	default: 
    	    0
    	explain: 
    	    transaction的Error日志上传间隔
    */
    errorThrottleInterval:Number
    /*
    	function:
    	    transaction上传间隔(ms)
    	default: 
    	    0
    	explain: 
    	    transaction的日志上传间隔
    */
    transactionThrottleInterval:Number
```

### Api 

```TypeScript
/*
   function:
        手动抛出一个error
	params
		error:string
	return 
	    void
	explain: 
	    手动抛出一个error上报
*/
captureError(error):void

/*
    function:
        设置用户信息，
	params
		userContext:{
		    id: string;
            username: string;
            email: string;
		}
	return 
	    void
	explain: 
	    设置后可在kiabna使用以下字段搜索检索数据
	    context.user.id
	    context.user.username
	    context.user.email
*/
setUserInfo(userContext):void

/*
    function:
        获取一个自定义Transaction
	params
		name:string,type='custome',options?:any
	return 
	    Transaction
	explain: 
	    返回一个elastic-apm-js提供的传输对象，相关api和配置见https://www.elastic.co/guide/en/apm/agent/js-base/current/api.html#apm-set-user-context
	    kibanaAPM索引-> transaction.type = params.type | transaction.name = params.name
*/
createCustomLog():Transaction
```


### type


```TypeScript
    //上报格式
    type reportParams<T> = {
        type: 'monitor'|'performance'|'analyse'|'report'|'custome'|'undefined'; 
        typeName: string;
        data: T;
        location: string;
        reportTime: number;
        environment: string;
        contendHashCode:string;
        //扩展项
        projectName?: string;
        projectVersion?: string;
        version?: string;
        userInfo?: userInfo;
        //标识项
        isError?: boolean;
        isPerformance?: boolean;
        isAnalyse?: boolean;
    }
```




