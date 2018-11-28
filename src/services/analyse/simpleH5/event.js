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






//注册浏览器切换后台或者退出上报事件
export  var registerBrowserEndEvent = function(fn){
    var timeOUT = false
    //浏览器退出处理
    var browserEndHandle = function(){
        timeOUT = setTimeout(function(){
            if(fn && tool.isFunction(fn)){
                fn();
            }
        },20)
    }
    //浏览器隐藏处理
    var browserHideHandle = function(){
        if(timeOUT && !assist.isHidden()){
            cleartTimeout(timeOUT)
            timeOUT = false;
        }
        if(assist.isHidden() && fn && tool.isFunction(fn)){
            tool.setSessionStorage(exitBackstageFlag,true)
            fn();
        }
    }
    //浏览器退出
    window.addEventListener('beforeunload',browserEndHandle)
    //浏览器可能切换到后台
    if(document){
        document.addEventListener('visibilitychange',browserHideHandle)
    }else{
        window.addEventListene('load',function(){
            document.addEventListener('visibilitychange',browserHideHandle)
        })
    }
    //返回一个注销事件
    return function(){
        window.removeEventListener('beforeunload',browserEndHandle);
        document.removeEventListener('visibilitychange',browserHideHandle);
        browserEndHandle = null;
        browserHideHandle = null;
    }
}










