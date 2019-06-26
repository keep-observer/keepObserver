import * as tool from '../../tool/index.js';

/*
    receive the report data
    params  
    @object  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @ .control null and object = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
*/
export var _getReportContent = function(params, control) {
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data || !tool.isObject(params.data)) {
        this.$devLog('[keepObserver] reportServer receive reportData is not right')
        return false;
    }
    if (!control) {
        this.$deveWarn('[keepObserver] reportServer receive pipeDate control options is  undefined')
        return false;
    }

    //是否是开发模式需要打印
    if (this.develop && this.developGetMsgLog) {
        var log = tool.extend({}, params)
        log.develop_title = '[keepObserver] get' + log.type + 'type:' + log.typeName + " of monitor data";
        this.$devLog(log)
    }
    //是否删除之前保存的数据
    if (params.type === 'monitor' && control.preDelete) {
        this._removeReportData(params.typeName)
    }
    //是否忽略本条数据
    if (control.ignore) {
        return false;
    }
    //是否懒上报
    if (params.type === 'monitor' && control.lazy) {
        this._saveReportData(params);
        return false;
    }
    if (control.isReport) {
        //上报
        this._handleReport(params, control);
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
        var discard = reportData.shift();
        //开发模式打印
        if (this.develop && this.develogDiscardLog) {
            discard.develop_title = '[keepObserver] observer ' + type + 'type monitor data overstep cache limit will discard';
            this.$devLog(discard)
        }
    }
    reportData.push(params)
    this.reportData[type] = reportData;
    //保存到locationStorage中
    tool.setStorage(type, reportData)
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
            this._$devLog('[keepObserver] observer ' + type + 'type Of monitor data is clean up')
        }
    }
}