
//$(document).ready(function(){
//
//    window.onscroll = function(){scrollfunction()};
//            function scrollfunction(){
//                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
//                    document.getElementById("myBtn").style.display = "block";
//                } else {
//                    document.getElementById("myBtn").style.display = "none";
//                }
//            }
//
//});

var przycisk = document.getElementById("buttonTo");

$(function () {
            $(document).scroll(function () {
	           var $nav = $(".fixed-top");
	               $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

//(function($) {
//  "use strict"; // Start of use strict
//
//  // Smooth scrolling using jQuery easing
//  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: (target.offset().top - 54)
//        }, 1000, "easeInOutExpo");
//        return false;
//      }
//    }
//  });
//
//  // Closes responsive menu when a scroll trigger link is clicked
//  $('.js-scroll-trigger').click(function() {
//    $('.navbar-default').collapse('hide');
//  });
//
//  // Activate scrollspy to add active class to navbar items on scroll
//  $('body').scrollspy({
//    target: '#mainNav',
//    offset: 54
//  });
//
//})(jQuery); // End of use strict
//
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
     'scrollTop': $target.offset().top -110
}, 900, 'swing');
//        $('body').scrollspy({target: ".navbar", offset: 50});
	});
});

$(document).ready(function(){
    var button = document.getElementById('buttonbrand_id');
    $(button).click(function(){
    $("html, body").animate({ scrollTop: 0 }, 900);
    return false;
 });
});

$("#aaa").click(function() {
    $('html, body').animate({
        scrollTop: $("#kontakt").offset().top -110
    }, 2000);
});
