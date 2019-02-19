import * as tool from '../../../tool/index.js';
import * as assist from './tool.js'
import { RecordKey,exitBackstageFlag } from './constant.js'


var attributeKey = 'keepObserverUniqueID'


//注册相关DOM埋点检测事件服务
export var registerAnalyseDomEvent = function(el,fn){
	var that = this;
	var type = el.tagName.toLowerCase();
	var timeoutDispatchEvent = that._config.timeoutDispatchEvent
	//修正激活元素的事件
	var event = 'click'
	if(type === 'input' || type ==='textarea' || type ==='select'){
		event = 'change'
	}
	//handle other event
	var handleEvent = function(eventInstance){
		eventInstance  = eventInstance || window.event;
		if(eventInstance.stopImmediatePropagation){
			//延时手动触发
			setTimeout(function(){
				that.triggerEventListener(eventInstance,event)
			},timeoutDispatchEvent)
			//埋点激活
			fn()
			eventInstance.stopImmediatePropagation();
		}else{
			fn()
		}
	}
	//重新挂载事件,埋点事件排列到首位
	that.resetEventListener(el,event,handleEvent)
	//return destroyEvent
	return function(){
		if(el && tool.isElement(el)){
			that._removeEventListener.apply(el,[event,handleEvent])
		}
		event = null;
		type = null;
	}
}





//重排DOM事件监听队列,埋点事件排列到首位,set event observer
export var resetEventListener = function(el,eventName,handleEvent){
	var that = this;
	var id = el.getAttribute(attributeKey)
	if(!id || !that._domListener[id]){
        that._addEventListener.apply(el,[eventName,handleEvent])
		return false;
	}
	var eventListener = that._domListener[id]
	var eventList = eventListener.eventList[eventName]
	if(tool.isEmptyArray(eventList)){
        //set event observer
        that._addEventListener.apply(el,[eventName,handleEvent])
		return false;
	}
	//remove
	eventList.forEach(function(item){
		that._removeEventListener.apply(el,[eventName,item])
	})
    //set event observer queue frist
    that._addEventListener.apply(el,[eventName,handleEvent])
	//reset
	eventList.forEach(function(item){
		that._addEventListener.apply(el,[eventName,item])
	})
}





//手动激活当前事件队列
export var triggerEventListener = function(event,eventName){
	var that = this;
	var el = event.target
	var id = el.getAttribute(attributeKey)
    var step = 1;
    var maxError = 5000;
    var eventList = []
    var eventListener = false;
    //向上冒泡
    do{
        if(id && that._domListener[id]){
            eventListener = that._domListener[id]
            eventList = eventList.concat(eventListener.eventList[eventName])
        }
        if(el.parentNode && tool.isElement(el.parentNode)){
            el = el.parentNode
            id = el.getAttribute(attributeKey) 
        }
    }
    while(el.parentNode && tool.isElement(el.parentNode) && step < maxError);
    //check
	if(tool.isEmptyArray(eventList)){
		return false;
	}
	//trigger
	eventList.forEach(function(item){
		try{
			item.call(el,event)
		}catch(e){
			that.$devError('[keepObserver] analyseServer simpleH5: triggerEventListener  error: '+e)
		}
	})
}






//拦截原生方法EventTarget
export var _handleEventTarget = function(){
    var that = this;
    if(window.Node && Node.prototype.addEventListener){
        //替换
        that._addEventListener = Node.prototype.addEventListener
        that._removeEventListener = Node.prototype.removeEventListener
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
                that.$devError('element addEventListener params error')
                return false;
            }
            //判断是否是DOM
            if(tool.isElement(target)){
                var id = target.getAttribute(attributeKey)
                if(id){
                    var domListenerInstance = that._domListener[id]
                }else{
                    id = tool.getUniqueID()
                    var domListenerInstance = {
                        eventList:{},
                        target:target
                    }
                    target.setAttribute(attributeKey,id)
                }
                //添加事件拦截名称缓存
                if(!domListenerInstance.eventList[args[0]]){
                    domListenerInstance.eventList[args[0]] = []
                }
                domListenerInstance.eventList[args[0]].push(args[1])
                that._domListener[id] = domListenerInstance
            }
            //挂载原生方法上
            return that._addEventListener.apply(target,args)
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
                that.$devError('element addEventListener params error')
                return false;
            }
            //判断是否是DOM
            if(tool.isElement(target)){
                var id = target.getAttribute(attributeKey)
                if(id){
                    target.removeAttribute(attributeKey)
                    //这里可能存在绑定多个事件的情况,直接删除可能会导致问题.需要优化
                    delete that._domListener[id]
                }
            }
            return that._removeEventListener.apply(target,args)
        }
    }else{
        that.$devError('[keepObserver] analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener')
        return false
    }
    return true
}





//恢复原生方法
export var _recoverEventTarget = function(){
	if(window.Node && Node.prototype.addEventListener){
        Node.prototype.addEventListener =  this._addEventListener
        Node.prototype.removeEventListener = this._removeEventListener
    }else{
        that.$devError('[keepObserver] analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener')
        return false
    }
    this._removeEventListener = false;
    this._addEventListener = false;
}





