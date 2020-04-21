

/*
	停止监听
 */
export var stopObserver = function() {
    this.isObserver = false
    document.removeEventListener('click',this.handleElementEvent)
    document.removeEventListener('change',this.handleElementEvent)
}



/*
	开始监听
 */
export var startObserver = function() {
    if(this.isObserver) return
    this.isObserver = true
    document.addEventListener('click',this.handleElementEvent)
    document.addEventListener('change',this.handleElementEvent)
}



