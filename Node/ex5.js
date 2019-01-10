var fs = require('fs')
var folder = process.argv[2]
var extension = process.argv[3]
fs.readdir(folder, function callback (err,list)
 {
	//console.log(list)
	list.forEach(myFunction)
})

function myFunction(item){
	if(item.split('.')[1] == extension){
	  console.log(item)
	}
}
