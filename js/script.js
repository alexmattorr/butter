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

function signinOverlay() {
	$(document).ready(function(){
		$(".signin-overlay").click(function(){
			$(".overlay").addClass("is-active");
		});
		
		$(".overlay-button").click(function(){
			$(".overlay").removeClass("is-active");
		})
	});	
};


$(document).ready(function(){
  $("button").click(function(){
    $("p:first").addClass("intro");
  });
});

mobileToggle();
mobileColor();
signinOverlay();