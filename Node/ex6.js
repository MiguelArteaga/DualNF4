var mymodule = require('./ex6.1.js')
var folder = process.argv[2]
var extension = process.argv[3]

mymodule(folder,extension,function(err,data){
	if(err){
		return console.error("error",err)}
		data.forEach(function(item){
			console.log(item)
		})
	
})



