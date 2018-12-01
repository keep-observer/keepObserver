import * as tool from '../../../tool/index.js';
import * as assist from './tool.js'
import { RecordKey,exitBackstageFlag } from './constant.js'



//注册相关DOM埋点检测事件服务
export var registerAnalyseDomEvent = function(el,fn){
	var type = el.tagName.toLowerCase();
	//修正激活元素的事件
	var event = 'click'
	if(type === 'input' || type ==='textarea' || type ==='select'){
		event = 'change'
	}
	//set event observer
	el.addEventListener(event,fn)
	//return destroyEvent
	return function(){
		if(el && tool.isElement(el)){
			el.removeEventListener(event,fn);
		}
		event = null;
		type = null;
	}
}











