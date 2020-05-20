# KeepObserverKibanaApmReport

### Function

This is a report service that integrates kibana-apm based on elastic-apm-js-core low-level library encapsulation and writing, pure ConsumerServer service. The report function is based on elastic-apm-js-core low-level transaction report mode and extends some functions of transaction


elastic-apm-js document api:https://www.elastic.co/guide/en/apm/agent/js-base/current/api.html#apm-set-user-context


### Config	

```TypeScript
     /*
    	function:
    	    Report to the url
    	default:
    	    null
    	explain: 
    	   The reported interface address provided by the kibanaAPM service;
    */
    serverUrl: String
     /*
    	function:
    	    The service name
    	default: 
    	    'undefined'
    	explain: 
    	    KibanaApm -> content.seriv.name query index
    */
    serviceName: String
    /*
        function:  
            Version
    	default: 
    	    'undefined'
    	explain: 
    	    KibanaApm - > context.service.agent.version query index
    */
    agentVersion:String
    /*
    	function:
    	    Whether to start reporting automatically
    	default: 
    	    true
    	explain: 
    	    KeepObserver.use(KeepObserverKibanaApmReport) after registration, will open automatically
    */
    automaticStart:Boolean
    /*
    	function:
    	    Pageload detection is enabled or not
    	default: 
    	    true
    	explain: 
    	    Start page-load for performance analysis
    */
    isCatchPageload:Boolean
    /*
    	function:
    	    Whether to start error capture
    	default: 
    	    true
    	explain: 
    	    Enable the error capture function of APM
    */
    isCatchError:Boolean
    /*
    	function:
    	    transaction duration (ms)
    	default: 
    	    999999999999999999999
    	explain: 
    	    Transaction survival time
    */
    transactionDurationThreshold:Number
    /*
    	function:
    	    Heap data upload interval (ms)
    	default: 
    	    0
    	explain: 
    	    Transaction's large data traffic upload intervals
    */
    flushInterval:Number
    /*
    	function:
    	    Error upload interval (ms)
    	default: 
    	    0
    	explain: 
    	    Transaction's Error log upload interval
    */
    errorThrottleInterval:Number
    /*
    	function:
    	    Transaction upload interval (ms)
    	default: 
    	    0
    	explain: 
    	    Transaction log upload interval
    */
    transactionThrottleInterval:Number
```

### Api 

```TypeScript
/*
   function:
        Manually throw an error
	params
		error:string
	return 
	    void
	explain: 
	    Manually throw an error
*/
captureError(error):void

/*
    function:
        Setting user information，
	params
		userContext:{
		    id: string;
            username: string;
            email: string;
		}
	return 
	    void
	explain: 
	    Once set, you can search and retrieve data in kiabna using the following fields
	    context.user.id
	    context.user.username
	    context.user.email
*/
setUserInfo(userContext):void

/*
    function:
        Gets a custom Transaction
	params
		name:string,type='custome',options?:any
	return 
	    Transaction
	explain: 
	    Returns an elastic - apm - js provides the transfer object, relevant API and configuration see https://www.elastic.co/guide/en/apm/agent/js-base/current/api.html#apm-set-user-context
        KibanaAPM index -> transaction.type = params.type | transaction.name = params.name
*/
createCustomLog():Transaction
```


### type


```TypeScript
    //Report format
    type reportParams<T> = {
        type: 'monitor'|'performance'|'analyse'|'report'|'custome'|'undefined'; 
        typeName: string;
        data: T;
        location: string;
        reportTime: number;
        environment: string;
        contendHashCode:string;
        //extension
        projectName?: string;
        projectVersion?: string;
        version?: string;
        userInfo?: userInfo;
        //Identify items
        isError?: boolean;
        isPerformance?: boolean;
        isAnalyse?: boolean;
    }
```




