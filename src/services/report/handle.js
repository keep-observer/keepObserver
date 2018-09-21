import * as tool from '../../tool/index.js';

/*
    receive the report data
    params  
    @object  = {
        @ .typeName string        (no null)       上报类型名
        @ .data  array or object  (no null)       上报内容
    }
    @ .control null and object = {
        @ .lazy       Boolean                     是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
        @ .isError    Boolean                     是否是出错信息 (保留未启用)
        @ .baseExtend Boolean                     是否合并基础监控信息包括log以及network信息一起上报
        @ .preDelete  Boolean                     是否删除之前保存typeName的缓存数据
        @ .ignore     Boolean                     是否忽略本条数据
    }
 */
export var _getReportContent = function(params, control) {
    //判断数据合法性
    if (!params || !params.typeName || !params.data || (!tool.isArray(params.data) && !tool.isObject(params.data))) {
        return false;
    }
    //添加上传时间搓
    params.reportTime = new Date().getTime();
    //是否是开发模式需要打印
    if (this.develop && this.developGetMsgLog) {
        var log = tool.extend({}, params)
        log.title = 'get' + log.typeName + "type of monitor data";
        this.$devLog(log)
    }
    //是否删除之前保存的数据
    if (control && control.preDelete) {
        this._removeReportData(params.typeName)
    }
    //是否忽略本条数据
    if (control && control.ignore) {
        return false;
    }
    //保存到上报数据中
    var cacheLen = this._saveReportData(params);
    var maxCache = this.$report_config['max_' + params.typeName + '_cache'];
    var isReport = this.$report_config['max_' + params.typeName + '_fillIsReport'];

    //是否立即上报 或者缓存已满上报
    if ((control && !control.lazy) || (isReport && cacheLen === maxCache)) {
        //上报
        this._handleReport(params.typeName, control);
    }
}



/* 
	保存处理上报数据
	params type object
	@ .typeName string   	  (no null)	      上报类型名
	@ .data  array or object  (no null) 	  上报内容
	@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
	**********************************
	# return  当前保存数据长度
 */
export var _saveReportData = function(params) {
    var type = params.typeName
    //如果没有该上报类型,那么属于未知内容
    if (!this.reportData[type]) {
        type = 'unKownType'
    }
    var reportData = this.reportData[type];
    //是否延时上报,如果没有添加到上报数据中
    var maxCache = this.$report_config['max_' + type + '_cache'];
    maxCache = maxCache ? maxCache : this.$report_config['max_cache'];
    //如果当前存储超过长度 那么弹出最早的数据
    if (reportData.length + 1 > maxCache) {
        var discard = reportData.shift()
        //开发模式打印
        if (this.develop && this.develogDiscardLog) {
            discard.title = type + 'type monitor data overstep cache limit will discard';
            this.$devLog(discard)
        }
    }
    reportData.push(params)
    this.reportData[type] = reportData;
    //保存到locationStorage中
    tool.setStorage(type, reportData)
    return reportData.length;
}



/*
	删除保存的上报数据
	@params type string    上报类型
 */
export var _removeReportData = function(type) {
    if (this.reportData[type]) {
        this.reportData[type] = [];
        tool.removeStorage(type)
        //开发模式下打印
        if (this.develop && this.develogDeleteLog) {
            this._$devLog(type + 'type Of monitor data is clean up')
        }
    }
}