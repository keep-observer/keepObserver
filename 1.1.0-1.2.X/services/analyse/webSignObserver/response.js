import * as tool from '../../../tool/index.js';




/*
    receive the report data
    params  
    @object  = {
        type:  string                   //类型,         response   
        reportType:  string             //类型名,        self type ->webSignAnalyse
        location: string                //捕获位置       url
        environment: string             //运行环境信息    null
        data: object                    //捕获数据       response data
        reportTime: int                 //捕获时间搓     
    }
*/
export var _getReportContent = function(params) {
    var that = this;
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data) {
        this.$devLog('[keepObserver] webSignObserver receive response is not right')
        return false;
    }
    if(params.type !== 'response' || params.typeName !== that.typeName){
        return false;
    }
    if(tool.isString(params.data)){
        try{
            params.data = JSON.parse(params.data)
        }catch(e){
            this.$devLog('[keepObserver] webSignObserver receive response data JSON.parse error:'+e)
            return false;
        }
    }
    var { onHandleSginDataHook } = that._config
    var sginData = that._handleHook(onHandleSginDataHook,params.data)
    sginData = sginData? sginData : params.data
    // add anaylse listener
    that.registerDomAnaylseListener(sginData)
}









