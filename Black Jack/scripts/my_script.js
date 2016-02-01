
$(document).ready(function(){

/*	Creating the card constructor to create all the cards */

	function Card(name,suit,value) {
		this.name = name;
		this.suit =suit;
		this.value = value;
	}

/*The deck object to hold all the the cards in the deck */

var deck  = [
	new Card("Ace","Hearts" ,11),
	new Card("Two","Hearts" ,2),
	new Card("Three","Hearts" ,3),
	new Card("Four","Hearts" ,4),
	new Card("Five","Hearts" ,5),
	new Card("Six","Hearts" ,6),
	new Card("Seven","Hearts" ,7),
	new Card("Eight","Hearts" ,8),
	new Card("Nine","Hearts" ,9),
	new Card("Ten","Hearts" ,10),
	new Card("Jack","Hearts" ,10),
	new Card("Queen","Hearts" ,10),
	new Card("King","Hearts" ,10),
	new Card("Ace","Diamonds" ,11),
	new Card("Two","Diamonds" ,2),
	new Card("Three","Diamonds" ,3),
	new Card("Four","Diamonds" ,4),
	new Card("Five","Diamonds" ,5),
	new Card("Six","Diamonds" ,6),
	new Card("Seven","Diamonds" ,7),
	new Card("Eight","Diamonds" ,8),
	new Card("Nine","Diamonds" ,9),
	new Card("Ten","Diamonds" ,10),
	new Card("Jack","Diamonds" ,10),
	new Card("Queen","Diamonds" ,10),
	new Card("King","Diamonds" ,10),
	new Card("Ace","Clubs" ,11),
	new Card("Two","Clubs" ,2),
	new Card("Four","Clubs" ,4),
	new Card("Five","Clubs" ,5),
	new Card("Six","Clubs" ,6),
	new Card("Seven","Clubs" ,7),
	new Card("Eight","Clubs" ,8),
	new Card("Nine","Clubs" ,9),
	new Card("Ten","Clubs" ,10),
	new Card("Jack","Clubs" ,10),
	new Card("King","Clubs" ,10),
	new Card("Queen","Clubs" ,10),
	new Card("Ace","Spades" ,11),
	new Card("Two","Spades" ,2),
	new Card("Four","Spades" ,4),
	new Card("Five","Spades" ,5),
	new Card("Six","Spades" ,6),
	new Card("Seven","Spades" ,7),
	new Card("Eight","Spades" ,8),
	new Card("Nine","Spades" ,9),
	new Card("Ten","Spades" ,10),
	new Card("Jack","Spades" ,10),
	new Card("King","Spades" ,10),
	new Card("Queen","Spades" ,10),

];

var hand = {
	cards :new Array(),
	current_total : 0,

	sumCardTotal : function(){
		this.current_total = 0;
		for (var i = 0; i < cards.length; i++) {
			var c = this.cards[i];
			this.current_total += c.value;

		};
		$("hdrTotal").html("Total : "+this.current_total);
	}
};
	
	/*Creating a new array of choosed cards so that the same card is not dealt more than once 
	to keep a track we are keeping those card's indexes in this used_cards[].*/
	
	var used_cards = new Array();
	
	// Deal function to let the user  only deal twice in his turn 
	function deal() {
		for (var i = 0; i < 2; i++) {
			hit();
		}
	}

// to generate a random number inorder to draw a random card from the deck
function getRandom(num) {

	var my_num = Math.floor(Math.random() *num);
	return my_num;
}	

// Creating the hit function which will add the respective cards images in the desired div in the DOM accordingly
	function hit(){
		var  good_card = false;
			do {

				var index = getRandom(52);
				if (!$.inArray(index,used_cards) > -1) {
					good_card = true;
					
					var c = deck[index];
					used_cards[used_cards.length] = index;
					hand.cards[hand.cards.length] = c;
					
					var $d = $("<div>");
					$d.addClass("current_hand").appendTo("#my_hand");
					$("img").appendTo($d).attr("src","images/cards/" +c.suit + "/" +c.name +".jpg").fadeOut("slow").fadeIn('slow');

				};

			}while(!good_card);
			good_card = false;
	}

	$("div#btnDeal").click(function(){
		deal();
		$(this).toggle();
	});

















});