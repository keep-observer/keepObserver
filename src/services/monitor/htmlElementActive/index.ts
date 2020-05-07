import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'

import {
    stopObserver,
    startObserver
} from './api'
import {
    queryFlagElement,
    filterRepeat,
    createXPath,
    createTitle,
    createSendMessage,
    handleElementEvent
} from './handle'


import { elementActiveInfoType } from '../../../types/htmlElementActive'


class KeepObserverHtmlElementActive extends KeepObserverPublic{
    private _config: any;
    private sendMessage:Function;
    private previouActiveElement:elementActiveInfoType;
    private isObserver:boolean;
    //method
    private queryFlagElement = queryFlagElement.bind(this)
    private filterRepeat = filterRepeat.bind(this)
    private createXPath = createXPath.bind(this)
    private createTitle = createTitle.bind(this)
    private createSendMessage = createSendMessage.bind(this)
    private handleElementEvent = handleElementEvent.bind(this)
    public stopObserver = stopObserver.bind(this)
    public startObserver = startObserver.bind(this)
 



    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { htmlElementCustom=false,develop=false } = config as any
        var htmlElementConfig:any = htmlElementCustom || config;
        //存混合配置
        this._config = Tools.extend({...defaultConfig}, {
            ...htmlElementConfig,
            develop
        })
        //是否开始监听
        this.isObserver = false;
        //发送方法
        this.sendMessage = ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        const { automaticStart } = this._config
        this.sendMessage = sendMessage
        //开始
        if(automaticStart){
            this.startObserver()
        }
        return {
            htmlElementActiveStop: this.stopObserver,
            htmlElementActiveStart: this.startObserver
        }
    }   
}





export default KeepObserverHtmlElementActive


