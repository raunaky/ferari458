var exec  = require('child_process').exec;

function start(response){
	console.log('Request Handler\'s start is called');
	var content = 'empty';
	exec("ls-lah",function(error,stdout,stderr){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(stdout);
		response.end();

		/*content = stdout;*/
	});
	/*return content;*/
}

function upload(response){
	console.log("Request handler 'upload' was called.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello uploaded !");
	response.end();

	// return "Hello Upload";
}






//Code to display the event looping delay due to single thread js
/*function start() {
	
	var startTime = new Date().getTime();
	function sleep(milliSeconds){
	while(new Date().getTime() <startTime + milliSeconds){

	}
}
	sleep(10000);
	return "Hello start";
}

function upload() {
	console.log('Request Handler\'s upload is called');
	return "Hello upload";
}
*/
exports.start = start;
exports.upload = upload;