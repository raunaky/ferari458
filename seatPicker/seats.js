
var seats = [[true,false,true,false,true,true,true,false,false],[true,false,true,false,true,true,true,false,false],[true,false,true,false,true,true,true,false,false],
[true,false,true,false,true,true,true,false,false],[true,false,true,false,true,true,true,false,false]];
var selSeat = -1;
window.onload = initSeats;
//window.onload = findSeat;

function initSeats() {
	//Set the background Image 
	//Initialize the appearance of all seats
		for (var i = 0; i < seats.length; i++) {
				for (var j = 0; j < seats[i].length; j++) {
					console.log(seats[i][j]);
				

					if (seats[i][j]) {

						//Set the seats to available

						document.getElementById("seat"+(i*seats[i].length +j)).src = "images/available.png";
						document.getElementById("seat"+(i*seats[i].length +j)).alt = "Seat Available";

					} else{
						//Set the seats to unavailable 
						document.getElementById("seat"+(i*seats[i].length +j)).src = "images/reserved.png";
						document.getElementById("seat"+(i*seats[i].length +j)).alt = "Seat Unavailable";						
					};

				
		 		}	
			}
	}

	function findSeat() {

		//IF seat is already available re-initialize them to de allocate all of them 

		if(selSeat >= 0){
			selSeat = -1;
			initSeats();
		}
		//Search through all the seats for availibility

		var i =0, finished = false;

		while(i<seats.length   && !finished){

			for (var j = 0; j < seats.length; j++) {
				
				// See if the current seats are available

				if(seats[i][j] && seats[i][j+1] && seats[i][j+2]){

					//Set the seats to selected 		

					selSeat = i *seats[i].length + j;

					//Setting the seats which are selected
					document.getElementById("seat"+(i*seats[i].length+j)).src  = "images/select_seat.png";
					document.getElementById("seat"+(i*seats[i].length+j)).alt  = "Your Seat";

					document.getElementById("seat"+(i* seats[i].length + j +1)).src = "images/select_seat.png";
		 			document.getElementById("seat"+(i* seats[i].length + j+1)).alt = "Your Seat !";

			 		document.getElementById("seat"+(i* seats[i].length + j+2)).src = "images/select_seat.png";
			 		document.getElementById("seat"+(i* seats[i].length + j+2)).alt = "Your Seat !";

					var accept = confirm("Seats  " +(j+1) + " through" +(j+3) + " in row" + (i+1) + " are available . Accept?" );
		 			
		 			//Prompt the user to accept the seats

		 			if(accept) {
		 				finished = true;
		 				break;
		 			}


				}else {
					 //The user rejects the seat so setting the seats to avaialable

					 document.getElementById("seat"+(i*seats[i].length+j)).src  = "images/available.png";
					 document.getElementById("seat"+(i*seats[i].length+j)).alt  = "Seats avaialable";

					document.getElementById("seat"+(i* seats[i].length + j)).src = "images/available.png";
		 			document.getElementById("seat"+(i* seats[i].length + j)).alt = "Seat Available !";

		 			document.getElementById("seat"+(i* seats[i].length + j +1)).src = "images/available.png";
		 			document.getElementById("seat"+(i* seats[i].length + j+1)).alt = "Seat Available !";

			 		document.getElementById("seat"+(i* seats[i].length + j+2)).src = "images/available.png";
			 		document.getElementById("seat"+(i* seats[i].length + j+2)).alt = "Seat Available !";


				}

			};
		}
		i++;
	}

