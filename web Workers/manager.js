
window.onload = function() {
	var worker = new Worker("web_worker.js");
		worker.postMessage("ping");

		worker.onmessage = function(evnt) {
			var msg = "Worker says " + evnt.data  ;
			document.getElementById("output").innerHTML = msg;
		
		}
}

