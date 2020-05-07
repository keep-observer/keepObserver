import { Tools,consoleTools } from '@util/index'


export const resgisterPageHashChangeEventListener = function(){
    //监听相关内容
    var self = this;
    //hashchange
    (<any>window).addEventListener("hashchange",this._handleHashPageChange);
    //pushStateModel  replaceStateModel
    self._pushState = window.history.pushState;
    window.history.pushState = function(state, title, url) {
        let oldURL = window.location.href;
        let newURL = url ? url : oldURL;
        // hook 
        self._handleHashPageChange({
            eventName:'pushState',
            oldURL,
            newURL,
            state,
            title,
        })
        //run 
        return self._pushState.apply(window.history, arguments);
    };
    self._replaceState = window.history.replaceState
    window.history.replaceState = function(state, title, url) {
        let oldURL = window.location.href;
        let newURL = url ? url : oldURL;// hook 
        self._handleHashPageChange({
            eventName:'replaceState',
            oldURL,
            newURL,
            state,
            title,
        })
        return self._replaceState.apply(window.history, arguments);
    };
    //start receive
    this._pageStart()
};

export const  checkPageHashUrlChange =function(oldUrl:string,newUrL:string){
    //其中某一次不存在
    if(!oldUrl || !newUrL || !Tools.isString(oldUrl) || !Tools.isString(newUrL) ){
        return false;
    }
    //has path没有变化
    let newPath = newUrL.indexOf('?') > -1?newUrL.split('?')[0]:newUrL
    let oldPath = oldUrl.indexOf('?') > -1?oldUrl.split('?')[0]:oldUrl
    if( newPath === oldPath){
        return false;
    }
    return true
}

export const _handleHashPageChange = function(event){
    if(this.isPageChangeHandle){
        return false;
    }
    const{ newURL , oldURL } = event
    if(this.isCancelTrack || !this.checkPageHashUrlChange(oldURL,newURL)) return
    // next page
    this.isPageChangeHandle = true
    this._pageHashNext(newURL)
}


// page status
export const _pageStart = function(){
    const  { reportDateFormat } = this._config
    const startUrl = window.location.href
    const stateDate = Tools.dateFormat(new Date().getTime(),reportDateFormat)
    this.pageInfo = {
        ...this.pageInfo,
        startUrl,
        stateDate
    }
}
export const _pageHashNext = function(nextHash:string){
    const  { reportDateFormat } = this._config
    const nextUrl = nextHash || window.location.href
    const nextDate = Tools.dateFormat(new Date().getTime(),reportDateFormat)
    this.pageInfo = {
        ...this.pageInfo,
        nextUrl,
        nextDate
    }
    //开启pageHashChange上报
    //如果有pageError未发生的就忽略
    if(!this.isWaitSend){
        this.isWaitSend = 'pageHashChange'
        this._handleSendTrackMessage()
    }
}







