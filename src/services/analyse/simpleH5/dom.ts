import * as tool from '../../../util/tool';



var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;


var domIndex = 1;
var repeatIndex = 1;





//处理监听DOM事件
export var handleAnalyseDomList = function(analyseDomList,activeFn){
    var that = this;
    var newAnalyseDomList = {};
    var statusBuff = {};
    //for start
    analyseDomList.forEach(function(item){
        //check type
        if(!tool.isString(item) && !tool.isElement(item)){
            that.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not string or not domElement')
            return false;
        }
        var el = tool.isElement(item)? item : document.querySelector(item);
        if(!el || !tool.isElement(el)){
            that.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not find domElement')
            return false;
        }
        //handle el
        var title = that.getDomTitle(el)
        if(newAnalyseDomList[title]){
            title += '-'+repeatIndex; 
            repeatIndex++;
        }
        statusBuff[title] = false;
        //register actice use event
        var destroyEvent = that.registerAnalyseDomEvent(el,function(event){
            statusBuff[title] = true;
            if(activeFn && tool.isFunction(activeFn)){
                activeFn(event);
            }
        })
        var getActiveStauts = function(title){
            return function(){
                return statusBuff[title]
            }
        }
        //return dom
        newAnalyseDomList[title] = {
             destroyEvent:destroyEvent,
             getActiveStauts:getActiveStauts(title)
         }
    })
    //end
    return newAnalyseDomList
}








//获取dom-title标记
export var getDomTitle = function(el){
	var type = el.tagName.toLowerCase();
	var content = '';
	//获取内容
	if(el.outerText && CN_CodeReg.test(el.outerText)){
		content = el.outerText
		content = content.replace(Clear_CN_CodeReg,'')
	}else if(el.textContent && CN_CodeReg.test(el.textContent)){
		content = el.textContent.replace(Clear_CN_CodeReg,'')
	}else if(el.className !== ''){
		content = '.'+el.className
	}else {
		content = ''+domIndex;
		domIndex++;
	}
	return  type+':'+content;
}	









