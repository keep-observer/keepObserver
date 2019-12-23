import * as tool from '../../../util/tool';


/*
    	接受自定义上报内容
    	model1: arguments[0]  type object  
        model2: arguments[0]  type boolean  
                will extend preData  arguments[...]=extend data
        合并到this._customeInfo中
     */
export var $setCustomeReportData = function(params) {
    var _self = this;
    //判断数据正确性
    var args = tool.toArray(arguments);
    if (!args || args.length === 0) {
        return false;
    }
    if (!_self._customeInfo) {
        _self._customeInfo = {};
    }
    var params = args[0]
        //如果是普通添加
    if (tool.isObject(params) && !tool.isEmptyObject(params)) {
        //设置用户自定义上报内容
        _self._customeInfo = tool.extend(_self._customeInfo, params);
        return false;
    }
    //如果是修改并覆盖之前的数据
    if (tool.isBoolean(params) && params && args.length > 1) {
        params = args.slice(1, args.length);
        params.map(function(item) {
            if (tool.isObject(item) && !tool.isEmptyObject(item)) {
                _self._customeInfo = tool.extend(_self._customeInfo, item);
            }
        })
    }
}