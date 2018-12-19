var path = require("path")
extension = "txt"
list=["a.txt","b.txt","c.txt","c.doc"]

list.forEach(function(item){
	if(path.extname(item)=== extension){
		console.log(item)
	}

})
