$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
     'scrollTop': $target.offset().top -110
}, 900, 'swing');
	});
});

$(document).ready(function(){
    var button = document.getElementById('buttonbrand_id');
    $(button).click(function(){
    $("html, body").animate({ scrollTop: 0, }, 900);
    return false;
 });
});

$("#aaa").click(function() {
    $('html, body').animate({
        scrollTop: $("#kontakt").offset().top -110
    }, 2000);
});
