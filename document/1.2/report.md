# KeepObserverReport

### Function

	the built-in upload service, using for receiving message in pipe message, processes the operation of reporting to server according to the control parameters. As for the parameters explanation of controling pipe, read the keepObserver document

	the pipe parameters as follow:
    		params  
    			@object  = {
       				 type:  string                  	 //the type, observer or performance    
        			 typeName:  string               //the type name, vue  or log or network
      				 location:string                 	//the captured position
        			environment:string              //the information of runtime envoriment
       				 data:object                    	 //the captured data
        			reportTime: int 			//the captured timestamp
  			  }
    			@ .control null and object = {
        			@ .isReport:boolean                	 //whether need to report, it's required to the internal reportServer
        			@ .lazy:boolean                     //whether lazying report(merge and roport according to the flag trackExtend), not immediately report
        			@ .trackExtend:boolean              //whether merge the stored lazy information and roport together
        			@ .isError:boolean                  	//whether it's error message
        			@ .isPerformance:boolean         //whether it's performance capturing analysis
        			@ .preDelete:boolean                	//whether delete the previous information
       				 @ .ignore:boolean                   	//whether ignore this data

			}

### Config	

```javascript
reportCustom :{	
	/*
		the default length if the cached length can't be obtained
		default: 3
		explain: use for forward tracking error, caching the length of the normal data
	*/
    max_cache: int,
	/*
		the default cached length of log array 
    	default: 5,
    	explain: use for forward tracking error, caching the normal related data of console
    */
    max_log_cache: int，
     /*
		the default cached length of network array 
    	default: 3,
    	explain: use for forward tracking error, caching the normal related data of ajaxRequest
    */
    max_network_cache: int，
    /*
		the address of reporting to server
    	default: false,
    	explain: 
            the example of passing params by array if ignore the address of reporting to server
            reportUrl: [
                'http://localhost:3000/api/v1/keepObserver/report',
            ],
    */
    reportUrl: Boolean or Array，
    /*
		the callback hook of uploading fail
    	default: false,
    	explain: 
    		function(reportInfo，reportUrl)
            params:
            	.reportInfo object 	//the report content
            	.reportUrl string	//the report url 
            return: null
    */
	onReportFail: Boolean or Function,
    /*
		configure the custom request's url before uploading
    	default: false,
    	explain: 
    		function(reportUrl)
            params:
            	.reportUrl string	//the report url 
            return: new reportUrl
    */
	onReportBeforeSetUrl: Boolean or Function,
    /*
		configure the custom request's head before uploading
    	default: false,
    	explain: 
    		function(reportUrl)
            params:
            	.reportUrl string	//the report url 
            return: requestHeadData object
    */
	onReportBeforeSetHead: Boolean or Function,
    /*
		the callback hook before reporting
    	default: false,
    	explain: 
    		function(reportInfo,reportUrl,repHead)
            params:
            	.reportInfo	object	//the report content
            	.reportUrl string	//the report url 
            	.repHead object 	//the request's head for reporting
            return: null
    */
	onReportBeforeSetHead: Boolean or Function,
    /*
		the callback hook after reporting
    	default: false,
    	explain: 
    		function(reportInfo,reportUrl,repHead)
            params:
            	.reportInfo	object	//the report content
            	.reportUrl string	//the report url 
            	.resHead object 	//the response's head after reporting
            return: null
    */
	onReportResultHook: Boolean or Function,
}
/*
	whether it's developement mode
	default: false
	explain: 
*/
develop: Boolean
/*
	whether print the message which obtained in dev envoriment
	default: false
	explain: 
*/
developGetMsgLog: Boolean
/*
	whether print the message which discarded in dev envoriment
	default: false
	explain: 
*/
develogDiscardLog: Boolean
/*
	whether print the message which deleted in dev envoriment
	default: false
	explain: 
*/
develogDeleteLog: Boolean
```

### Api 

```javascript
	/*
		accept the custom report content
		params: 
			model1: arguments[0]  type object  
    		model2: arguments[0]  type boolean  
    			will extend preData arguments[...]=extend data
    			merge into this._customeInfo
		return: null
		explain: using for accepting the custom report information
	*/
    $setCustomeReportData
```

### ReportData

```
{
     //the following parameters must be existent
     @.type string                       the outer reported type name
     @.reportType string                 the concrete reported type name
     @.project string                    the reported project name 
     @.projectVersion string             the reported version of the project
     @.reportTime number                 the reported timestamp
     @.data  object                      the reported content
     @.environment string                the runtime envoriment of the report project
     @.location string                   the reported position
     //the following parameters are optional
     @.customeInfo all                   user's custom parameters that can be configured and upload
     @.preTrackData object               the object of monitoring data before being merged, used for forward tracking error 
}
```

	