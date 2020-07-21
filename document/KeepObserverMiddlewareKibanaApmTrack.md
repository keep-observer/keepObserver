# KeepObserverMiddlewareKibanaApmTrack

### Function

Pure middlewareServer processes the monitoring data reported by ProducerServer, cleans and calculates the data, and the discrete monitoring data is sorted into the ordered data of user behavior trajectory to provide user behavior analysis and error backtracking


### Config	

```TypeScript
     /*
    	function:
    	    Whether to interrupt the normal catch content
    	default: 
    	    false
    	explain: 
    	    Judge the isError in the received catchParams, the non-error message will be interrupt, and the report service will not be able to receive the interrupted information
    */
	isInterruptNormal: Boolean
	 /*
    	function:
    	    Custom determines whether terminal or not
    	default:
    	    false
    	explain: 
    	    Determine received catchParams. Return true will be interrupted and the Report service will not receive the interrupted message
    */
    onInterruptJudge:(report:catchParams)=>Boolean
     /*
    	function: 
    	    Format of escalation time
    	default: 
    	    'yyyy-MM-dd hh:mm:ss'
    	explain: 
    	    Set format of escalation time
    */
    reportDateFormat: String
     /*
    	function:
    	    Whether to start reporting automatically
    	default:
    	    true
    	explain: 
    	    keepObserver.use(KeepObserverMiddlewareKibanaApmTrack)After registration, automatic listening will be enabled
    */
    automaticStart:Boolean
```

### Api 

```TypeScript
/*
    function:
        stop track
	params
		void
	return 
	    void
	explain: 
	    After registration, this method is called using the keepobserver.apis ('cancelTrack')
*/
cancelTrack():void

/*
    function:
        start trackk，
	params
		void
	return 
	    void
	explain: 
	    After registration, this method is called using the keepobserver.apis ('startTrack')
*/
startTrack():void

/*
    function:
        nlisten for hashchange and return window.history.pushstate | replaceState
	params
		void
	return 
	    void
	explain: 
	    Cancel patch, stop monitoring page jump, pageHashChange will be lost after use
        After registration, this method is called using the keepobserver.apis ('cancelHashChangePatch')
*/
cancelPatch():void

```



### type


```TypeScript
   interface catchParams<T> = {
        type: 'monitor'                         //type monitor | performance| analyse | report
        typeName: string;                                                                       //type name,    monitor(vue|log|network|error)
        data: T;                                                                     //catch data
        location?: string;                                                                      //catch location	
        environment?: string;                                                                   //catch environment                                                           
        reportTime?: number                                                                     //catch time
        //Identify items
        isIgnoreSendRepeat?: boolean;                                                           //Whether to ignore sending message duplication
        isError?: boolean;                                                                      //Is it an error message
        isPerformance?: boolean;                                                                //Is it performance information
        isAnalyse?: boolean;
    }
```
