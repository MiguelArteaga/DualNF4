
//var fs=require('fs')
//var dir = process.argv[2]
//var extension= "." + process.argv[3]

//console.log(dir)
//console.log(extension)

//var asdf = fs.readdir(dir)

//fs.readdir(dir, function callback (err,list){
//        console.log(list)
//})


const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) también se puede utilizar
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
