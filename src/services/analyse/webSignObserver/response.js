import * as tool from '../../../tool/index.js';

/*
    receive the report data
    params  
    @object  = {
        type:  string                   //类型,         response   
        typeName:  string               //类型名,        self type
        location:string                 //捕获位置       url
        environment:string              //运行环境信息    null
        data:object                     //捕获数据       response data
        reportTime: int                 //捕获时间搓     
    }
*/
export var _getReportContent = function(params) {
    var that = this;
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data || !tool.isObject(params.data)) {
        this.$devLog('[keepObserver] reportServer receive reportData is not right')
        return false;
    }
    if(params.type !== 'response' || parmas.typeName !== that.typeName){
        return false;
    }
    
    console.log('response',params)  
}

