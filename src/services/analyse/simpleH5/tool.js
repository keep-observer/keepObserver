

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






