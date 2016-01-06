

function Movie(title,gener, rating , showTime) {
	this.title = title;
	this.gener =  gener;
	this.rating = rating;
	this.showTime = showTime;
	this.getNextShowTime = function() {


		var now = new Date().getTime();

		for (var i = 0; i < this.showTime.length; i++) {
			var showTime  = getTimeFromString( this.showTime[i] );
			if(showTime - now >0){
				return "Next show of : " +this.title + "is @ " + this.showTime[i];
			}
		};
		return null;


	}
}

//Done using object literal
// var movie1 = {
// 	title : "Plan 9 from Outer Space",
// 	gener : "cult classic",
// 	rating: 2,
// 	showTime : ["3:00pm","7:00pm","11:00pm"] 
// };

// var movie2 = {
// 	title : "Forbidden Planet",
// 	gener : "classic sci-fi",
// 	rating: 5,
// 	showTime : ["5:00pm","9:00pm"] 
// };

// var banzaiMovie = {
// 	title: "Buckaroo Banzai",
// 	genre: "Cult classic",
// 	rating: 5,
// 	showTime: ["1:00pm", "5:00pm", "7:00pm"]
// };

	var movie1 =  new Movie("Plan 9 from Outer Space","cult classic",2,["3:00pm","7:00pm","11:00pm"]);
	var movie2 =  new Movie("Forbidden Planet","classic sci-fi",5, ["5:00pm","9:00pm"]);
	var banzaiMovie =  new Movie("Buckaroo Banzai","cult classic",5,["1:00pm","5:00pm","7:00pm"]);

function getNextShowTime(movie) {

	var now = new Date().getTime();

	for (var i = 0; i < movie.showTime.length; i++) {
		var showTime  = getTimeFromString( movie.showTime[i] );
		if(showTime - now >0){
			return "Next show of : " +movie.title + "is @ " + movie.showTime[i];
		}
	};
	return null;

}


function getTimeFromString(timeString) {

	var theTime = new Date();
	var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}

var nextShowing = movie1. getNextShowTime();
alert(nextShowing);

nextShowing = movie2.getNextShowTime();
alert(nextShowing);


nextShowing = banzaiMovie.getNextShowTime(banzaiMovie);
alert(nextShowing);