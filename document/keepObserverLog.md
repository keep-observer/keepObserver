# keepObserverLog

### Function

Provide window.console related API print monitor, pure ProducerServer service


### Config	

```TypeScript
     /*
    	function: Whether to print out or not
    	default: true
    */
    isPrint: Number
    /*
    	function: Whether to start reporting automatically
    	default: true
    	explain: 
    	    KeepObserver.use(KeepObserverLog) after registration, will open automatically to monitor
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
	    After registration, this method is called using the keepobserver.apis ('logStop')
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
    	After registration, this method is called using the keepobserver.apis ('logStart')
	    
*/
startObserver():void
```



### type


```TypeScript
    //Report format
    interface catchParams<logType> = {
        type: 'monitor'                         //type monitor | performance| analyse | report
        typeName: string;                                                                       //type name,    monitor(vue|log|network|error)
        data: logType;                                                                     //catch data
        location?: string;                                                                      //catch location	
        environment?: string;                                                                   //catch environment                                                           
        reportTime?: number                                                                     //catch time
        //Identify items
        isIgnoreSendRepeat?: boolean;                                                           //Whether to ignore sending message duplication
        isError?: boolean;                                                                      //Is it an error message
        isPerformance?: boolean;                                                                //Is it performance information
        isAnalyse?: boolean;
    }
    
    type logType = {
        type:string,
        data:string,
    }
```
