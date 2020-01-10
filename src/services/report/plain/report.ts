import { consoleTools,tool } from '@util/index'
import AjaxServer from './ajax';


import {
    reportParams,
} from '../../../types/report'



/*
    处理上报
 */
export var _handleReport = function(reportData:reportParams) {
    var _self = this;
    const [ reportBefore,reportFinish,reportFail ] = _self.middleScopeNames
    //如果未传入数据类型
    if (!reportData || !tool.isObject(reportData)) {
        return false;
    }
    //上传到服务器
    var {
        reportUrl,
    } = this._config
    //如果没有设置上传URL 那么停止上传
    if (!reportUrl || tool.isEmptyArray(reportUrl)) {
        return false;
    }
    //遍历URL上传列表开始依次上传
    reportUrl.map( async (item)=>{
        var reportConfig:any = {
            url: item,
            data: reportData,
            params: undefined,
            customeHead: undefined,
        };
        //上传前hook位
        [ reportConfig ] = await _self.runMiddle(reportBefore,reportConfig)
        //上传
        try {
            AjaxServer(reportConfig).then( async (result:any)=>{
                //上报结束hook位
                result = await _self.runMiddle(reportFinish,result)
                //response data
                _self._handleResponse(reportData,item,result)
            }, function(err) {
                //上传失败回调hook位
                _self.runMiddle(reportFail,err,reportData)
            })
        } catch (err) {
            //上传报错
            consoleTools.warnError('report Server Process find error:' + err)
        }
        //end
    })
    // map url end
}



/*
    处理响应
    @url                    //request url
    @responseData           //response data
    -------------------------------------------
    ps: control.isResponse 才进行处理
 */
export var _handleResponse = function(params,url,response){
    var _self = this;
    const { isNoticeResponse } = _self._config
    //如果未传入数据类型
    if (!params  || !tool.isObject(params) ) {
        return false;
    }
    if( !params.typeName || !url || !response ){
        return false;
    }
    if(!isNoticeResponse){
        return false;
    }
    //handle push message quenen
    _self.noticeReport({
        type : "report",
        typeName : 'response',
        data : {
            params,
            response,
            url
        },
    })
}










