 
import { KeepObserverPublic } from '@util/index'
 
import { Provider } from '../../types/instance'


//扩展上报属性
export const extendReportParams = function(params:any){
    return KeepObserverPublic.extendReport(params)
}


//挂载插件服务
export const use = function(Provider:Provider){
    return this._pipe.use(Provider)
}
