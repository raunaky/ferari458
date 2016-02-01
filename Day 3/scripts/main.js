/*Al the new requirements to highight on hover and other stuffs as to click on the box to see the discount  on any of the 
four images, which has a discount*/
$(document).ready(function(){
	$(".guess_box").click(checkForCode);
	function getRandom(num) {
		var my_num = Math.floor(Math.random()*num);
		return my_num;
	}
	var hideCode = function(){
		var numRand = getRandom(4);
		$(".guess_box").each(function(index,value){
			if (numRand == index) {
				$(this).append("<span id='has_discount'></span>");
				return false;
			};
		})
	}
 /*the hide code is called to append all the span with discount that appears in the DOM*/
	hideCode();
	//Tells what the discount code is
		function checkForCode(){
			var discount;
			
			if($.contains(this,document.getElementById("has_discount"))) {
				var my_num = getRandom(100);
				discount = "<p> Your CODE : CODE" + my_num +"</p>";

			}else {
				discount = "<p style='color:red'>Sorry, no discount this time!</p>"
			}
				
			$(".guess_box").each(function(){
				if ($.contains(this,document.getElementById("has_discount"))) {

					$(this).addClass("discount");
				} else{
					$(this).addClass("no_discount");
				}
				$(this).unbind();
				
			});
				$("#result").append(discount);

		}
		$(".guess_box").hover(function(){
			$(this).addClass("my_hover");
		},function(){
			$(this).removeClass("my_hover");
		})
		
});