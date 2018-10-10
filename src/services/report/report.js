import * as tool from '../../tool/index.js';
import AjaxServer from './ajax.js';




/*
    处理上报
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
 */
export var _handleReport = function(params, control) {
    var that = this;
    //如果未传入数据类型
    if (!params || !control || !tool.isObject(params) || !tool.isObject(control)) {
        return false;
    }
    //获得上传数据
    var reportData = that._createReportData(params, control)
        //上传到服务器
    var {
        reportUrl,
        onReportFail,
        onReportBeforeSetUrl,
        onReportBeforeSetHead,
        onReportBeforeHook,
        onReportResultHook,
    } = this.$report_config
        //如果没有设置上传URL 那么停止上传
    if (!reportUrl || !tool.isArray(reportUrl)) {
        that._handleReportFail(onReportFail, reportData, null)
        return false;
    }
    //遍历URL上传列表
    //开始依次上传
    reportUrl.map(function(item) {
            var reportConfig = {};
            //是否有上传前修改URL回调
            if (onReportBeforeSetUrl) {
                var url = that._handleHook(onReportBeforeSetUrl, item);
            } else {
                url = item;
            }
            if (!tool.isString(url)) {
                that._handleReportFail(onReportFail, reportData, null)
                return false;
            }
            reportConfig.url = url;
            //获取自定义请求头
            var customeHead = onReportBeforeSetHead ? that._handleHook(onReportBeforeSetHead, item) : false;
            if (customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)) {
                reportConfig.customeHead = customeHead
            }
            //获取请求
            reportConfig.data = reportData;
            that._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead);
            //上传到服务器
            try {
                AjaxServer(reportConfig).then(function(result) {
                    that._handleHook(onReportResultHook, result.data, reportConfig.url, result.head);
                }, function(err) {
                    that._handleReportFail(onReportFail, reportData, reportConfig.url);
                })
            } catch (err) {
                //上传报错
                that.$devError('report Server Process find error:' + err)
            }
            //end
        })
        // map url end
}




/*
    生成上报数据头
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
    *****************************************************
    return
    reportData {
        //以下参数必定存在
        type:string                         上报的大的类型
        @.reportType string                 上报的具体类型名
        @.project string                    上报项目名
        @.projectVersion string             上报项目版本
        @.reportTime number                 上报时间时间搓
        @.data  object                      上报内容
        @.environment string                上报项目运行环境
        @.location string                   上报的位置
        //一下参数可能存在
        @.customeInfo all                   用户自定义设置上传参数
        @.preTrackData object               合并之前保存的监控数据对象
    }
*/
export var _createReportData = function(params, control) {
    var that = this;
    var reportData = {};
    //添加类型
    reportData.type = params.type
    reportData.reportType = params.typeName;
    reportData.isMonitorError = params.type === 'monitor' ? true : false;
    reportData.isPerformance = params.type === 'performance' ? true : false;
    //基本信息
    reportData.project = that._project;
    reportData.projectVersion = that._projectVersion
    reportData.reportTime = params.reportTime;
    reportData.location = params.location;
    reportData.environment = params.environment;
    reportData.data = params.data;
    //处理自定义信息
    if (that._customeInfo) {
        reportData.customeInfo = tool.extend({}, that._customeInfo);
    }
    //处理上报数据是否合并上报
    if (control.trackExtend) {
        reportData.preTrackData = {}
        for (var key in that.reportData) {
            var value = that.reportData[key];
            if (tool.isArray(value) && value.length > 0) {
                reportData.preTrackData[key] = tool.extend({}, value);
                //删除相关数据
                that._removeReportData(key)
            }
        }
        //修正数据
        reportData.preTrackData = tool.isEmptyObject(reportData.preTrackData) ? null : reportData.preTrackData
    }
    //开发模式下打印上报数据
    if (that.develop) {
        var log = tool.extend({}, reportData)
        log.title = params.type + " type " + params.typeName + " will report Server,report Data in the data "
        that.$devLog(log)
    }
    return reportData
}





/*
	调用钩子
	@arguments[0] = onHooK
	@arguments[...] = params
	return
		onHook result
 */
export var _handleHook = function() {
    var args = tool.toArray(arguments);
    if (!args || args.length === 0 || !tool.isFunction(args[0])) {
        return false;
    }
    var onHook = args[0];
    var params = args.slice(1, args.length);
    try {
        var result = onHook(params);
    } catch (err) {
        //报错
        this.$devError(onHook.name + 'callback hook is runing error:' + err)
    }
    return result
}





/*  
	处理上传失败
	params
		onFail      function        	失败的回调 没有则忽略直接跳过
		reportData 	obj or arr          需要上传的数据
		reportUrl 	string     			上传的url地址 (有可能存在)
 */
export var _handleReportFail = function(onFail, reportData, reportUrl) {
    if (!onFail) {
        return false;
    }
    try {
        onFail(reportData, reportUrl)
    } catch (e) {
        this.$devError('report Server callback hook is runing error:' + err)
    }
}