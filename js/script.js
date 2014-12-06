function scriptJS() {
	$(document).ready(function() {

		function mobileToggle() {
			$(".main-header-mobile-button").click(function(){
		    	$(".main-header-mobile").toggleClass('is-active');
			});
		};

		function mobileColor() {
			$(".main-header-mobile-button").click(function(){
				$(this).toggleClass("mobile-bg-coal");
			});
		};

		function signinOverlay() {
			$(".signin-overlay").click(function(){
				$(".overlay").addClass("is-active");
			});
			
			$(".overlay-button").click(function(){
				$(".overlay").removeClass("is-active");
			})
		};

		// Image Slider
		function imgSlider() {
			$(".carousel-next").on("click", function(e) {
				var currentActiveImage = $(".image-active");
				var nextActiveImage = currentActiveImage.next();

				if(nextActiveImage.length == 0) {
					nextActiveImage = $(".carousel-inner img").first();
				};

				currentActiveImage.removeClass("image-active").addClass("image-hidden");
				nextActiveImage.addClass("image-active").removeClass("image-hidden");
				$(".carousel-inner img").not([currentActiveImage, nextActiveImage]);

				e.preventDefault();
			});

			$(".carousel-previous").on("click", function(e) {
				var currentActiveImage = $(".image-active");
				var nextActiveImage = currentActiveImage.prev();

				if(nextActiveImage.length == 0) {
					nextActiveImage = $(".carousel-inner img").last();
				}

				currentActiveImage.removeClass("image-active").addClass("image-hidden");
				nextActiveImage.addClass("image-active").removeClass("image-hidden");
				$(".carousel-inner img").not([currentActiveImage, nextActiveImage]);

				e.preventDefault();
			});
		};
		
		mobileToggle();
		mobileColor();
		signinOverlay();
		imgSlider();
	});
};

scriptJS();

