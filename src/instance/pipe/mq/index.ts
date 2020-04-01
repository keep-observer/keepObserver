import { catchParams } from '../../../types/pipe'
import keepObserverPipe from '../index'


import { sendPipeMessage,noticeListener } from './triggerQueue'
import { registerRecivePipeMessage } from './receiveQueue'



class MessageQueue{
    private waiting:boolean
    private messageQueue:{
        id: Number,
        params: catchParams
    }[]
    private $pipe:keepObserverPipe
    private consumerMap:{
        [propsName:number]:(...any)=>Promise<{}>
    }
    //method
    private noticeListener = noticeListener.bind(this)
    public sendPipeMessage  = sendPipeMessage.bind(this)
    public registerRecivePipeMessage = registerRecivePipeMessage.bind(this)


    constructor(config,$pipe:keepObserverPipe) {
        //消息是否在等待
        this.waiting = false;
        //消息队列
        this.messageQueue = [];
        //管道实例
        this.$pipe = $pipe
        //消费者集合
        this.consumerMap = {}
    }
}




export default MessageQueue