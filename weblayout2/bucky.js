window.onload = function(){
	getStuff();
}

function getStuff(){
	var list = document.querySelectorAll("#tuna");
	list[0].onclick = talk;
	list[1].onclick  = talk;

}
function talk(){
	alert('yo Mama!');
}