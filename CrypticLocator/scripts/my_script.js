$(document).ready(function(){
	alert("My script loaded");
	$("#datepicker").datepicker({
		changeMonth : true,
		changeYear : true
	});

	$("#type_select").buttonset();

	$("#slide_dist").slider({
		value :0,
		min : 0,
		max : 500,
		step : 10,
		orientation :"horizontal",
		slide : function(event , ui) {
			$("#distance").val(ui.value);
		}
	});
	$("#slide_weight").slider({
		value:0,
		min : 0,
		max : 5000,
		step : 5,
		slide : function(event , ui) {
			$("#weight").val(ui.value);
		}
	});
	$("#slide_height").slider({
		value:0,
		min : 0,
		max : 5000,
		step : 5,
		slide : function(event , ui) {
			$("#height").val(ui.value);
		}
	});
		$("#slide_lat").slider({
		value:0,
		min : -90,
		max : 90,
		step : 0.00001,
		slide : function(event , ui) {
			$("#latitude").val(ui.value);
		}
	});
			$("#slide_long").slider({
		value:0,
		min : -180,
		max : 180,
		step : 0.00001,
		slide : function(event , ui) {
			$("#longitude").val(ui.value);
		}
	});
	$("#red ,#green, #blue").slider({
		value :127,
		range : "min",
		min : 0,
		max : 255,
		step : 0.00001,
		slide : refreshSwatch ,
		change :refreshSwatch
	});
});