# KeepObserverNetwork

### Function

    inset to intercept the browser's function window.XMLHttpRequest, intercept and capture all requests, and it's able to capture the interface that responds timeout by configurating the timeout time

### Config	

```javascript
networkCustom :{	
	/*
		ajax Response is timeout time (ms)	
		default: 20000, 20s
		explain: ''
	*/
    timeout: int,
    /*
    	ignore URL 
    	default: false,
    	explain: 
            the example of passing params by array if ignore the request address
            ignoreRequestList: [
                'vdata.amap.com',
                '/api/content/detail/',
                'restapi.amap.com',
                'hot-update'
            ],
    */
    ignoreRequestList: Boolean or Array，
    /*
    	interface of custom judgement, return whether it's correct
    	default: false,
    	explain: 
            the callback hook of custom judgement request
    		function(ajaxInfo)
            params:ajaxInfo:{
            //	method:   			the request's method
            //	url:      			the request's baseUrl
            //	reqHead:     		the request's head
            //	resHead:        	the response's head
            //	params:   			the parameters with the request's URL
            //	data:       		the request's postData 
            //	status:         	the request's status code
            //	startTime:      	the request's startTime
            //	endTime:        	the request's endTime
            //	costTime:       	the request's time-consuming
            //	response: 			the origin response data of the request
            //	responseType    	the response type of the request
            },
            return: return the error errorMessage:type string which will be recorded into errorContent and report immediately if the judgement of response data is incorrect, or return false if the interface respond correctly
            ps: it means the interface is true if it returns false, otherwise it means the interface is incorrect then record the returned content into the variable errorContent and report to server immediately
    */
	onHandleJudgeResponse: Boolean or Function,
	/*
		custom processing the response data
		default: false,
    	explain: 
            the callback hook to custom processing response data, applies to encrypted transmission
        	function(ajaxInfo);
        	params:ajaxInfo     the same as above
        	return the custom processed information
            explan: do the decryption operation here to decrypt the encrypted response data in some web projects which use encrypted request
	*/
	onHandleResponseData : Boolean or Function,
	/*
		custom processing the request data
		default: false,
    	explain: 
            the callback hook to custom processing request data, applies to encrypted transmission
        	function(ajaxInfo);
        	params:ajaxInfo     the same as above
        	return the custom processed information
        	explan: do the decryption operation here to decrypt the encrypted request data in some web projects which use encrypted request
	*/
	onHandleRequestData : Boolean or Function,
}
```

### Api 

```javascript
	/*
		stop monitor	
		params: null,
		return: null
		explain: 
	*/
    $networkStop
    /*
    	start monitor 
    	params: null,
		return: null
		explain: 
    */
    $networkStart
```

### pipeQueueReportData

```
{
        method:   			the request's method
        url:      			the request's baseUrl
        requestHead:     	the request's head
        responseHead:       the response's head
        params:   			the parameters with the request's URL
        data:       		the request's postData 
        status:         	the request's status code
        startTime:      	the request's startTime
        endTime:        	the request's endTime
        costTime:       	the request's time-consuming
        response: 			the raw response data of the request
        responseType    	the response type of the request
        handleResData:     	the Processed response data will be reserved if the response data of custom handling is passed in the config 
        handleReqData:      the Processed request data will be reserved if the request data of custom handling is passed in the config 
        isTimeout:          whether handle timeout situation. if this field exist, it means the data is already reported and ignore handling it
        timeout:            the timeout value if the parameter isTimeout is set to true
        isError:            whether the request occur error
        errorContent:       the error information
}
```

	