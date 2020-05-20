# KeepObserver

### Function

keepObserver本身只维护一个pipeMQ以及相关middlewareServer服务,所有的监控捕获服务以及上报服务均由插件提供,并提供中间件扩展接口,扩展信息通道</br>

##### 插件定义了如下角色:
    ProducerServer:  提供捕获数据。如log network error 相关catch
    ConsumerServer:  处理接收到的数据。如上报到后台服务器 kibanaAPM
    MiddlerwareServer:   在ProducerServer发起一个消息时,将经过MiddlerwareServerArray的处理才最终达到ConsumerServer，MiddlerwareServer具有interrupt和next的特性,将控制消息是否达到下一个MiddlerwareServer处理或被中断

插件使用use方法进行KeepObserver服务注册,在注册时apply函数将接收相关功能方法

```TypeScript
    
    apply(pipe:PipeUser,config:any){}
    
    type PipeUser = {
         //位置索引
        readonly pipeIndex:number
        //当前注册的中间件命名空间
        readonly middleScopeNames: string['sendMessage','error',...]
        //发送消息->ProducerServer
        public sendMessage:(catchParams:catchParams)=>Promise<{}>
        //扩展上报参数
        public extendsReportParams: (params:any)=>any
        //注册接收消息事件->ConsumerServer使用 ps:当前服务sendMessage发送的消息无法被自己注册的registerReciveMessage回调接收
        public registerReciveMessage: (fn:Function, scope?:any)=>void
        //当前发送结束
        public registerSendDoneCallback: (fn:Function)=>void
        //扩展相关中间件
        public useExtendMiddle: (scopeName:string,middlesFn:middlesFn)=>any
        //激活相关中间件
        public runExtendMiddle:(scopeName:string,...args:any[])=>Promise<{}>   
    }
    
    /************ type ************/
    interface catchParams<T> = {
        type: 'monitor'                         //类型 monitor | performance| analyse | report
        typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
        data: T;                                                                     //捕获数据
        location?: string;                                                                      //捕获位置	
        environment?: string;                                                                   //捕获环境                                                           
        reportTime?: number                                                                     //捕获时间搓
        //标识项
        isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
        isError?: boolean;                                                                      //是否是错误信息
        isPerformance?: boolean;                                                                //是否是性能信息
        isAnalyse?: boolean;
    }
    interface middlesFn {
        (interrupt:Function,next:Function):(...any)=>any
    }
    
    
```



### Config	

```TypeScript
    /*
        请注意,keepObserver接收到的config内容,
        如果使用如下注册方式,则共享
        class Server{
            constructor(config) {}
        }
         /*
        const ko = new keepObserver({test:'testConfig'})
        ko.use(Server)// Server -> constructor(config) -> config={test:'testConfig'}
       
    */
    /**************   以下参数仅为defaultConfig ***************/
	/*
		function:项目名
		default: ''
		explain: 扩展catchParams参数
	*/
    projectName: String,
    /*
    	function:项目版本
    	default: '',
    	explain: 扩展catchParams参数
    */
    projectVersion: String，
     /*
        function:keepObserver当前版本
    	default: package.version 
    */
    version: String，
     /*
    	function: 唯一设备id 
    	default: 随机生成string串
    	explain: 随机生成string串
    */
    deviceID: String，
```

### Api 

```TypeScript
/*
	function:
	    接收插件服务
	params
		.Provider (type = javascript es6 class)
	return 
	    Promise.reject(Error) | Promise.resolve(Provider)
	explain:
		此方法用于接收一个符合es6标准的class类,类方法必须提供一个apply函数
		运行步骤：
			1.检查是否是classObject,或function
			    function: 传入自身config 进行 var providerServer =  new Provider(self.config)
			    classObject: var providerServer = Provider
			2.providerServer实例必须提供一个apply方法
			3.调用apply方法 传入new PipeUser()对象提供相关pipe方法,以及self.config,例：apply(pipe,config)
            4.apply 允许返回一个api对象，keepObserver会遍历此对象，将其提供的api动态挂载在自身，用于对外服务 详细内容请看下方 自定义插件内容
            5.返回一个promise.resolve(providerServer)
*/
use(Provider:new (...args: any[]) => {apply?:(pipe:PipeUser,config:any)=>any}):Promise<any>

/*
   function:
        注册api服务
	params
		.apiName:string
		.cb:(...args:any[])=>any
	return 
	    void
	explain: 
	    注册相关api方法，主要由use中apply返回使用
*/
registerApi(apiName:string,cb:(...args:any[])=>any):void

/*
    function:
        调用api服务
	params
		.apiName:string
		...args:any[]
	return 
	    any
	explain: 
	    调用上面registerApi的注册的方法，并返回其结果
*/
apis(apiName:string,...args:any[]):any

/*
    function:
        注册中间件服务
	params
		.params:any
	return 
	   [propName: string]:middlesFn[]
	explain: 
	    返回当前中间件集合
*/
useMiddle(scopeName:string,middlesFn:middlesFn):{[propName: string]:middlesFn[]}

/*
    function:
        运行中间件
	params
		.scopeName:string,
		...args:any[]
	return 
	   Promise<any>
	explain: 
	    返回当前中间件执行结果->Promise
*/
runMiddle(scopeName:string,...args:any[]):Promise<any>

```

### props
    
```TypeScript
    
    readonly _publicMiddleScopeNames: string[]   // 公共中间件命名集合
    readonly middleScopeNames: string[]   // 中间件命名集合
```





