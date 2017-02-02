$(document).ready(function() {

	$('#lucky-dip').click(function() {
		var range = $('input[type=radio][name=range]:checked').val();
		var draw = $('input[type=radio][name=draw]:checked').val();
		$('#yourNumbers').html(luckyDip(1, range, draw).join("-"));
	});


log("controller.js loaded...");

});