import * as tool from '../tool/index.js';




/*
	处理url挂载参数
	handle url paramns
 */
var handleUrlParams = function(url, params) {
    if (url.indexOf('?') === -1) {
        url += '?';
    } else {
        url += (url.indexOf('&') === -1) ? '&' : '';
    }
    for (var key in params) {
        url += key + '=';
        url += params[key].toString() + '&'
    }
    url = url.substring(0, url.length - 1);
    return url;
}




/*

 	report data Ajax request
	上报ajax请求  
	params
		config = {
			url: 			上报url 				report url
			data:  			上报数据 				report data
			params: 		上报url上是否挂载参数 	report url on params
			customeHead:    上报自定义请求头     	report custome request header
		}
	return 
		Promise
 */
var AjaxServer = function(config) {
    //创建一个Promise回调
    //new Promise
    var defer = new Promise(function(res, rej) {
        var {
            url,
            data,
            params,
            customeHead
        } = config;
        var resHead = {};
        //judge data
        if (!url || !data) {
            rej('report data fail, report url and report data is exist undefined!')
            return false;
        }
        //can is use params
        if (params && tool.isObject(params)) {
            url = handleUrlParams(url, params);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true)
        //handle request header flag
        var xhrHead = {
            'Content-Type': 'application/json;charset=UTF-8',
        };
        if (customeHead && tool.isObject(customeHead)) {
            xhrHead = tool.extend(xhrHead, customeHead)
        }
        xhrHead['keepObserver-reportAjax'] = 'yes';
        for (var key in xhrHead) {
            xhr.setRequestHeader(key, xhrHead[key]);
        }
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
                //防止跨域等问题  触发错误导致死循环
                //Prevent problems such as cross-domain triggering errors that lead to dead loops
                try {
                    //handle response headers
                    if (xhr && xhr.getAllResponseHeaders) {
                        var header = xhr.getAllResponseHeaders() || '',
                            headerArr = header.split("\n");

                        //get data
                        for (let i = 0; i < headerArr.length; i++) {
                            let line = headerArr[i];
                            if (!line) {
                                continue;
                            }
                            let arr = line.split(': ');
                            let key = arr[0],
                                value = arr.slice(1).join(': ');
                            resHead[key] = value;
                        }
                    }
                    if (xhr.status == 200) {
                        var result = {
                            head: resHead,
                            data: xhr.responseText,
                        }
                        res(result)
                    } else {
                        rej('Ajax request process find error! error status code:' + xhr.status)
                    }
                } catch (e) {
                    rej('Ajax request process find error!' + e)
                }
                //end
            }
        };
        xhr.onerror = function(e) {
            rej('Ajax request process find error!' + e)
        }
        //send data
        var data = JSON.stringify(data);
        xhr.send(data);
    })
    return defer
}



export default AjaxServer