/*
 	keepObserver 默认配置
*/
import { getDeviceId } from '@util/index'
import { version } from '../constants/index';


export default {
    //更新版本是否清除缓存
    updateVersionClearCache: false,
    //kibana apm
    projectName:"",
    projectVersion:"",
    version,
    //唯一设备id
    deviceID: getDeviceId()
}

