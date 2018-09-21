import * as tool from '../../tool/index.js';
import AjaxServer from './ajax.js';



/*
       	生成上报数据头
       	params:
       		@ .type  string								上报数据类型
       		@ .control object 							上报控制
       	return     
       		reportData  {
       			//以下参数必定存在
       			@ .type  string							上报数据类型
       			@ .project  string              		上报项目名
       			@ .projectVersion string 				上报项目版本 || keepObserver版本
       			@ .reportTime  number  					上报时间时间搓
       			@ .data array or data                   上报内容
       			//一下参数可能存在
       			@ .customeInfo   all  					用户自定义设置上传参数 
       		}     					
*/
export var _createReportData = function(type, control) {
    var that = this;
    var reportData = {};
    //添加基本信息
    reportData.reportType = type;
    reportData.project = that._project;
    reportData.projectVersion = that._projectVersion
    reportData.reportTime = new Date().getTime();
    //处理自定义信息
    if (that._customeInfo) {
        reportData.customeInfo = tool.extend({}, that._customeInfo);
    }
    //处理上报数据  是否合并上报
    if (control.baseExtend) {
        reportData.data = {}
        for (var key in that.reportData) {
            var value = that.reportData[key];
            if (tool.isArray(value) && value.length > 0) {
                reportData.data[key] = tool.extend({}, value);
                //删除相关数据
                that._removeReportData(key)
            }
        }
    } else {
        reportData.data = tool.extend({}, that.reportData[type]);
        that._removeReportData(type)
    }
    //开发模式下打印上报数据
    if (that.develop) {
        var log = tool.extend({}, reportData)
        log.title = type + "type will report Server,report Data in the data "
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





/*
	处理上报
	params 
		type string    		上报类型
		control object 		上报控制
 */
export var _handleReport = function(type, control) {
    var that = this;
    //如果未传入数据类型
    if (!type || !tool.isString(type)) {
        return false;
    }
    //获得上传数据
    var reportData = that._createReportData(type, control)
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
        that._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead)
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