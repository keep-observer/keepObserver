import { consoleTools,tool } from '@util/index'



/*
	初始化替换相关信息
*/
export var _handleInit = function() {
    var _self = this;
    //替换window.console变量
    var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];

    if (!(<any>window).console) {
        (<any>window).console = {};
    }

    baseLogList.map(function(method) {
        _self.console[method] = window.console[method];
    })
    _self.console.time = window.console.time;
    _self.console.timeEnd = window.console.timeEnd;
    _self.console.clear = window.console.clear;

    baseLogList.map(method => {
        window.console[method] = (...args) => {
            //是否处于开发模式下
            if (_self._develop && _self.console[method] && tool.isFunction(_self.console[method])) {
                _self.console[method](...args);
            }
            //交给拦截处理信息
            _self._handleMessage(method, args);
        }
    });
    //处理time timeEnd clear
    var timeLog = {};
    window.console.time = function(label) {
        timeLog[label] = Date.now();
    }
    window.console.timeEnd = function(label) {
        var pre = timeLog[label];
        var type = 'timeEnd'
        if (pre) {
            var content = label + ':' + (Date.now() - pre) + 'ms';
            _self._handleMessage(type, [content]);
            //开发模式下打印
            if (_self._develop && _self.console.log && tool.isFunction(_self.console.log)) {
                _self.console.log(content);
            }
        } else {
            var content = label + ': 0ms';
            _self._handleMessage(type, [content]);
            //开发模式下打印
            if (_self._develop && _self.console.log && tool.isFunction(_self.console.log)) {
                _self.console.log(content);
            }
        }
    }
    window.console.clear = (...args) => {
        _self._handleMessage('clear', args);
        _self.console.clear.apply(window.console, args);
    };
}






/*
	处理打印信息
	上报报文如下
	@: type string  (log|info|debug.... jsError)
	@: data string  (JSON格式对象报文)
 */
export var _handleMessage = function(type, agrs) {
    var _self = this;
    var reportData:any = {}
    var separate = ' , '
    var data = ''
    //agrs不是数组 或是空数组 则不处理
    if (!tool.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    reportData.type = type;
    //直接转成字符串形式
    agrs.forEach( (el,index)=>{
        try{
            if(tool.isObject(el)){
                data += `${index===0?'':separate}${JSON.stringify(el)}`  
            }else{
                data += `${index===0?'':separate}${tool.toString(el).replace(/[\s\r\n\t]/g,'')}`  
            }
        }catch(err){
            data += `${index===0?'':separate}toString is err:${tool.toString(err).replace(/[\s\r\n\t]/g,'')}`  
        }
    })
    reportData.data = data
    const { reportParams,control } = _self.handleReportData(reportData)
    //上报
    _self.noticeReport(reportParams,control)
}





