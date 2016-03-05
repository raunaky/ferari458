var http = require('http'),
	url = require('url');

		function start(route,handle){

			function onRequest(request,response){
				// var postData = "";
			var pathname = url.parse(request.url).pathname;
			console.log("Request for :" + pathname + " recieved");
			request.setEncoding("utf8");
			route(handle,pathname,response,request);
			/*request.addListener("data",function(postDataChunk){
				postData += postDataChunk;
				console.log("Recieved POST data chunk '" + postDataChunk + "'.");
			});*/
				/*request.addListener("end",function(){
					
					route(handle,pathname,response,request);		
				});*/

			
			}
			http.createServer(onRequest).listen(8888);
			
/*
			http.createServer(function(request,response){
			
			

			response.writeHead(200,{"Content-Type":"text/plain"});

		var content = route(handle,pathname);
			response.write(content);
			response.end();

			
			/*response.write("Welcome to node!!");
			response.end();*/
		// }).listen(8888);
	console.log('Server started..');

}
	exports.start = start;