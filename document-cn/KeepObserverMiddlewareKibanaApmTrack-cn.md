# KeepObserverMiddlewareKibanaApmTrack

### Function

纯middlewareServer,处理ProducerServer上报的监控数据，进行数据清洗和计算，离散监控数据在这里被整理成用户行为轨迹的有序数据，提供用户行为分析和错误回溯追踪


### Config	

```TypeScript
     /*
    	function:
    	    是否中断掉正常的catch内容
    	default: 
    	    false
    	explain: 
    	    判断接收的catchParams中的isError，非错误信息将被interrupt,report服务将无法接收到被中断的信息
    */
    isInterruptNormal: Boolean
     /*
    	function: 
    	    上报时间的格式化
    	default: 
    	    'yyyy-MM-dd hh:mm:ss'
    	explain: 
    	    设置上报时间格式化
    */
    reportDateFormat: String
     /*
    	function:
    	    是否自动开始上报
    	default:
    	    true
    	explain: 
    	    keepObserver.use(KeepObserverMiddlewareKibanaApmTrack)注册后，将开启自动监听
    */
    automaticStart:Boolean
```

### Api 

```TypeScript
/*
    function:
        停止追踪
	params
		void
	return 
	    void
	explain: 
	    注册后，使用keepObserver.apis('cancelTrack') 调用到此方法
*/
cancelTrack():void

/*
    function:
        开始追踪，
	params
		void
	return 
	    void
	explain: 
	    注册后，使用keepObserver.apis('startTrack') 调用到此方法
*/
startTrack():void

/*
    function:
        取消hashchange的监听，返还window.history.pushState|replaceState
	params
		void
	return 
	    void
	explain: 
	    取消patch，停止监听页面跳转，使用后将丢失pageHashChange上报
	    注册后，使用keepObserver.apis('cancelHashChangePatch') 调用到此方法
*/
cancelPatch():void

```



### type


```TypeScript
    //接收捕获格式
    interface catchParams<T> = {
        type: 'monitor'                         //类型,	     monitor | performance| analyse | report
        typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
        data: T;                                                                     //捕获数据
        location?: string;                                                                      //捕获位置	
        environment?: string;                                                                   //捕获环境                                                           
        reportTime?: number                                                                     //捕获时间搓
        //标识项
        isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
        isError?: boolean;                                                                      //是否是错误信息
        isPerformance?: boolean;                                                                //是否是性能信息
        isAnalyse?: boolean;
    }
    
```
