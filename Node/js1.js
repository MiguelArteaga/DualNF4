var http = require('http');
var modulo=require(x)

/*
http.createServer(function(req,res){
	res.write('Hello World');
	res.end();
}).listen(8080);
*/
x("Hello miguel",8080,y);
var i=0;


function y(data){
	console.log(data);
	console.log(i++);
};