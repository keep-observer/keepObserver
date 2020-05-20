# KeepObserverHtmlElementActive

### Function

提供 document.element ->Event: [click|change]事件捕获,并记录value,以及xPath路径和title,纯ProducerServer服务


注意：此方法依赖事件冒泡，阻止事件冒泡将丢失监控


### Config	

```TypeScript
     /*
    	function:手动标记dom
    	default: 'KO-tracer-flag'
    	explain: 
    	    非isGlobalElementActionCatch模式下，仅处理attr携带elementTrackFlag的element
    	    例如:
    	    <a KO-tracer-flag >go</a>
    */
    elementTrackFlag: String
    /*
    	function: 是否全量捕获
    	default: false
    	explain: 
    	    全局dom事件捕获
    */
    isGlobalElementActionCatch: Boolean
     /*
    	function:是否自动开始上报
    	default: true
    	explain: 
    	    keepObserver.use(KeepObserverHtmlElementActive)注册后，将开启自动监听
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
	    注册后，使用keepObserver.apis('htmlElementActiveStop') 调用到此方法
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
	    注册后，使用keepObserver.apis('htmlElementActiveStart') 调用到此方法
*/
startObserver():void

```



### type


```TypeScript
    //上报格式
    interface catchParams<elementActiveInfoType> = {
        type: 'monitor'                         //类型,	     monitor | performance| analyse | report
        typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
        data: elementActiveInfoType;                                                                     //捕获数据
        location?: string;                                                                      //捕获位置	
        environment?: string;                                                                   //捕获环境                                                           
        reportTime?: number                                                                     //捕获时间搓
        //标识项
        isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
        isError?: boolean;                                                                      //是否是错误信息
        isPerformance?: boolean;                                                                //是否是性能信息
        isAnalyse?: boolean;
    }
    
    type elementActiveInfoType = {
        type: 'click'|'change',
        title:string,
        xPath:string,
        value:string|number|boolean,
    }
```
