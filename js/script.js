function mobileToggle() {
	$(document).ready(function() {
	  $(".main-header-mobile-button").click(function(){
	    $(".main-header-mobile").toggle();
	  });
	});
};

function mobileColor() {
	$(".main-header-mobile-button").click(function(){
		$(this).toggleClass("mobile-bg-coal");
	});
};


mobileToggle();
mobileColor();