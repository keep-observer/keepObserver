import * as tool from '../tool/index.js';

//storge-key
var RecordKey = 'deviceId'



var getDeviceId = function(){
    return storageModel()
}






//localStorage model
var storageModel = function(){
    if(!window.localStorage){
        return false;
    }
    var deviceID = tool.getStorage(RecordKey)
    if(!deviceID){
        deviceID  = tool.getUniqueID()
        tool.setStorage(RecordKey,deviceID)
    }
    return  deviceID
}





//iframe model
//暂未开启 需要先写好iframe页面
//这里还有个问题 iframe是异步获取deviceID 现在的流程放在instance初始化阶段, 异步获取会影响接下来一些流程
//暂不启用, 放在第二次重构升级在启用
var iframeModel = function(){}



export default getDeviceId