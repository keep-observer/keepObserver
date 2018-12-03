

function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    if ('hidden' in document) return 'hidden';
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }
    return null;
}



export function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    return document[prop];
}


export function createDataRecord(){
    var date = new Date();
    var year = date.getFullYear()
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return parseInt(year+''+month+''+day)
}




