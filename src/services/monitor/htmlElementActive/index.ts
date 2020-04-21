import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools } from '@util/index'

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
        //是否是开发模式
        htmlElementConfig.develop = develop
        //存混合配置
        this._config = Tools.extend({...defaultConfig}, htmlElementConfig)
        //是否开始监听
        this.isObserver = false;
        //发送方法
        this.sendMessage = ()=>null
        //开始
        this.startObserver()
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        this.sendMessage = sendMessage
        return {
            $htmlElementActiveStop: this.stopObserver,
            $htmlElementActiveStart: this.startObserver
        }
    }   
}





export default KeepObserverHtmlElementActive


