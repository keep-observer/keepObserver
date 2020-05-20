# keepObserverLog

### Function

提供 window.console相关api的打印监听，纯ProducerServer服务


### Config	

```TypeScript
     /*
    	function: 是否打印输出
    	default: true
    */
    isPrint: Number
     /*
    	function: 是否自动开始上报
    	default: true
    	explain: 
    	    keepObserver.use(keepObserverLog)注册后，将开启自动监听
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
	    注册后，使用keepObserver.apis('logStop') 调用到此方法
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
	    注册后，使用keepObserver.apis('logStart') 调用到此方法
*/
startObserver():void
```



### type


```TypeScript
    //捕获格式
    interface catchParams<logType> = {
        type: 'monitor'                         //类型,	     monitor | performance| analyse | report
        typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
        data: logType;                                                                     //捕获数据
        location?: string;                                                                      //捕获位置	
        environment?: string;                                                                   //捕获环境                                                           
        reportTime?: number                                                                     //捕获时间搓
        //标识项
        isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
        isError?: boolean;                                                                      //是否是错误信息
        isPerformance?: boolean;                                                                //是否是性能信息
        isAnalyse?: boolean;
    }
    
    type logType = {
        type:string,
        data:string,
    }
```
