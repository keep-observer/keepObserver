

export const cancelTrack = function(){
    this.isCancelTrack = true
} 


export const startTrack = function(){
    this.isCancelTrack = false
}


export var cancelPatch = function(){
    window.removeEventListener("hashchange",this._handleHashPageChange);
    window.history.pushState = this._pushState;
    window.history.replaceState = this._replaceState;
}