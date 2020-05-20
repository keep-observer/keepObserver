# KeepObserver

### Function

KeepObserver itself only maintains one pipeMQ and the relevant middlewareServer services. All the monitoring capture services and escalation services are provided by the plug-in, and the middleware extension interface is provided to extend the information channel</br>

##### The plug-in defines the following roles:
    ProducerServer:     provides capture data. For example, log network error is related to catch
    ConsumerServer:     processing the received data. Check the background server kibanaAPM above
    MiddlerwareServer:  When ProducerServer initiates a message, it is processed by MiddlerwareServerArray to the ConsumerServer. Middlerwareserverhas the properties of interrupt and next and controls whether the message reaches the next MiddlerwareServer or is interrupted

The plug-in registers the KeepObserver service using the use method, and at the time of registration the apply function will receive the relevant functional methods

```TypeScript
    
    apply(pipe:PipeUser,config:any){}
    
    type PipeUser = {
        //index
        readonly pipeIndex:number
        //The currently registered middleware namespace
        readonly middleScopeNames: string['sendMessage','error',...]
        //send Message->ProducerServer
        public sendMessage:(catchParams:catchParams)=>Promise<{}>
        //Extended escalation parameter
        public extendsReportParams: (params:any)=>any
        //Register to receive message events - used by >ConsumerServer
        //ps:The message sent by the current service sendMessage could not be received by the registerReciveMessage callback that registered itself
        public registerReciveMessage: (fn:Function, scope?:any)=>void
        //End of current send
        public registerSendDoneCallback: (fn:Function)=>void
        //Extended correlation middleware
        public useExtendMiddle: (scopeName:string,middlesFn:middlesFn)=>any
        //Activate correlation middleware
        public runExtendMiddle:(scopeName:string,...args:any[])=>Promise<{}>   
    }
    
    /************ type ************/
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
    interface middlesFn {
        (interrupt:Function,next:Function):(...any)=>any
    }
    
    
```



### Config	

```TypeScript
    /*
    
        Note that the config content received by keepObserver,
        Share if the following registration method is used
        
        class Server{
            constructor(config) {}
        }
         /*
        const ko = new keepObserver({test:'testConfig'})
        ko.use(Server)// Server -> constructor(config) -> config={test:'testConfig'}
       
    */
    /**************   he following parameters are only defaultConfig ***************/
	/*
		function:projectName
		default: ''
		explain: Expand the catchParams parameter
	*/
    projectName: String,
    /*
    	function:projectVersion
    	default: '',
    	explain: Expand the catchParams parameter
    */
    projectVersion: String，
     /*
        function:keepObserver version
    	default: package.version 
    */
    version: String，
     /*
    	function: Unique device id 
    	default: Randomly generate a string string
    	explain: Randomly generate a string string
    */
    deviceID: String，
```

### Api 

```TypeScript
/*
	function:
	    Receive plug-in service
	params
		.Provider (type = javascript es6 class)
	return 
	    Promise.reject(Error) | Promise.resolve(Provider)
	explain:
        This method is used to receive a class that meets the es6 standard, and the class method must provide an apply function
		Running steps：
			1. Check if it's classObject, or function
			    function: Pass in your own config -> var providerServer =  new Provider(self.config)
			    classObject: var providerServer = Provider
			2.The providerServer instance must provide an apply method
			3.Call the apply method to pass in the new PipeUser() object to provide the associated pipe method, as well as self.config, example: apply(pipe,config))
            4.Apply allows you to return an API object that keepObserver iterates over, dynamically mounts the API it provides on itself, and for external service details, see the custom plug-in content below
            5.Return a promise.resolve(providerServer)
*/
use(Provider:new (...args: any[]) => {apply?:(pipe:PipeUser,config:any)=>any}):Promise<any>

/*
   function:
        registerApi
	params
		.apiName:string
		.cb:(...args:any[])=>any
	return 
	    void
	explain: 
	    Register the relevant API methods, which are returned for use mainly by apply in use
*/
registerApi(apiName:string,cb:(...args:any[])=>any):void

/*
    function:
        Calling API
	params
		.apiName:string
		...args:any[]
	return 
	    any
	explain: 
	    Call the registered method at registerApi above and return its result
*/
apis(apiName:string,...args:any[]):any

/*
    function:
        Registry middleware service
	params
		.params:any
	return 
	   [propName: string]:middlesFn[]
	explain: 
	    Returns the current middleware collection
*/
useMiddle(scopeName:string,middlesFn:middlesFn):{[propName: string]:middlesFn[]}

/*
    function:
        Running middleware
	params
		.scopeName:string,
		...args:any[]
	return 
	   Promise<any>
	explain: 
	    Returns the current middleware execution result ->Promise
*/
runMiddle(scopeName:string,...args:any[]):Promise<any>

```

### props
    
```TypeScript
    
    readonly _publicMiddleScopeNames: string[]   // public Middle Scope Names
    readonly middleScopeNames: string[]   // middle Scope Names
```





