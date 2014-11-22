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

// Image Slider
$(document).ready(function() {
	$(".carousel-next").on("click", function(e) {
		var currentActiveImage = $(".image-active");
		var nextActiveImage = currentActiveImage.next();

		if(nextActiveImage.length == 0) {
			nextActiveImage = $(".carousel-inner img").first();
		};

		currentActiveImage.removeClass("image-active").addClass("image-hidden").css("z-index", -10);
		nextActiveImage.addClass("image-active").removeClass("image-hidden").css("z-index", 20);
		$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

		e.preventDefault();
	});

	$(".carousel-previous").on("click", function(e) {
		var currentActiveImage = $(".image-active");
		var nextActiveImage = currentActiveImage.prev();

		if(nextActiveImage.length == 0) {
			nextActiveImage = $(".carousel-inner img").last();
		}

		currentActiveImage.removeClass("image-active").addClass("image-hidden").css("z-index", -10);
		nextActiveImage.addClass("image-active").removeClass("image-hidden").css("z-index", 20);
		$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

		e.preventDefault();
	});
});


mobileToggle();
mobileColor();
signinOverlay();