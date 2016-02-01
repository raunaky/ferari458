$(document).ready(function(){
	$(".guess_box").click(function(){
		$(".guess_box p").remove();
		var discount = Math.floor((Math.random()*5) +5);
		var discount_msg = "<p> Your discount is " + discount + "%</p>";
		/*alert(discount_msg);*/
		$(this).append(discount_msg);
	});
});