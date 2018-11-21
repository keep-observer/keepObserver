


export var getDateRFC822 = function(date){
	if(date && date instanceof Date){
		return date.toGMTString()
	}
	return new Date().toGMTString()
}






