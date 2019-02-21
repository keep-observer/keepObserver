import * as tool from '../../../../tool/index.js';





export var initDomEvent = function(){
    var that = this;
    //register click event
    document.addEventListener('click',that.selectElement)
} 




export var selectElement = function(event){
    var el = event.target
    console.log(event)
}




export var activeElement = function(){

}


