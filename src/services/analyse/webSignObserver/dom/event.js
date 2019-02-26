import md5 from 'md5'
import * as tool from '../../../../tool/index.js';
import { parseXpath } from './xpath.js'


var attributeKey = 'keepObserverUniqueID'+tool.getUniqueID().substring(0,8)





//初始化替换node.addEventListener方法
export var initPatchNodeEvent = function(){
    var that = this;
    var timeoutDispatchEvent = that._config.timeoutDispatchEvent
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
            //patch = args[1] = eventHandleFunction setTimeout 
            var handle = args[1]
            args[1] = that.nodeEventPatchHandle(target,handle)
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
                that.$devError('element removeEventListener params error')
                return false;
            }
            //获取保存的handle remove
            var id = md5(target.nodeName.toLowerCase() + args[1].toString())
            var patchHandleFn = that._patchEventListenerMap[id]
            if(!patchHandleFn || !tool.isFunction(patchHandleFn)){
                that.$devError('element removeEventListener not find save PatchHandleFn')
                return false;
            }
            args[1] = patchHandleFn
            //remove
            return that._removeEventListener.apply(target,args)
        }
    }else{
        that.$devError('[keepObserver] analyseServer webSignObserver: borwser not can EventTarget.prototype.addEventListener')
        return false
    }
    return true
}




//替换函数执行 并且保存到缓存，为了remove做准备
export var nodeEventPatchHandle = function(el,handleFn){
    var that = this;
    var timeoutDispatchEvent = that._config.timeoutDispatchEvent
    var id = md5(el.nodeName.toLowerCase() + handleFn.toString())
    var patchHandleFn = function(){
        var sgin = el.getAttribute(attributeKey)
        var handleArgs = tool.toArray(arguments)
        // observer target dom
        if(sgin){
            return setTimeout(function(){
                handleFn.apply(el,handleArgs) 
            },timeoutDispatchEvent)
        }
        return handleFn.apply(el,handleArgs) 
    }
    that._patchEventListenerMap[id] = patchHandleFn
    return patchHandleFn
}






