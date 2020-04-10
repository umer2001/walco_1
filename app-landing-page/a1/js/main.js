$(document).ready(function(){
	
	/* Function Calls */ 
	new WOW().init();
	navbarFixed ();   
	
	/* tooltip start */
	$('[data-toggle="tooltip"]').tooltip();
	/* tooltip end */
	
	/* smoothScroll start */
	var scroll = new SmoothScroll('a[href*="#"]', {
			easing: 'linear',
			speed: 800,
			updateURL: false, 
			speedAsDuration: true,
			offset:20,
		});
	var logScrollEvent = function (event) {
		$('.navbar-collapse').collapse('hide');
	};
	document.addEventListener('scrollStart', logScrollEvent, false);
	/* smoothScroll end */
	
	/* Navbar Fixed Start  */
    function navbarFixed(){
        if ( $('body').length ){
			var scroll = $(window).scrollTop();   
			if (scroll >= 20) {
				$("#mynavbar").addClass("navbar_fixed");
			} else {
				$("#mynavbar").removeClass("navbar_fixed");
			}
			$(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 20) {
                    $("#mynavbar").addClass("navbar_fixed");
                } else {
                    $("#mynavbar").removeClass("navbar_fixed");
                }
            });   
        };
    }; 
	/* Navbar Fixed End */
	
	/* search overlay start */
	$(".search").click(function(){
		$(".overlay").addClass("show");
		$(".close_search").addClass(" rotateIn animated");
		$(".overlay .input-group").addClass(" jackInTheBox animated");
	});
	$(".close_search").click(function(){
		$(".overlay").removeClass("show");
	});
	/* search overlay end */
	
	/* portfolio start */
	if($(".mixitup").length){
		var containerEl = document.querySelector('.mixitup');
		var mixer = mixitup(containerEl, {
			animation: {
				effects: 'fade scale(0.5)'
			},
			selectors: {
				target: '.mix',
				control: '[data-mixitup-control]'
			}
		});
	}
	$('[data-fancybox="gallery"]').fancybox({
		 buttons: [
			"zoom",
			"thumbs",
			"close"
		]
	});
	/* portfolio end */
	
	/* testimonial start */
	if($(".testimonial").length){
		var owl=$('.testimonial .owl-carousel');
		owl.owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			nav:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			dots:true,
			responsive : {
				0 : {
				},
				480 : {
				},
				768 : {
				}
			}
		});
		$('.owl-prev').click(function() {
			owl.trigger('prev.owl.carousel');
		});
		$('.owl-next').click(function() {
			owl.trigger('next.owl.carousel');
		});
	}
	/* testimonial end */
	
	/* Scroll to top start */
	if ($('.scroll_to_top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('.scroll_to_top').addClass('show');
					} else {
						$('.scroll_to_top').removeClass('show');
					}
				};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.scroll_to_top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	/* scrol to top end */
	
	/* animsition start */
	$(".animsitions").animsition({
		inClass: 'zoom-in',
		outClass: 'zoom-out',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'body', 
		loadingClass: 'preloader',
		loadingInner: '',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	});
	/* animsition end */
	
	/* features start */
	if($(".features").length){
		$('.device-holder-inner .owl-carousel').owlCarousel({
			loop:false,
			margin:10,
			nav:false,
			items:1,
			dots:false,
		});
	}
});