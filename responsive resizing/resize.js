
var timerId = setInterval("changeImage();" , 5000);
function resizeDog() {
	console.log("window is being resized");
	//document.getElementById("image").src = "rauny.png";
	document.getElementById("image").style.height = (document.body.clientHeight-100) * 0.6;
	

}
function changeImage(timerId) {
	console.log("Image change initiated");
	var image = document.getElementById("image");
	image.src = "rauny2.png";
	clearInterval(timerId);
}
