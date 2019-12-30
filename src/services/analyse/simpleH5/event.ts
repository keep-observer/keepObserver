import { consoleTools,tool } from '@util/index'




var attributeKey = 'keepObserverUniqueID'+tool.getUniqueID().substring(0,8)


//注册相关DOM埋点检测事件服务
export var registerAnalyseDomEvent = function(el,fn){
	var _self = this;
	var type = el.tagName.toLowerCase();
	var timeoutDispatchEvent = _self._config.timeoutDispatchEvent
	//修正激活元素的事件
	var event = 'click'
	if(type === 'input' || type ==='textarea' || type ==='select'){
		event = 'change'
	}
	//重新挂载事件
	_self._addEventListener.apply(el,[event,fn])
    //set sgin
    el.setAttribute(attributeKey,true)
	//return destroyEvent
	return function(){
		if(el && tool.isElement(el)){
			_self._removeEventListener.apply(el,[event,fn])
		}
		event = null;
		type = null;
	}
}




//拦截原生方法EventTarget
export var _handleEventTarget = function(){
    var _self = this;
    var timeoutDispatchEvent = _self._config.timeoutDispatchEvent
    if((<any>window).Node && Node.prototype.addEventListener){
        //替换
        _self._addEventListener = Node.prototype.addEventListener
        _self._removeEventListener = Node.prototype.removeEventListener
        //拦截
        Node.prototype.addEventListener = function(){
            var target = this;
            var args = tool.toArray(arguments);
            /*
                validata params
                [0] = string eventName
                [1] = function eventHandleFunction
            */
            if(args.length < 2 || !tool.isString(args[0]) || !tool.isFunction(args[1])){
                consoleTools.warnError('element addEventListener params error')
                return false;
            }
            //patch = args[1] = eventHandleFunction setTimeout 
            var handle = args[1]
            args[1] = function(){
                var sgin = target.getAttribute(attributeKey)
                var handleArgs = tool.toArray(arguments)
                // observer target dom
                if(sgin){
                    return setTimeout(function(){
                        handle.apply(target,handleArgs) 
                    },timeoutDispatchEvent)
                }
                return handle.apply(target,handleArgs) 
            }
            //挂载原生方法上
            return _self._addEventListener.apply(target,args)
        }
        Node.prototype.removeEventListener = function(){
            var target = this;
            var args = tool.toArray(arguments);
            /*
                validata params
                [0] = string eventName
                [1] = function eventHandleFunction
            */
            if(args.length < 2 || !tool.isString(args[0]) || !tool.isFunction(args[1])){
                consoleTools.warnError('element removeEventListener params error')
                return false;
            }
            return _self._removeEventListener.apply(target,args)
        }
    }else{
        consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener')
        return false
    }
    return true
}





//恢复原生方法
export var _recoverEventTarget = function(){
	if((<any>window).Node && Node.prototype.addEventListener){
        Node.prototype.addEventListener =  this._addEventListener
        Node.prototype.removeEventListener = this._removeEventListener
    }else{
        consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener')
        return false
    }
    this._removeEventListener = false;
    this._addEventListener = false;
}





