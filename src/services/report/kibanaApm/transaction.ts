
//elastic-apm-js-core 的ServiceFactory提供的TransactionService是返回的单例模式
//暂时只能从源代码库中拉取原始Transaction
import Transaction  from 'elastic-apm-js-core/src/performance-monitoring/transaction'
import Span from  'elastic-apm-js-core/src/performance-monitoring/span'
import { createServiceFactory } from "elastic-apm-js-core";
import { kibanaApmUserContext } from '../../../types/report'
import { Tools,consoleTools } from '@util/index'




class TracerTransaction {
    private serviceFactory: any;
    private customServiceFactory: any;
    private configService: any;
    //part
    private Initialized = false;
    private Customonitoring: any;
    private ApmServer: any

    
    constructor(config) {
        this.serviceFactory = createServiceFactory()
        this.configService = this.serviceFactory.getService("ConfigService");
        this.configService.setConfig(config);
        this.serviceFactory.init();
        //customTransaction
        this.initCustomTransaction(config)
    }
    // custom transcation
    private initCustomTransaction = (config) =>{
        this.customServiceFactory = createServiceFactory()
        const ConfigService = this.customServiceFactory.getService("ConfigService");
        ConfigService.setConfig(config);
        this.customServiceFactory.init();
        this.Customonitoring = this.customServiceFactory.getService("PerformanceMonitoring");
        this.Customonitoring.init();
        this.Customonitoring.cancelPatchSub();
        this.ApmServer = this.serviceFactory.getService('ApmServer')
        //reset login service
        this.resetApmServiceLog(this.serviceFactory.getService("LoggingService"))
        this.resetApmServiceLog(this.customServiceFactory.getService("LoggingService"))
        this.Initialized = true
    }
    private resetApmServiceLog(loggingService){
        loggingService.levels.forEach(function (level) {
            loggingService[level] = log 
            function log () {
                var prefix = loggingService.prefix
                var normalizedLevel
                switch (level) {
                    case 'trace':
                        normalizedLevel = 'info'
                        break
                    case 'debug':
                        normalizedLevel = 'info'
                        break
                    default:
                        normalizedLevel = level
                }
                var args = arguments
                if (prefix) {
                    if (typeof prefix === 'function') prefix = prefix(level)
                        args[0] = prefix + args[0]
                }
                if (consoleTools) {
                    var realMethod = consoleTools[normalizedLevel] ? consoleTools[normalizedLevel] : consoleTools.log
                    if (typeof realMethod === 'function') {
                        realMethod.apply(consoleTools, args)
                    }
                }
            }
        })
    }


    // api
    public createTransaction = (name: string, type: string) => {
        var transactionService = this.serviceFactory.getService(
            "TransactionService"
        );
        return transactionService.startTransaction(name, type);
    };
    public pageLoad(){
        //加载load监听
        //挂载第一次pageload
        let performanceMonitoring = this.serviceFactory.getService(
            "PerformanceMonitoring"
        );
        performanceMonitoring.init();
        //send page load
        if (this.configService.get("sendPageLoadTransaction")) {
            var transactionService = this.serviceFactory.getService(
                "TransactionService"
            );
            var tr = transactionService.startTransaction(
                (<any>window).location.href,
                "page-load"
            );
            var sendPageLoadMetrics = function() {
                // to make sure PerformanceTiming.loadEventEnd has a value
                setTimeout(() => {
                    if (tr) {
                        tr.detectFinish();
                        //取消elastic-apm自带的log以及xhr相关patch
                        performanceMonitoring.cancelPatchSub();
                    }
                });
            };
            if (document.readyState === "complete") {
                sendPageLoadMetrics();
            } else {
                window.addEventListener(
                    "load",
                    sendPageLoadMetrics.bind(this)
                );
            }
        }
    }
    public catchError(){
        let errorLogging = this.serviceFactory.getService("ErrorLogging");
        errorLogging.registerGlobalEventListener();
    }
    public setUserInfo = (userInfo:kibanaApmUserContext) => {
        const configService = this.serviceFactory.getService("ConfigService");
        configService.setUserContext(userInfo);
        var customConfigService = this.customServiceFactory.getService("ConfigService");
        customConfigService.setUserContext(userInfo);
    }
    public captureError (error:string) {
        var errorLogging = this.serviceFactory.getService('ErrorLogging')
        return errorLogging.logError(error)
    }
    public watchCatchError(callback:(message:any)=>void){
        let errorLogging = this.serviceFactory.getService("ErrorLogging");
        const logErrorEventPatch = errorLogging.logErrorEvent
        errorLogging.logErrorEvent = function(errorEvent,sendImmediately){
            callback(errorEvent)
            return logErrorEventPatch.call(errorLogging,errorEvent,sendImmediately)
        }
    }
    public createCustomEventTransaction = (name:string,type:string,options?:any):Transaction => {
        var self = this
        if(!self.Initialized){
            return false;
        }
        var _option = Tools.extend({
            transactionSampleRate:1
        },options)
        var transaction = new Transaction(name,type,_option)
        //添加onEnd事件
        Object.defineProperty(transaction,'onEnd',{
            enumerable: false,
            configurable: false,
            writable: false,
            value:function(){
                if(this instanceof Transaction ){
                    self.Customonitoring.prepareTransaction(this)
                    let payload = self.Customonitoring.createTransactionDataModel(this)
                    self.ApmServer.addTransaction(payload)
                }
            }
        })
        // safari这里存在点问题,会有获取不到span的现象，非常奇怪，临时解决，待研究这个问题
        Object.defineProperty(transaction,'_onSpanEnd',{
            enumerable: false,
            configurable: false,
            writable: false,
            value:function(span){
                if(this instanceof Transaction ){
                    //safari下 实测要读取一次this， 不然存在this指向错误的问题，非常的奇怪
                    var transactionInstance = this
                    var spanValue = span
                    transactionInstance.spans.push(spanValue)
                    // Remove span from _activeSpans
                    delete transactionInstance._activeSpans[spanValue.id]
                }
            }
        })
        return transaction
    }

    
}




export default TracerTransaction;


