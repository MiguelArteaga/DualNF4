var fs=require('fs')
var dir = process.argv[2]
var extension= "." + process.argv[3]

console.log(dir)
console.log(extension)

var asdf = fs.readdir(dir)

fs.readdir(dir, function callback (err,list){
        console.log(list)
})
