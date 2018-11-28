import * as tool from '../../../tool/index.js';



var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;


var domIndex = 1;
var repeatIndex = 1;


//处理监听DOM事件
export var handleAnalyseDomList = function(analyseDomList){
    var that = this;
    var newAnalyseDomList = {};
    //for start
    for(var i=0 ,len = analyseDomList.length; i<len ;i++){
        var item = analyseDomList[i]
        //check type
        if(!tool.isString(item) && !tool.isElement(item)){
            this.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not string or not domElement')
            continue;
        }
        var el = tool.isElement(item)? item : document.querySelector(item);
        if(!el || !tool.isElement(el)){
            this.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not find domElement')
            continue;
        }
        //handle el
        var title = this.getDomTitle(el)
        var activeStatus = false;
        //register actice use event
        var destroyEvent = this.registerAnalyseDomEvent(el,function(){
        	activeStatus = true;
        })
        var getActiveStauts = function(){
        	return activeStatus
        }
        //return dom
        if(!newAnalyseDomList[title]){
        	newAnalyseDomList[title] = {
        		destroyEvent:destroyEvent,
        		getActiveStauts:getActiveStauts
        	}
        }else{
        	title += '-'+repeatIndex
        	repeatIndex++;
        	newAnalyseDomList[title] = {
        		destroyEvent:destroyEvent,
        		getActiveStauts:getActiveStauts
        	}
        }
    }
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
		content = domIndex;
		domIndex++;
	}
	return  type+':'+content;
}	









