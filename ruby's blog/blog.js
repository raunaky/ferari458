window.onload = function(){

	var button = document.getElementById("showAll");
	button.onclick = function(evnt) {
		showBlog();
	}
	var reset = document.getElementById("reset");
	reset.onclick = function(evnt){
		window.location.reload();
	}

	var searchButton =  document.getElementById("search");
	searchButton.onclick = function(evnt){
		searchBlog();
	}
}

// Blog Object Constructor

function Blog(body,date){
	//Assign the properties
	this.body = body;
	this.date = date;
}

var blog = [ new Blog("Got the new Cube I  Ordered ....",new Date(02/04/2015)),
			new Blog("Solved the new cube out of course ....",new Date(06/19/2012)),
			new Blog("Managed to get a headache toiling .....",new Date(08/16/2005)),
			new Blog("Managed a 7x7x7 cube for sale online ....",new Date(11/1/2010))];

	// Show the list of blog entries 

	function showBlog(numEntries){
		//Sort the blog accordingly to show the latest blog on the top 
		  // blog.sort(function(blog[i],blog[i]+1){ return blog[i]+1.date - blog[i].date});
		// Adjust the number of entries to show the full blog , if necessary 
		if(!numEntries){
			numEntries = blog.length;
		}
		// Show the blog entries
		var i = 0, blogText  = "";
		while(i< blog.length && i< numEntries){
			//To put a gray background for every alternate  blog entry


			if( i % 2==0){
				blogText+="<p style='background-color : #cfcfcf'>"
			}else{
				blogText+='<p>'
			}
			//Generate the formatted blog HTML code \
			blogText+="<strong>" + (blog[i].date.getMonth()+1) +"/" + (blog[i].date.getDate())+"/" +blog[i].date.getFullYear() +"</strong><br/>" + blog[i].body +"</p>";

			i++;
		}
		//set the blog HTML code on the page 
		document.getElementById("blog").innerHTML = blogText;
	}

function searchBlog(){
	var searchText =  document.getElementById("searchText").value;
	for( var i = 0;i<blog.length;i++){

		if(blog[i].body.toLowerCase().indexOf(searchText.toLowerCase())!= -1){
			alert("Match Found");
			break;
		}
	}
	if(i == blog.length){
		alert("Sorry! No match Found");
	}
}			

// Need to modularize code in next checkin as oojs