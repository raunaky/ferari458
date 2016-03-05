var exec  = require('child_process').exec;
var querystring = require("querystring"),
	fs = require('fs'),
	formidable = require('formidable');

function start(response){
	console.log('Request Handler\'s start is called');

	var body = '<html>' + '<head>'+
	'<meta charset="UTF-8" content = "text/html">'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post" enctype="multipart/form-data">'+
	'<input type="file" name ="upload" multiple = "multiple"/>'+
	'<input type="submit" value ="Upload file" />'+
	'</form>'+'</body>'+'</html>';


	var content = 'empty';
	// exec("ls-lah",function(error,stdout,stderr){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();

		/*content = stdout;*/
	//});
	/*return content;*/
}

function upload(response,request){
	console.log("Request handler 'upload' was called.");
	var form =  new formidable.IncomingForm();
	console.log("about to parse. ");
	form.parse(request, function(error,field,files){
		console.log("Parsing done...");

	fs.rename(files.upload.path,"/tmp/test.png",function(err){
		if (err) {
			fs.unlink("/tmp/test.png");
			fs.rename(files.upload.path,"/tmp/test.png");
		};
	})
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Recieved Image:<br/>");
	response.write("<img src='/show'/>");
	/*response.write("you have sent the text : " + querystring.parse(postData).text);*/
	response.end();
	})
	

	// return "Hello Upload";
}

	function show(response,postData) {
		console.log("Request handler's show was called");
		fs.readFile("/media/raunak/0444C88644C87BC4/pictures/DSC_0324.JPG","binary",function(error,file){
		if (error) {
			response.writeHead(500,{"Content-Type" : "text/plain"});
			response.write(err + "\n");
			response.end();

		} else{
			response.writeHead(200,{"Content-Type" :"image/png"});
			response.write(file,"binary");
			response.end();
		};	
	})
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
exports.show = show;