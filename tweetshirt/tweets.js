//Just a tweet shirt app 
window.onload = function(){

var previewButton = document.getElementById("preview");
	previewButton.onclick = previewHandler;

	//print the shirt specefication
	makeImage();
}

function previewHandler(){

	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	fillBackGround(canvas,context);
	var selectObj = document.getElementById("backgroundShape");

	var index  =selectObj.selectedIndex;
	var shape  =selectObj[index].value;

	if(shape =="square"){
		for (var i = 0; i < 20; i++) {
			
			drawSquares(canvas,context);
		};
	}else if(shape == "circle"){
			for (var i = 0; i < 20; i++) {
				
				drawCircle(canvas,context);
			};

	}else {
		alert("Please select a graphic shape for the background");
	}
	drawText(canvas,context);
	drawImage(canvas,context);	

}

//to fill the background 
function fillBackGround(canvas,context){
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var backgroundColor = selectObj[index].value;

	context.fillStyle =backgroundColor;
	context.fillRect(0,0,canvas.width,canvas.height);
}
//to draw the background with squares 
function drawSquares(canvas,context){
	var sides = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);

	context.fillStyle="lightblue";
	context.fillRect(x,y,sides,sides);
}
//to draw the circles in the  background
function drawCircle(canvas,context){

	var radius = Math.floor(Math.random() *40);
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);

	context.beginPath();
	context.arc(x,y,radius,0,degreesToRadians(360),true);
	context.fillStyle= "red";
	context.fill();

}
//to write the text inside the canvas element
function drawText(canvas,context){
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgcolor = selectObj[index].value;

	context.fillStyle = fgcolor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("This is the tweet that I Saw ",20,40);

	// drawing the tweets 
	selectObj = document.getElementById("tweets");
	index =  selectObj.selectedIndex;
	var tweet = selectObj[index].value;

	context.fillStyle = "rgb(0, 173, 239)";
	context.font = "italics 1em sans-serif";
	context.textAlign = "right";
	context.fillText(tweet,canvas.width-50,100);

	context.fillStyle = fgcolor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("At the end everything looks like a lousy text ",320,160);
}
//to draw the twitter bird logo 
function drawImage(canvas,context){

	var twitterBird  = new Image();
	twitterBird.src  = "Twitter_logo.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird,20,120,70,70);
	}
}	
//populating tweets from the response of the callback
function updateTweets(tweets) {
	var tweetSelection = document.getElementById("tweets");

	for (var i = 0; i < tweets.length; i++) {
		 	tweet  =tweets[i];
		 	var option = document.createElement("option");
		 	option.text = tweet.text;

		 	tweetSelection.options.add(option);
	};

	tweetSelection.selectedIndex = 0;

}
//really want to print the tshirt
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.location = canvas.toDataURL('image/png');
	};


}
//Converting degrees to Radians for drawing circles on canvas
function degreesToRadians(degrees){
	return (degrees*Math.PI)/180;
}