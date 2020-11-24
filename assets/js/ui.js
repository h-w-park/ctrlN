$(document).ready(function(){
 
	$('.owl-carousel').owlCarousel({
		//animateOut: 'fadeOut',
		autoplay:true,
		autoplayTimeout:5000,
		//autoplayHoverPause:true,
		loop:true, 
		items:1,
		mouseDrag: false,
		margin:0,		
		onInitialized: startProgressBar,
		onChanged: resetProgressBar,
		onTranslate: startProgressBar,
		nav:true
	});


	function startProgressBar() {
	  // apply keyframe animation
	  $(".owl-progress").css({
		width: "100%",
		transition: "width 5000ms"
	  });
	  $(".owl-item.active .main-catchy-img").addClass("move");
	}

	function resetProgressBar() {
	  $(".owl-progress").css({
		width: 0,
		transition: "width 0s"
	  });
	  $(".main-catchy-img").removeClass("move");
	}



});

