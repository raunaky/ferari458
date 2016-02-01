
var w  =367;
var m = 10;
var clix = [0,0,0,0];
var  intrval_1,intrval_2,intrval_3;


window.onfocus = goLightening;
window.onblur = stopLightening;

$(document).ready(function(){

	goLightening();
	$("button#btnRandom").click(randomize);
	$("button#btnReset").click(reset);

	$("div#head").click(function headClick(){
		moveMe(0,this);
	})

	$("#eyes").click(function(){
		moveMe(1,this);
	});

		$("#nose").click(function(){
			moveMe(2,this);
		});

	$("#mouth").click(function(){
		moveMe(3,this);
	})

});
	//code to create the lightening effect 

	function lightening_one() {
		$("#container #lightening1").fadeIn(250).fadeOut(250);

	}
		function lightening_two() {
		$("#container #lightening2").fadeIn(250).fadeOut(250);

	}
		function lightening_three() {
		$("#container #lightening3").fadeIn(250).fadeOut(250);

	}

	function goLightening() {
		//code to start the lightening effect

		intrval_1 = window.setInterval(function(){
			lightening_one();
		},4000);

		intrval_2 = window.setInterval(function(){
			lightening_two();
		},5000);

		intrval_3 = window.setInterval(function(){
			lightening_three();
		},7000);
		
	}

	function stopLightening() {

		//code to stop the lightening

		window.clearInterval(intrval_1);
		window.clearInterval(intrval_2);
		window.clearInterval(intrval_3);
	}

//code to move the image strips as per the part of the image being clicked
function moveMe( i , obj) {

	if (clix[i] < 9) {
		$(obj).animate({left:"-=367px"},500);
		clix[i] = clix[i]+1;
	} else{
		clix[i] = 0;
		$(obj).animate({left:"0px"},500);
	};
}

//Code to randomize and automate the selections and give a shuffled Image
	
function randomize() {
	var move_to = 0;
	$(".face").each(function(index){
		var target_position = getRandom(m);
		var current_position = clix[index];
		clix[index] = target_position;
		
			if (target_position >current_position) {
				move_to = (target_position - current_position )* w;
				$(this).animate({left:"-="+move_to +"px"},500);
			} else if (target_position < current_position) {
				move_to = (current_position  - target_position)* w;
				$(this).animate({left:"+="+move_to +"px"},500);
			} else{
				//Do nothing both target and current are the same so image is organised 
			};
		
	})
}

// code to generate a random number 

function getRandom(num) {

	var my_num = Math.floor(Math.random()*num);
	return my_num;
}

function reset() {

	$(".face").each(function(index){

		clix[index] = 0;
		$(this).animate({left: "0px"},500);
		
	})
}