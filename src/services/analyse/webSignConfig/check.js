import * as tool from '../../../tool/index.js';




export var checkOrigin = function(origin){
    var { origins } = this._config
    if(tool.isEmptyArray(origins) || !origin){
        return false;
    }
    //check load iframe origin url
    for(var i=0; i<origins.length; i++){
        var item = origins[i]
        if(item.indexOf(origin) > -1){
            return true;
        }
    }
    return false;
}




