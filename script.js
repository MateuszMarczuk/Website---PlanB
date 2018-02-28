window.onscroll = function(){scrollfunction()};
            function scrollfunction(){
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    document.getElementById("myBtn").style.display = "none";
                }
            }

            function topFunction(){
                 $('html, body').animate({scrollTop:0}, 'slow');
            }


window.sr = ScrollReveal();
    sr.reveal('.left', {
        reset: true,
        delay: 300,
        distance: 0
    });
    sr.reveal('h2, p', {
        reset: true,
        delay: 300
    });


$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});


