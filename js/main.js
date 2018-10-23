$(document).ready(function(){
	$('.nav__toggle').click(function() {
		$('.nav').toggleClass('nav--opened');
	});

	$('input[type="range"]').rangeslider({
		polyfill: false
	});
});
