import * as tool from '../../tool/index.js';


/*
    	接受自定义上报内容
    	model1: arguments[0]  type object  
    	model2: arguments[0]  type boolean  
    			will extend preData  arguments[...]=extend data
    	合并到this._customeInfo中
     */
export var $getCustomeReport = function(params) {
    var that = this;
    //判断数据正确性
    var args = tool.toArray(arguments);
    if (!args || args.length === 0) {
        return false;
    }
    if (!that._customeInfo) {
        that._customeInfo = {};
    }
    var params = args[0]
    //如果是普通添加
    if (tool.isObject(params) && !tool.isEmptyObject(params)) {
        //设置用户自定义上报内容
        that._customeInfo = tool.extend(that._customeInfo, params);
        return false;
    }
    //如果是修改并覆盖之前的数据
    if (tool.isBoolean(params) && params && args.length > 1) {
        params = args.slice(1, args.length);
        params.map(function(item) {
            if (tool.isObject(item) && !tool.isEmptyObject(item)) {
                that._customeInfo = tool.extend(that._customeInfo, item);
            }
        })
    }
}