// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	for (var key in obj){
	  if (typeof obj[key] === "number"){
	  	return obj[key];
	  } else if (typeof obj[key] === "boolean") {
	  	 return obj[key];
	    } else if (typeof obj[key] === "object") {
	  	return  obj[key] ;

	  }
    }
}    


