


var makeMap = function(key, valueString) {
    var map = {};
    var list = (typeof valueString === 'string') ? valueString.split(',') : valueString.toString().split(',');
    if (Array.isArray(list) && list.length > 0) {
        map[key] = list
    } else {
        warnError('set map error: valueString type error or value error')
        return false;
    }
    return function(value) {
        return map[key].indexOf(value) !== -1 ? true : false;
    }
}







//html标签
export var htmlTabMap = makeMap('tab',
    'a,abbr,address,acronym,article,area,aside,audio,'+
    'b,bdi,bdo,big,blockquote,button,body,base,'+
    'canvas,caption,cite,code,col,colgroup,command,center,'+
    'dd,details,dialog,div,dl,dt,datalist,del,dfn,'+
    'em,embed,'+
    'fieldset,figcaption,figure,footer,form,frame,frameset,'+
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,'+
    'i,iframe,img,input,ins,'+
    'kbd,keygen,'+
    'label,legend,li,'+
    'menuitem,meta,map,mark,menu,menuitem,meter,'+
    'nav,noframes,noscript,'+
    'object,ol,optgroup,option,output,'+
    'p,param,pre,progress,'+
    'q,'+
    'rp,rt,ruby,'+
    'samp,section,select,small,source,span,strong,sub,summary,sup,'+
    'title,tr,track,table,tbody,td,textarea,tfoot,th,thead,time,tt,'+
    'u,ul,var,video,wbr'
)




