# keepObserver

### Function

KeepObserver does not provide task monitoring services  or reporting services itself.

it providing a pipeline queue,a message queue,and offering a use method to mount all services in itself.

The data captured by each interception capture service will be received by the message queue and then handled by the pipeline queue. The received message will be distributed in the pipeline message.



### Config

```javascript
	/*
		is it allow receiving message queue in the case of distribution queue?
		default: true
		explain: the message queue will solve the new message while the pipeline message is distributing.
	*/
    queueLock: Boolean,
    /*
    	is it allow timing and force unlock?
    	default: true,
    	explain: allow or not, lock of the recevied message queue,timing and force unlock
    */
    timeOutUnlock: Boolean，
     /*
    	default deactivation time of the received message queue
    	default: 1000 
    	explain: timed mandatory release time， unit ms
    */
    forceUnlockTime: int，
```

### Api 

```javascript
/*
	the service of receiving plug-in
	params
		.Provider (type = javascript es6 class)
	return null
	
	explain: This method is used to receive a class which meets the es6 standard and the class must provide a apply function.
	
		Running step：
			1.delivering config and creating an instance: var providerServer =  new Provider(self.config)
			2.the instance of providerServer must provide a apply method
			3.invocating apply method and transmit pipeMethod and devMethod
                pipeMethod = {
                    //this method is used to receice a callback funcion to receive pipeline distribution data.
                    registerRecivePipeMessage(receiveCallback,scope)
                    // this method is used to send a message to the message queue.
                    sendPipeMessage(msg, options)
                }
               //Here offers develop log for the reason that keepObserverLog will intercept the related method of console,
                devMethod = {
                    $devLog  = window.console.log
                    $devWarn = window.console.warn
                    $devError = window.console.error
                }
            4.The apply method allows you to return an API object that keepObserser traverses and dynamically mounts the API, providing for external service.
            5.for more detail, see contents of custom plugin below.
*/
use
```

### introduce and using about the service of custom plugin

##### about service  plug-in:

KeepObserver does not provide task monitoring services  or reporting services itself, monitoring and processing monitoring relies entirely on its plug-in service.

The keepObserver itself maintains only two sets of message queues, one for receiving monitoring data and one for processing the distribution queue for monitoring message.

keepObserver itself provide a use method for mounting plug-in, and the rest of API is provided by related plug-in services.

about how to mount plug-in:

​	the class about plug-in service must  be meets the es6 and  class object standard syntax.

​	the class about plug-in service must provide an apply method for mounting. 

receiving monitoring message queue and processing message queue, transmit related register and using method while calling apply method.

​        The apply method allows you to return an API object that keepObserser traverses and dynamically mounts the API, providing for external service.

### example for using apply method

#### 1.plug-in for monitoring related content services,e.g. networkServer 

```javascript
apply(pipe) {
   //sending message through calling pipe.sendPipeMessage(reportParams, control), entering message receiving queue.
   this.addReportListener(pipe.sendPipeMessage)
   //mounting $networkStop and $networkStart in external service in keepObserver
   return {
   		$networkStop: this.stopObserver,
   		$networkStart: this.startObserver
   }
}
```

#### 2.plug-in for handling monitoring related reporting content service，e.g. reportServer 

```javascript
apply(pipe) {
    //receiving monitoring pipeline distribution messages, transmit a receiving callback function
    pipe.registerRecivePipeMessage(this._getReportContent, this)
    //mounting $setCustomeReportData in external service in keepObserver
    return {
        $setCustomeReportData: this.$setCustomeReportData
    }
}
```

