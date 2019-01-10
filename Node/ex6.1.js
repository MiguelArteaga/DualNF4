var fs = require('fs')
module.exports = function (folder,extension,callback) {
	var filteredList=[]
	fs.readdir(folder,function(err,list){
		if(err)
			return callback(err,null)

		list.forEach(function(item){
			if(item.split('.')[1]==extension){
				filteredList.push(item)
			}
		})
		callback(null,filteredList)
	})
}



