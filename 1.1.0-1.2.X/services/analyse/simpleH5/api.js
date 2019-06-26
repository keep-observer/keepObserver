import * as tool from '../../../tool/index.js';
import { RecordKey,exitBackstageFlag } from './constant.js'



/*
    	停止监听
*/
export var stopAnalyse = function() {
    this.destroy()
}





/*
	开始监听
 */
export var startAnalyse = function(config) {
    var begin = true
    //拦截事件监听
    if(!this._addEventListener){
        begin = this._handleEventTarget()
    }
    //start
    if(begin){
        this.begine(config)
    }
}




/*
	清除缓存
 */
export var clearSaveRecive = function(){
	tool.removeStorage(RecordKey)
}






