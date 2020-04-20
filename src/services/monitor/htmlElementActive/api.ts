

/*
	停止监听
 */
export var stopObserver = function() {
    document.removeEventListener('click',this.handleElementEvent)
    document.removeEventListener('change',this.handleElementEvent)
}



/*
	开始监听
 */
export var startObserver = function() {
    document.addEventListener('click',this.handleElementEvent)
    document.addEventListener('change',this.handleElementEvent)
}



