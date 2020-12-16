

$(document).ready(function(){


	$('.owl-carousel').owlCarousel({
		//animateOut: 'fadeOut',
		autoplay:true,
		autoplayTimeout:5000,
		//autoplayHoverPause:true,
		loop:true,
		items:1,
		touchDrag: false,
		mouseDrag: false,
		margin:0,
		onInitialized: initProgressBar,
		onResized: initProgressBar,
		onChange: startProgressBar,
		onChanged: resetProgressBar,
		onTranslate: startProgressBar,
		onTranslated: resetProgressBar,
		nav:true
	});

	function initProgressBar() {
	  // apply keyframe animation
	  $(".owl-progress").css({
		width: "100%",
		transition: "width 5000ms"
	  });
	}

	function startProgressBar() {
	  // apply keyframe animation
	  $(".owl-progress").css({
		width: "100%",
		transition: "width 5000ms"
	  });
	}

	function resetProgressBar() {
	  $(".owl-progress").css({
		width: 0,
		transition: "width 0s"
	  });
	}


	$(".left-nav").click(function(){
		var va1 = $(this).attr("href")
		var va2 = $(va1).offset();
		console.log(va1);
		$('html, body').animate({scrollTop : va2.top}, 500);

	});


});
