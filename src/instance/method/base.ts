 
import { KeepObserverPublic } from '@util/index'
 
import { userInfo} from '../../types/report'



//扩展上报属性
export const extendReportParams = function(params:any){
    return KeepObserverPublic.extendReport(params)
}


//设置用户信息
export const setUserInfo = function(userInfo:userInfo){
    return KeepObserverPublic.extendReport({
        userInfo:userInfo
    })
}

//挂载插件服务
export const use = function(Provider:Provider){
    return this._pipe.use(Provider)
}
