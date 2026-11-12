document.addEventListener("touchstart", function(){}, true);
$(document).ready(function() {

	//Otfrli browser

			    $(document).ready(function(){
			    $.reject({
			        reject: {
			  // chrome: true,
/*
			            firefox2: true,
			            firefox3: true,
			            firefox4: true,
			            firefox5: true,
			            chrome2: true,
			            chrome3: true,
			            chrome4: true,
			            safari4: true,
			            safari3: true,
			            safari5: true,
			            safari6: true,
			            opera12: true,
			            opera11: true,
			            opera10: true,
*/
			            msie6: true,
			            msie7: true,
			            msie8: true,
			            msie9: true

			        },

			    header: 'Unsupported (old) version of Internet Browser!', // Header Text
			paragraph1: 'You are currently using an old unsupported browser', // Paragraph 1
			paragraph2: 'Please install one of the many optional browsers below and visit us again',
			closeMessage: 'If you close this window our page will be visible but not fully functional !'
			// Message below close window link
			    })
			return false;



			});

		//Otfrli browser

		if($(window).innerWidth() > 991) {
//   $('.parallax-container').jKit('parallax', { 'strength': '1.3', 'axis': 'both', 'detect': 'scroll'});
//	$('.mobile_blocks_cont').jKit('parallax', { 'strength': '0.3', 'axis': 'both'});
// 	$('.business_logos_parallax').jKit('parallax', { 'strength': '0.1', 'axis': 'both'});
}
// scroll klienti partneri
$("#clients_scroll").scrollForever({dir:"top",container:".b-con",inner:"div"});
$("#a1").scrollForever();

// $("body").niceScroll();

(function($){
        $(window).on("load",function(){

	        if ($("html").hasClass("no-touch")) {
// 		      $(".popup_content").niceScroll();
 			  $(".popup_content").mCustomScrollbar();
			}

            $(".popup_content").prepend("<a title='Close' class='popup-close'></a>");

            $(".popup-close").click(function(){
            $(".popups_cont").fadeOut('fast');

/*
            $('html').removeClass('overflow-hidden');
            $('body').removeClass('overflow-hidden');
*/
        	});

            $(".close_bg_product").click(function(){
            $(".popups_cont").fadeOut('fast');
/*
            $('html').removeClass('overflow-hidden');
            $('body').removeClass('overflow-hidden');
*/
        	});
        });

    })(jQuery);

// scroll klienti partneri

	$('#glavni_slides').flickity({
		cellAlign: 'left',
		wrapAround: true,
		pageDots: true,
		autoPlay: 5700,
		pauseAutoPlayOnHover: true,
		prevNextButtons: false,
		imagesLoaded: true,
		touchVerticalScroll: false,
		contain: true
	});

	$('.product_slider_pop').flickity({
		cellAlign: 'left',
		wrapAround: true,
		pageDots: true,
		autoPlay: 5700,
		pauseAutoPlayOnHover: true,
		prevNextButtons: false,
		imagesLoaded: true,
		touchVerticalScroll: false,
		contain: true
	});


/*
	$('.parallax-container').hover({
		$('.parallax').toggleClass('anim_mouse');
	});
*/

	/***************** Counter ******************/
	$('#clock-countdown').countdown('2017/02/08 23:30:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''

				+ '<div class="counter-container"><div class="title_counter">Under Construction</div><div class="counter-box first"><div class="number">%-D</div><span>day%!d</span></div>'

				+ '<div class="counter-box"><div class="number">%H</div><span>h</span></div>'
				+ '<div class="counter-box"><div class="number">%M</div><span>min</span></div>'

			));
		});

		/***************** Typing ******************/

	$(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 200,
            startDelay: 2000,
            backDelay: 5000,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

	/***************** Waypoints ******************/

	$('.wp1s').waypoint(function() {
		$('.wp1s').addClass('animated fadeInLeft duration-1s');
	}, {
		offset: '80%'
	});

	$('.wp2s').waypoint(function() {
		$('.wp2s').addClass('animated duration-1s fadeInRight');
	}, {
		offset: '80%'
	});

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated delay-1s duration-2s fadeIn');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated duration-2s slideInRight');
	}, {
		offset: '80%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated delay-05s fadeInUp');
	}, {
		offset: '80%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated delay-05s fadeInUp');
	}, {
		offset: '80%'
	});

	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated duration-2s bounceInRight');
	}, {
		offset: '75%'
	});

	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated zoomIn');
	}, {
		offset: '75%'
	});

	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInLeft');
	}, {
		offset: '80%'
	});

	/***************** Flickity ******************/

	$('#featuresSlider').flickity({

		cellAlign: 'left',
		wrapAround: true,
		pageDots: false,
		autoPlay: 3500,
		pauseAutoPlayOnHover: false,
		prevNextButtons: false,
		imagesLoaded: true,
		touchVerticalScroll: false,
  contain: true
	});

	$('#showcaseSlider').flickity({
		cellAlign: 'left',
		wrapAround: true,
		pageDots: false,
		autoPlay: 6000,
		pauseAutoPlayOnHover: true,
		prevNextButtons: true,
		imagesLoaded: true,
		touchVerticalScroll: false,
		contain: true
	});

	// Visina na slika

/*
			    $(function () {


			        var $window = $(window).on('resize', function () {
			            var that = this;


			                var $content = $(this).find('.slide_img');
			                var $title = $(this).find('.showcase-slider');

			                $('.slide_img',this).height(highestBox);

			                $content.css("height", $(that).height() - 0 - $title.height());


			        }).trigger('resize'); //on page load

			    });
*/
			// Visina na slika



	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});

$(document).ready(function() {
	$("a.under_const").fancybox({
		padding: 0,
		'width': 430,
        'height': 330,
	});
});

$(document).ready(function() {
	$(".fullscrn_slider").fancybox({
	    closeEffect : 'elastic',
	    padding: 0,
	    closeSpeed  : 150

	});
});

$(document).ready(function() {
	$(".fancybox").fancybox({
	    closeEffect : 'elastic',
	    padding: 0,
	    closeSpeed  : 150

	});
});

$(document).ready(function() {
	$(".gal_thumbs").fancybox({
	    closeEffect : 'elastic',
	    padding: 0,
	    closeSpeed  : 150

	});
});


// Christmas popup

/*
jQuery(document).ready(function () {
	 var visited = $.cookie('visited'); // create the cookie


    if (visited == 'yes') {
        return false; // second page load, cookie is active so do nothing
    }
    else {
		if ($("html").hasClass("home")) {
        $.fancybox.open({
        padding: 0,
        content: "<video width='1180px' height='auto' autoplay style='max-width:100%; display:block;'> <source src='./christmas/semos_christmas.mp4' type='video/mp4'> </video>",
        type: "html", // cause you are using html tags
        afterShow: function () {
            setTimeout(function () {
                $.fancybox.close();
            }, 12000);
        }
    }); // fancybox
		}
    };
    // assign cookie's value and expiration time
    $.cookie('visited', 'yes', {
        expires: 2 // the number of days the cookie will be effective
    });
    // your normal fancybox script

}); 
*/


// Product Popups
$(document).ready(function() {

    $('.popups_cont').hide();
    $('.product_open').click(function(){
        var target = "#" + $(this).data("target");
        $(".popups_cont").not(target).hide();
        $(target).fadeIn('fast');
        $('.product_slider_pop').flickity('resize');
/*
        $('html').addClass('overflow-hidden');
        $('body').addClass('overflow-hidden');
*/
    });

    $(".popup-close").click(function(){
            $(".popups_cont").fadeOut('fast');
/*
            $('html').removeClass('overflow-hidden');
            $('body').removeClass('overflow-hidden');
*/
        });

});



// meni novo scroll

jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked');
		$('.cd-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
				$('html').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
				$('html').addClass('overflow-hidden');
			});
		}
	});
});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 800);
			return false;
		}
	}
});
