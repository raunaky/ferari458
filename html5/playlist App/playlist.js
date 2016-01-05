window.onload = function() {

	var button = document.getElementById("addSong");
	button.onclick = function(evnt) {
		pickRandom();
		addNewSong();

		
	}	
																																																																																																																																																																																																																																																					
}

function addNewSong() {
	ul = document.getElementById("playlist");
	li = document.createElement("li");

	var song = document.getElementById("songName").value;
	if(song === ""){
		alert("please enter a song");
	}else{
		//alert("Adding :" + song + "...		");
	li.innerHTML = song;
	ul.appendChild(li);
	document.body.appendChild(ul);
	alert("The song: " + song + "added");

		save(songName);

	}
}

function pickRandom() {
	var color = ["pink","blue","green", "lightblueyellow", "grey", "lightblue" ,"orange"];

	var random =  Math.floor(Math.random() * color.length);
	document.body.style.background = color[random];

}

