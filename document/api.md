# Keep-observer-document

### Api - list

```javascript
/************************    keepObserver对象变量    *******************/
	//版本信息
	_version   
    //当前监听的内容:object对象:例如{log:true,network:true,system:false} key为监听类型 value为当
    //value为当前是否正在监听
    observerKey   		

/************************    keepObserver对象方法    *******************/
/*
	自定义设置上报信息
    params: type object
    return :null
    explan: 自定义设置上报内容,改内容在上报数据reportData中字段customInfo中, 使用场景:例如在用户登录后,调用setCustomReport传入用户标识信息,这样上报的数据中将携带当前用户标识
    PS: 此方法在需要记录用户信息，或者其他信息时的场景中特别重要!
*/
setCustomReport(params){}


/*
	停止监听相关内容,key为上面observerKey.key
*/
stopObserver(key){}

/*
	停止监听全部内容
*/
stopAllObserver(){}

/*
	开始监听相关内容,key为上面observerKey.key
*/
startObserver(key){}

/*
	开始监听全部内容
*/
startAllObserver(){}

```

