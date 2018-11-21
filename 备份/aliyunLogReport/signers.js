

import * as tool from './tool.js';
import CryptoJS from "crypto-js";



//添加签名验证
export var addAuthorization = function(requestItem,option){
	var { AccessKeyID,AccessKeySecret,date } = option;
	//生成签名
	var sign = stringToSign(requestItem);
	var UTF8sign = CryptoJS.enc.Utf8.parse(sign)
	var encrypted =  CryptoJS.HmacSHA1(UTF8sign,AccessKeySecret)
	var Signature = CryptoJS.enc.Base64.stringify(encrypted)
	var Authorization  = 'LOG ' + AccessKeyID + ':' + Signature;
	return Authorization
}




//生成请求签名
var stringToSign = function(requestItem){
	var signers = [];
	var requestHead = requestItem.requestHead
	var method = 'POST'
	//添加方法
	signers.push(method)
	signers.push(requestHead['Content-MD5'] || '')
	signers.push(requestHead['Content-Type'] || '')
	signers.push(requestHead['Date'] || '')

	var amzHeader = canonicalizedAmzHeaders(requestItem);
	if(amzHeader){
		signers.push(amzHeader)
	}
	signers.push(canonicalizedResource(requestItem))

	return signers.join('\n');
}




var canonicalizedAmzHeaders = function(requestItem){
	var amzHeaders = [];
	var requestHead = requestItem.requestHead
	for(var name in requestHead){
		if (name.match(/^x-log-/i) || name=='x-acs-security-token'){
			amzHeaders.push(name);
		}
	}
	amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });
    var parts = [];
    amzHeaders.forEach(function(name){
    	parts.push(name.toLowerCase() + ':' + requestHead[name].toString());
    })
    return parts.join('\n');
}






var canonicalizedResource = function(requestItem){
	var that = this;
	var amzHeaders = [];
	var PATH = requestItem.requestURL

	//路径和查询
	var path = '';
	var query = [];
	var resource = '';
	var querystring = false;
	//获取路径
	var parts = PATH.split('?')
	if(parts.length > 1){
	 	path = parts[0];
    	querystring = parts[1];
	}else{
		path = PATH
	}
	resource += decodeURIComponent(path);
	//如果存在查询
	if (querystring) {
	     var resources = [];
	     var arr = querystring.replace(/(^&*)|(&*$)/g,'').split('&');
	     if(Array.isArray(arr)){
	      	arr.forEach(function(param){
	      		var kv = param.split('=');
	        	var name = kv[0];
	        	//修复topic中带有 / 等字符，签名报错
	        	var value = (kv.length>1)? decodeURIComponent(kv[1]):'';
	        	/*jshint undef:false */
		        var resource = { name: name };
		        if (value !== undefined) {
		          resource.value = value;
		        }
		        resources.push(resource);
	      	})
	    }
	    resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
	    if (resources.length) {
	        querystring = [];
	        resources.forEach(function (resource) {
	          if (resource.value === undefined)
	            querystring.push(resource.name);
	          else
	            querystring.push(resource.name + '=' + resource.value);
	        });
	        resource += '?' + querystring.join('&');
      	}
    }
    return resource;
}






