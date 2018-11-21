
/*
	protobuf use  demo 
	----------------------------------------------
	var root = protobuf.Root.fromJSON(protos);
	var LogGroup = root.lookupType("aliyun.LogGroup");
	console.log(LogGroup)
	var payload = {
	    logs : [{
	        time:  Math.floor(new Date().getTime()/1000), //单位秒
	        contents: [{    //key-value对
	            key: 'a',
	            value: '1'
	        },{
	            key: 'b',
	            value: '2'
	        },{
	            key: 'c',
	            value: '3'
	        }]
	    }],
	    topic: 'topicName', //optional
	    source: '127.0.0.1' //optional
	};
	
	var errMsg = LogGroup.verify(payload);
   	if (errMsg){
       throw Error(errMsg);
   	}
   	var message = LogGroup.create(payload);
   	var buffer = LogGroup.encode(message).finish();
   	console.log(message)
   	console.log(buffer,buffer.length)
*/



import protobuf from 'protobufjs'
import protos from './proto/index.proto'

import CryptoJS from "crypto-js";
import * as tool from './tool.js';
import { addAuthorization } from './signers.js';
import AjaxServer from './ajax.js'


var test = function(){
	var root = protobuf.Root.fromJSON(protos);
	var LogGroup = root.lookupType("aliyun.LogGroup");
	var payload = {
	    logs : [{
	        time:  Math.floor(new Date().getTime()/1000), //单位秒
	        contents: [{    //key-value对
	            key: 'a',
	            value: '1'
	        },{
	            key: 'b',
	            value: '2'
	        },{
	            key: 'c',
	            value: '3'
	        }]
	    }],
	    topic: 'topicName', //optional
	    source: '127.0.0.1' //optional
	};
	
	var errMsg = LogGroup.verify(payload);
   	if (errMsg){
       throw Error(errMsg);
   	}
   	var message = LogGroup.create(payload);
   	var buffer = LogGroup.encode(message).finish();
   	return buffer
}





export var pullLog = function(){
	var AccessKeyID = 'LTAIHmp13NIaKKRK',
		AccessKeySecret = 'sOLmfjBRpx8tp7ixP3q8tzGxuASLy8',
		SLSPoint = 'cn-shenzhen.log.aliyuncs.com',
		projectName = 'qncx-h5',
		logStoreName = 'log';
	var payload = test();
	var md5Payload = CryptoJS.MD5(payload).toString()
	var url = window.location.protocol+'//'+SLSPoint+'/logstores/'+logStoreName
	var host = projectName+'.'+SLSPoint
	var date = new Date();

	var requestHead = {
		'Content-MD5':md5Payload,
		'Content-Length': payload.length,
		'Host':host,
		'Date': tool.getDateRFC822(date),
		'Content-Type':'application/x-protobuf',
		'x-log-apiversion':'0.6.0',
		'x-log-signaturemethod':'hmac-sha1',
		'x-log-bodyrawsize':payload.length,
		'x-log-date':tool.getDateRFC822(date),
	}
	var Authorization = addAuthorization({
		requestHead:requestHead,
		requestURL:url,
	},{
		AccessKeyID : AccessKeyID,
		AccessKeySecret : AccessKeySecret,
		date:date
	})
	requestHead['Authorization'] = Authorization
	AjaxServer({
		url:url,
		customeHead:requestHead,
		data:payload
	})
}




