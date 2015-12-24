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
	var randomBlogButton = document.getElementById("randomSearch");
	randomBlogButton.onclick = function(evnt) {
		randomBlog();
	}
}


// Blog Object Constructor

function Blog(body,date){
	//Assign the properties
	this.body = body;
	this.date = date;

	//Returns a string representation of blog entry
	this.toString = function(){
		return "[" + (this.date.getMonth() + 1) + "/" +this.date.getDate() + "/" + this.date.getFullYear() + "]" +this.body;
		}

	//Returns a formatted HTTML representation of the blog Entry 
		this.toHTML = function(highlight) {
		// Use a gray background as highlight if specified
					var blogHTML = "";
					blogHTML +=highlight ? "<p style='background-color:#cfcfcf'>" : "<p>";

					//Generate the formatted blog HTML code

					blogHTML+= "<strong>"+ (this.date.getMonth() + 1) + "/" +this.date.getDate() + "/" + this.date.getFullYear() +"</strong><br/>" +
					this.body +"</p>";
					return blogHTML;
		}


// See if the blog body contains a text 
			this.containsText = function(text) {
				return (this.body.toLowerCase().indexOf(text.toLowerCase())!= -1);
				}

		}


var blog = [ new Blog("Got the new Cube I  Ordered ....",new Date(02/04/2015)),
			new Blog("Solved the new cube out of course ....",new Date(06/19/2012)),
			new Blog("Managed to get a headache toiling .....",new Date(08/16/2005)),
			new Blog("There is a great joy in coding .....",new Date(12/24/2015)),
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
		var i = 0, blogListHTML  = "";
		while(i< blog.length && i< numEntries){
			//To put a gray background for every alternate  blog entry
			blogListHTML+=blog[i].toHTML( i % 2 == 0);

			i++;
		}
		//set the blog HTML code on the page 
		document.getElementById("blog").innerHTML = blogListHTML;
	}

function searchBlog(){
	var searchText =  document.getElementById("searchText").value;
	for (var i = 0; i < blog.length; i++) {
		//See if the blog entry contains the search Text 

		if(blog[i].containsText(searchText)){
			alert(blog[i]);
			break;
		}
	}
	if(i == blog.length){
		alert("Sorry! There are no blog entries containing the search text");
	}
}
	// Display a randomly chosen blog entry 

	function randomBlog(){
		var i = Math.floor(Math.random() * blog.length);
		alert(blog[i]);
	}

	// Need to fix the date issue 