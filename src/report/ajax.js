

import * as tool from '../tool/tool.js';




/*
	处理url挂载参数
 */
var handleUrlParams = function(url,params){
	if(url.indexOf('?') === -1){
		url += '?';
	}else{
		url += (url.indexOf('&') === -1)? '&':'';
	}
	for(var key in params){
		url += key+'=';
		url += params[key].toString()+'&'
	}
	url = url.substring(0,url.length -1);
	return url;
}


/*
	上报ajax请求
	params
		config = {
			url: 			上报url
			data:  			上报数据
			params: 		上报url上是否挂载参数
			customeHead:    上报自定义请求头     
		}
	return 
		promise
 */
var AjaxServer = function(config){
	//创建一个Promise回调
	var defer  = new Promise(function(res,rej){
		var { url , data, params, customeHead } = config;
		var resHead = {};
		//判断数据
		if(!url || !data){
			rej('上报数据失败:上报url和data不能为空')
			return false;
		}
		//是否需要挂载参数
		if(params && tool.isObject(params)){
			url = handleUrlParams(url,params);
		}
		//开始请求
		var xhr = new XMLHttpRequest();
		xhr.open('POST',url,true)
		//处理请求头
		var xhrHead  = {
			'Content-Type': 'application/json;charset=UTF-8',
		};
		if(customeHead && tool.isObject(customeHead)){
			xhrHead = tool.extend(xhrHead,customeHead)
		}
		xhrHead['keepObserver-reportAjax'] = 'yes';
		for(var key in xhrHead){
			xhr.setRequestHeader(key,xhrHead[key]);
		}
		//监听回调
		xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
            	//防止跨域等问题  触发错误导致死循环
            	try{
            		//处理响应头
	            	if(xhr && xhr.getAllResponseHeaders){
	 		          	var header = xhr.getAllResponseHeaders() || '',
			             	headerArr = header.split("\n");
			          	//提取数据
			          	for (let i=0; i<headerArr.length; i++) {
			            	let line = headerArr[i];
			            	if (!line) { continue; }
			            	let arr = line.split(': ');
			            	let key = arr[0],
			                value = arr.slice(1).join(': ');
			            	resHead[key] = value;
			          	}
	            	}
	                if (xhr.status == 200) {
	                	var result = {
	                		head:resHead,
	                		data:xhr.responseText,
	                	}
	                    res(result)
	                } else {
	                    rej('请求出现错误!错误状态码:'+xhr.status)
	                }
            	}catch(e){
            		rej('请求出现错误!'+e)
            	}
            	//end
            }
        };
        xhr.onerror = function(e){
        	rej('请求出现错误!'+e)
        }
        //发送数据
        var data = JSON.stringify(data);
        xhr.send(data);
	})
	return defer
}



export default AjaxServer
