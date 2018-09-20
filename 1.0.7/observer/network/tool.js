
/*
   Vconsole
   * generate an unique id string (32)
   * @private
   * @return string
*/
export function getUniqueID() {
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    return id;
}


/*
	处理URL
	分离base url 和params
	@return {
		url:  string
		params: object or string('')
	}
 */

export function handleReqUrl(url){
	//处理下解码URL
	url = window.decodeURIComponent(url);
	var params = '';
	var baseUrl = '';
	//判断URL后面是否存在参数
	if(url.indexOf('?') === -1){
		baseUrl = url;
	}else{
		var query = url.indexOf('?');
		baseUrl = url.substring(0,query);
		query = url.substring(query+1,url.length);
		params = {};
        query = query.split('&'); // => ['b=c', 'd=?e']
        for (let q of query) {
          	q = q.split('=');
          	params[ q[0] ] = q[1];
        }
	}
	return {
		url:baseUrl,
		params:params
	}
}

/*
	检查状态码是否正确
 */
export function validateStatus(status) {
    return status >= 200 && status < 300;
}

