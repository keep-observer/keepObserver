# KeepObserverHtmlElementActive

### Function

Provides document.elements-> Event: [click|change] Event to capture and record value, as well as xPath path and title, pure ProducerServer service


Note: this method relies on event bubbling, which prevents monitoring from being lost


### Config	

```TypeScript
    /*
    	function: Manually tag dom
    	default: 'KO-tracer-flag'
    	explain: 
    	    Non isGlobalElementActionCatch mode, only handle attr carry elementTrackFlag element
    	    For example:
    	    <a KO-tracer-flag >go</a>
    */
    elementTrackFlag: String
    /*
    	function: Full capture
    	default: false
    	explain: 
    	    Global dom event capture
    */
    isGlobalElementActionCatch: Boolean
    /*
    	function: Whether to start reporting automatically
    	default: true
    	explain: 
    	    KeepObserver.use(KeepObserverHtmlElementActive) after registration, will open automatically to monitor
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
	    After registration, this method is called using the keepobserver.apis('htmlElementActiveStop')
*/
stopObserver():void

/*
    function:
        start
	params
		void
	return 
	    void
	explain: 

	    After registration, this method is called using the keepobserver.apis('htmlElementActiveStart')
*/
startObserver():void

```



### type


```TypeScript
    //Report format
    interface catchParams<elementActiveInfoType> = {
        type: 'monitor'                         //type monitor | performance| analyse | report
        typeName: string;                                                                       //type name,    monitor(vue|log|network|error)
        data: elementActiveInfoType;                                                                     //catch data
        location?: string;                                                                      //catch location	
        environment?: string;                                                                   //catch environment                                                           
        reportTime?: number                                                                     //catch time
        //Identify items
        isIgnoreSendRepeat?: boolean;                                                           //Whether to ignore sending message duplication
        isError?: boolean;                                                                      //Is it an error message
        isPerformance?: boolean;                                                                //Is it performance information
        isAnalyse?: boolean;
    }
    
    type elementActiveInfoType = {
        type: 'click'|'change',
        title:string,
        xPath:string,
        value:string|number|boolean,
    }
```
