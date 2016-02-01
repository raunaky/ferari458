$(document).ready(function(){

	var v = false;
	var $f, $m;

	$("#vegOn").click(function(){
		if (v == false) {
			$f = $(".fish").parent().parent().detach();
				$(".hamburger").replaceWith("<li class = 'portobello'><em>Portobello Mushroom </em></li>");
				$(".meat").after("<li class = 'tofu'><em>Tofu</em></li>");
			$m = $(".meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
			v = true;
		};
		//end if
		// end of the go Vegeterian button
	});

	/*The actions for the restore button to restore the DOM back to its normal stable state*/

	$("button#restoreMe").click(function(){
		if (v == true) {
			
			$(".portobello").parent().parent().removeClass("veg_leaf");
			$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			
			$(".menu_entrees li").first().before($f);

			$(".tofu").parent().parent().removeClass("veg_leaf");
			$(".tofu").each(function(i){
				$(this).after($m[i]);
			})
			$(".tofu").remove();
			v = false;
		};
	})
});