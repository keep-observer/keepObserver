# KeepObserverReport

### Function

	内置上传服务，用于在管道消息中接收消息,根据控制参数进行上报服务器操作，关于管道控制参数请参考keepObserver document

	管道参数如下：
    		params  
    			@object  = {
       				 type:  string                  	 //类型,observer or performance    
        			 typeName:  string               //类型名,vue  or log or network
      				 location:string                 	//捕获位置
        			environment:string              //运行环境信息
       				 data:object                    	 //捕获数据
        			reportTime: int 			//捕获时间搓
  			  }
    			@ .control null and object = {
        			@ .isReport:boolean                	 //是否需要上报 内部reportServer需要使用
        			@ .lazy:boolean                     	 //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        			@ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        			@ .isError:boolean                  	//是否是错误信息
        			@ .isPerformance:boolean         //是否是性能捕获分析
        			@ .preDelete:boolean                	//是否删除之前的信息
       				 @ .ignore:boolean                   	//本条数据是否忽略

			}

### Config	

```javascript
reportCustom :{	
	/*
		如果取不到缓存长度的默认长度
		default: 3
		explain: 用于向前追踪错误的，缓存正常数据长度
	*/
    max_cache: int,
    /*
    	默认log数组缓存长度 
    	default: 5,
    	explain: 用于向前追踪错误的，缓存正常的console相关数据
    */
    max_log_cache: int，
     /*
    	默认network数组缓存长度 
    	default: 3,
    	explain: 用于向前追踪错误的，缓存正常的ajaxRequest相关数据
    */
    max_network_cache: int，
    /*
    	上报服务器的地址 
    	default: false,
    	explain: 
            上报服务器的地址，数组方式传递如：
            reportUrl: [
                'http://localhost:3000/api/v1/keepObserver/report',
            ],
    */
    reportUrl: Boolean or Array，
    /*
    	上传失败回调钩子
    	default: false,
    	explain: 
    		function(reportInfo，reportUrl)
            params:
            	.reportInfo object 	//上报内容
            	.reportUrl string	//上报url 
            return: null
    */
	onReportFail: Boolean or Function,
    /*
    	上传前自定义设置url
    	default: false,
    	explain: 
    		function(reportUrl)
            params:
            	.reportUrl string	//上报url 
            return: new reportUrl
    */
	onReportBeforeSetUrl: Boolean or Function,
    /*
    	上传前自定义设置请求头，
    	default: false,
    	explain: 
    		function(reportUrl)
            params:
            	.reportUrl string	//上报url 
            return: requestHeadData object
    */
	onReportBeforeSetHead: Boolean or Function,
    /*
    	上传服务器前回调钩子，
    	default: false,
    	explain: 
    		function(reportInfo,reportUrl,repHead)
            params:
            	.reportInfo	object	//上报内容
            	.reportUrl string	//上报url 
            	.repHead object 	//上报请求头
            return: null
    */
	onReportBeforeSetHead: Boolean or Function,
    /*
    	上传服务器后返回处理钩子，
    	default: false,
    	explain: 
    		function(reportInfo,reportUrl,repHead)
            params:
            	.reportInfo	object	//上报内容
            	.reportUrl string	//上报url 
            	.resHead object 	//上报结束响应头
            return: null
    */
	onReportResultHook: Boolean or Function,
}
/*
	是否是开发模式
	default: false
	explain: 
*/
develop: Boolean
/*
	开发环境下获取报文是否打印
	default: false
	explain: 
*/
developGetMsgLog: Boolean
/*
	开发环境下丢弃数据 是否打印出来
	default: false
	explain: 
*/
develogDiscardLog: Boolean
/*
	开发环境下删除出数据 是否打印出来
	default: false
	explain: 
*/
develogDeleteLog: Boolean
```

### Api 

```javascript
	/*
		接受自定义上报内容	
		params: 
			model1: arguments[0]  type object  
    		model2: arguments[0]  type boolean  
    			will extend preData arguments[...]=extend data
    			合并到this._customeInfo中
		return: null
		explain: 用于接收自定义上报信息
	*/
    $setCustomeReportData
```

### ReportData

```
{
     //以下参数必定存在
     @.type string                       上报的大的类型
     @.reportType string                 上报的具体类型名
     @.project string                    上报项目名
     @.projectVersion string             上报项目版本
     @.reportTime number                 上报时间时间搓
     @.data  object                      上报内容
     @.environment string                上报项目运行环境
     @.location string                   上报的位置
     //以下参数可能存在
     @.customeInfo all                   用户自定义设置上传参数
     @.preTrackData object               合并之前保存的监控数据对象，用于向前追踪错误
}
```

	