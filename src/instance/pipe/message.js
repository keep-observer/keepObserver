import * as tool from '../../tool/index.js';


//接收管道内流通消息
export var recivePipeMessage = function(msg) {}


//发送消息在管道内流通
export var sendPipeMessage = function(msg) {
    this.$devLog('msg', msg)
}