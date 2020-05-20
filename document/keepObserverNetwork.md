# keepObserverNetwork

### Function

Provides window.XMLHttpRequest and window.fetch related request API listening, pure ProducerServer service


### Config	

```TypeScript
     /*
    	function:
    	    Default timeout (ms)
    	default: 
    	    20000
    	explain: 
    	    The default timeout time is 20S;
    */
    timeout: Number
     /*
    	function:
    	    Ignoring  URL
    	default: 
    	    []
    	explain: 
    	    Ignoring the monitoring of relevant urls, indexOf is used to match request-url
    */
    ignoreRequestList: String[]
    /*
    	function:
    	    Whether to capture the response content
    	default:
    	    true
    	explain: 
    	    Whether to capture the Response content of the Response
    */
    isCatchResponseContent:Boolean
    /*
    	function: 
    	    Whether to start reporting automatically
    	default:
    	    true
    	explain: 
    	    KeepObserver.use(keepObserverNetwork) after registration, will open automatically to monitor
    */
    automaticStart:Boolean
```

### Api 

```TypeScript
/*
    function:
        stop
	params
		void
	return 
	    void
	explain: 
    	After registration, this method is called using the keepobserver.apis ('networkStop')
*/
stopObserver():void

/*
   function:
        start，
	params
		void
	return 
	    void
	explain: 
	    After registration, this method is called using the keepobserver.apis ('networkStart')
*/
startObserver():void

/*
   function:
        Cancel patch and return window-related Api
	params
		void
	return 
	    void
	explain: 
        Cancel patch and return window-related Api,After registration, this method is invoked using the keepobserver. apis('networkCancelPatch')
	    ps:This will conflict with polyfills. Js in angular 6 zones, and will invalidate the ability to start the startObserver again
*/
cancelPatch():void
```


### type


```TypeScript
   //Report format
    interface catchParams<networkType> = {
        type: 'monitor'                         //type monitor | performance| analyse | report
        typeName: string;                                                                       //type name,    monitor(vue|log|network|error)
        data: networkType;                                                                     //catch data
        location?: string;                                                                      //catch location	
        environment?: string;                                                                   //catch environment                                                           
        reportTime?: number                                                                     //catch time
        //Identify items
        isIgnoreSendRepeat?: boolean;                                                           //Whether to ignore sending message duplication
        isError?: boolean;                                                                      //Is it an error message
        isPerformance?: boolean;                                                                //Is it performance information
        isAnalyse?: boolean;
    }
    
    type networkType = {
        type: 'ajax'|'fetch',        
        statusType: 'request'|'response'                 
        method: string;   			           
        url: string;     			            
        requestHead?: any;     	                
        responseHead?: any;                     
        params?: any;  			                //the parameters carried on the request URL
        body?: string;      		            //Request postData
        status:  number;       	                //Request status code
        startTime?:number;     	                //Request start time
        endTime?: number;       	            //Request end time
        costTime?: number;      	            //Request time
        response?: string;			            //Request the original response data
        responseType?: string;   	            //Request response type
        timeout?: number;                       //So if I timeout this is the timeout that I set
        errorContent?: string;                  //The error message
        //status
        isTimeout?: boolean;                    //If the timeout
        isError?: boolean;                      //Whether there is an error in this request
    }
```




