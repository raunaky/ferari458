
onmessage = pingPong;
function pingPong(evnt) {
	if(evnt.data =="ping"){
		postMessage("pong");
	}
}