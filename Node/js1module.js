

module.export()

function x(text,port,callback){
http.createServer(function(req,res){
	res.write(text);
	res.end();
	callback(req);
	}).listen(port);

};