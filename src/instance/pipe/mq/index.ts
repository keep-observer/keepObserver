import { catchParams } from '../../../types/pipe'



import { sendPipeMessage,noticeListener } from './triggerQueue'
import { registerRecivePipeMessage } from './receiveQueue'



class MessageQueue{
    private waiting:boolean
    private messageQueue:{
        id: Number,
        params: catchParams
    }[]
    private customerMap:{
        [propsName:number]:(...any)=>Promise<{}>
    }
    //method
    private sendPipeMessage  = sendPipeMessage.bind(this)
    private noticeListener = noticeListener.bind(this)
    private registerRecivePipeMessage = registerRecivePipeMessage.bind(this)


    constructor(config) {
        //消息是否在等待
        this.waiting = false;
        //消息队列
        this.messageQueue = [];
        //消费者集合
        this.customerMap = {}
    }
}




export default MessageQueue