import * as tool from '../../../tool/index.js';
import * as assist from './tool.js'
import { RecordKey,exitBackstageFlag } from './constant.js'



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
	var dispatchFlag = false;
	//handle other event
	var handleEvent = function(event){
		if(event.stopImmediatePropagation && el.dispatchEvent){
			if(!dispatchFlag){
				setTimeout(function(){
					el.dispatchEvent(event)
				},timeoutDispatchEvent)
				fn()
				dispatchFlag = true;
				event.stopImmediatePropagation();
			}else{
				setTimeout(function(){
					dispatchFlag = false;
				})
			}
		}else{
			fn()
		}
	}
	//set event observer
	el.addEventListener(event,handleEvent)
	//return destroyEvent
	return function(){
		if(el && tool.isElement(el)){
			el.removeEventListener(event,handleEvent);
		}
		event = null;
		type = null;
	}
}













