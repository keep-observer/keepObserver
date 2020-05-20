/*
 	keepObserver 默认配置
*/
import { getDeviceId } from '@util/index'
import { version } from '../constants/index';


export default {
    projectName:'',
    projectVersion:'',
    version,
    //唯一设备id
    deviceID: getDeviceId(),
    //是否检查重复注入
    //这个主要用在jasmine spyOn 以及UglifyJS  class = n o a b c ..可能出现的问题
    isCheckRepeatUse:true,
}

