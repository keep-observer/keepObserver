import * as tool from '../../tool/index.js';


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
    //new Promise
    var defer = new Promise(function(res, rej) {
        var {
            url,
            data,
            customeHead
        } = config;

        console.log(url)

        var resHead = {};
        //judge data
        if (!url || !data) {
            rej('report data fail, report url and report data is exist undefined!')
            return false;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        // init xhr heade
        var xhrHead = {};
        if (customeHead && tool.isObject(customeHead)) {
            xhrHead = tool.extend(xhrHead, customeHead)
        }
        // keep-observer report ajax request flag
        xhrHead['keepObserver-reportAjax'] = 'yes';
        // set head
        for (var key in xhrHead) {
            xhr.setRequestHeader(key, xhrHead[key]);
        }
        // xhr callback
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
                //防止跨域等问题  触发错误导致死循环
                //Prevent problems such as cross-domain triggering errors that lead to dead loops
                try {
                    //handle response headers
                    xhr.responseType = 'arraybuffer'; 
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
        // xhr error
        xhr.onerror = function(e) {
            rej('Ajax request process find error!' + e);
        }
        //
        xhr.send(data);
       
    })
    return defer
}



export default AjaxServer