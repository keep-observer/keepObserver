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
    this.begine(config)
}




/*
	清除缓存
 */
export var clearSaveRecive = function(){
	tool.removeStorage(RecordKey)
}






