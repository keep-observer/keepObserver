# KeepObserver

### Function

	KeepObserver本身不提供任务监控服务，以及上报服务，

	仅提供一个管道队列,一个消息队列，提供一个use方法将各服务挂载在自身中,

	各拦截捕获服务上报的数据将捕获的数据,将由消息队列接收，

	管道队列挂载处理服务,接收的消息将在管道消息中进行分发处理

### Config	

```javascript
	/*
		分发队列情况下,是否允许接收消息队列加锁
		default: true
		explain: 在管道消息进行分发时,消息队列将解决新的消息入队
	*/
    queueLock: Boolean,
    /*
    	是否允许定时强制解锁 
    	default: true,
    	explain: 是否允许 接收消息队列锁,定时强制解锁
    */
    timeOutUnlock: Boolean，
     /*
    	接收消息队列默认解锁时间 
    	default: 1000 
    	explain: 定时强制解锁时间，单位ms
    */
    forceUnlockTime: int，
```

### Api 

```javascript
/*
	接收插件服务
	params
		.Provider (type = javascript es6 class)
	return null
	explain:
		此方法用于接收一个符合es6标准的class类,类方法必须提供一个apply函数
		运行步骤：
			1.传入自身config 进行 var providerServer =  new Provider(self.config)
			2.providerServer实例必须提供一个apply方法
			3.调用apply方法 传入pipeMethod和devMethod
                pipeMethod = {
                    //此方法用于接收一个回调函数用来接收管道分发数据
                    registerRecivePipeMessage(receiveCallback,scope)
                    //此方法用于发送一个消息到达消息队列
                    sendPipeMessage(msg, options)
                }
                //由于keePObserverLog，会拦截console相关方法,这里提供开发log
                devMethod = {
                    $devLog  = window.console.log
                    $devWarn = window.console.warn
                    $devError = window.console.error
                }
            4.apply 允许返回一个api对象，keepObserver会遍历此对象，将其提供的api动态挂载在自身，用于对外服务
            5.详细内容请看下方 自定义插件内容
*/
use
```



### 关于自定义插件服务和使用

##### 	关于插件服务：

		keepObserver本身并不提供任何监听服务和上报服务，监听和处理监听完全依靠其插件服务进行

		keepObserver本身仅维持两套消息队列，一套用于接收监听消息，一套用于处理监听消息的分发队列

		keepObserver本身提供use用于挂载插件,其余api均由相关插件服务提供

	关于如何挂载插件

		插件服务必须以符合符合es6 class类对象方式提供

		插件class类必须提供一个apply方法，用于挂载使用

		接收监听消息队列，和处理消息队列，在调用apply方法时，传入相关注册和使用方法

		apply方法可以返回一个api对象，keepObserver将遍历此对象,将提供的api挂载在自身当中，实现对外提供调用

### 相关apply使用例子

#### 1.用于监听相关内容服务插件,例如networkServer 

```javascript
apply(pipe) {
   //通过调用pipe.sendPipeMessage(reportParams, control)发送消息 ,进入消息接收队列
   this.addReportListener(pipe.sendPipeMessage)
   //将$networkStop和$networkStart挂载在keepObserver中对外服务
   return {
   		$networkStop: this.stopObserver,
   		$networkStart: this.startObserver
   }
}
```

#### 2.用于处理监听内容报文服务插件，例如reportServer 

```javascript
apply(pipe) {
    //接收监听管道分发消息，传入一个接收回调
    pipe.registerRecivePipeMessage(this._getReportContent, this)
    //将$setCustomeReportData挂载在keepObserver中对外服务
    return {
        $setCustomeReportData: this.$setCustomeReportData
    }
}
```

