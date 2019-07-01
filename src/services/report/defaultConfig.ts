import {
    reportType
} from '../../constants/index.js'



export default {
    /******************** 公共相关配置 *******************/
    //上报的类型
    $observer_Type: reportType,
    //如果取不到缓存长度的默认长度
    max_cache: 3,


    //默认log数组缓存长度
    max_log_cache: 5,
    //默认vue数组缓存长度
    max_vue_cache: 1,
    //默认network数组缓存长度
    max_network_cache: 3,



    /*********************   上传相关   ********************/
    //上传服务器的url列表  		array
    reportUrl: false,
    //上传失败回调				function (reportInfo,reportUrl(有可能有))
    onReportFail: false,
    //上传前自定义设置url   	function (reportUrl)   return new URl
    onReportBeforeSetUrl: false,
    //上传前自定义设置请求头， 	function (reportUrl)   return headData object
    onReportBeforeSetHead: false,
    //上传服务器前回调钩子  	function (reportInfo,reportUrl,repHead)
    onReportBeforeHook: false,
    //上传服务器后返回处理钩子      function (resultInfo,reportUrl,resHead)
    onReportResultHook: false,
}