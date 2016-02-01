try{

var worker = new Worker("webworker_1");
worker.onmessage = function(evnt) {
	document.getElementById("quote").innerHTML = evnt.data; 
 }catch(e) {
 	alert(e);
 }
}

var quotes = ["I hope life isn’t a joke, because I don’t get it.",
"There is a light at the end of every tunnel... just pray it’s not a train!",
"Do you believe in love at first sight or should I walk by again?"];

var index  = Math.floor(Math.random() *quotes.length);
worker.postMessage(quotes[index]);