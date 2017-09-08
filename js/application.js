$(document).ready(function () {
    var scroller = 0;

    // seting the videojs and the fullpage.js

    $('.header1').magicWand({
        
            'animation': 'color',
        
            'color': '#00ff1d'
       
          });
        
        

    var landingPageVideo = videojs('landing-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var secondPageVideo = videojs('second-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var thirdPageVideo = videojs('third-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var fourPageVideo = videojs('four-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var fivePageVideo = videojs('five-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var sixPageVideo = videojs('six-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'
    });

    var sevenPageVideo = videojs('seven-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto',

    });

    var eightPageVideo = videojs('eight-page-video', {
        controls: false,
        autoplay: false,
        preload: 'auto'

    });

    var backgroundSound = document.getElementById('backgroundSound')

    // settings to the fullpage.js

    $('#fullpage').fullpage({

        sectionsColor: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        fitToSection: true,
        autoScrolling: true,


        'afterLoad': function (anchorLink, index) {

            // indicating the indexes of the different sections and specific individual settings for each section 

            var that = this;

            if (index == 1) {
                landingPageVideo.play()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    $('.scroll-downs0').css('display', 'initial')
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').hide();

            }

            if (index == 3) {
                landingPageVideo.pause()
                secondPageVideo.play()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();

            }

            if (index == 5) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.play()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();
            }

            if (index == 7) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.play()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();
            }

            if (index == 9) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.play()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();
            }

            if (index == 11) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.play()
                sevenPageVideo.pause()
                eightPageVideo.pause()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();
            }

            if (index == 13) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.play()
                eightPageVideo.pause()

                backgroundSound.play()

                setTimeout(function () {
                    that.find('.scroll-downs').css('display', 'initial');
                }, 5000);

                $('#iconMute').show();

                $('.on-landing-page').show();
            }


            if (index == 15) {

                landingPageVideo.pause()
                secondPageVideo.pause()
                thirdPageVideo.pause()
                fourPageVideo.pause()
                fivePageVideo.pause()
                sixPageVideo.pause()
                sevenPageVideo.pause()
                eightPageVideo.play()

                backgroundSound.pause()

                scroller++

                if (scroller >= 2) {

                    $('.comingSoon').remove();
                    $('.date').remove();
                    $('.movieName').remove();
                    $('.officalTrailers').remove();
                    $('.eight-page-video').remove()
                }

                // animations of css classes on last section

                $('.fade1').delay(0).fadeIn(3000).fadeOut(3000)

                $('.fade2').delay(6000).fadeIn(3000).fadeOut(3000)

                $('.fade3').delay(12000).fadeIn(3000).fadeOut(3000)

                $('.fade4').delay(18000).fadeIn(3000).fadeOut(3000)

                $('.fade5').delay(24000).fadeIn(3000)

                $('#iconMute').hide();

                $('.on-landing-page').hide();

            }

        },

        // setting appearing for mouse scroll icon


        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {



            if (slideIndex == 1) {

                $.fn.fullpage.setMouseWheelScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);
            }

            if (slideIndex == 0) {

                $.fn.fullpage.setMouseWheelScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
            }



        }


    });

    // setting up the navigation bar and its timing

    var timer = null;
    var mainMenu = $('#main-menu');

    setTimeout(function () {

        mainMenu.removeClass('hidden')

    }, 1000);

    setTimeout(function () {

        mainMenu.addClass('hidden')

    }, 5000);

    $(document).scroll(function () {

        if (onmousemove) {
            mainMenu.removeClass('on-landing-page');
        } else {
            mainMenu.addClass('on-landing-page');
        }

    });

    $("#fullpage").on('mousemove', function () {
        mainMenu.removeClass('hidden');
        try {
            clearTimeout(timer);
        } catch (e) {}
        timer = setTimeout(function () {
            mainMenu.addClass('hidden');
        }, 5000);
    });

    // black fade between slides

    $(".fp-controlArrow").click(function () {

        $(".videoSlide").animate({

            opacity: 0

        }, 600);

    });

    $(".back").click(function () {

        $(".videoSlide").animate({

            opacity: 1

        }, 400);

    });

    // setting video play on the back buttons of sections

    $(".back1").click(function () {

        secondPageVideo.play()

    });

    $(".back2").click(function () {

        thirdPageVideo.play()

    });

    $(".back3").click(function () {

        fourPageVideo.play()

    });

    $(".back4").click(function () {

        fivePageVideo.play()

    });

    $(".back5").click(function () {

        sixPageVideo.play()

    });


    $(".back6").click(function () {

        sevenPageVideo.play()

    });

    // setting of audio mude button

    $('#iconMute').hover(function () {
            $(this).css({
                opacity: 1
            })
        },
        function () {
            $(this).css({
                opacity: 0.1
            })
        }
    );

});

var clicks = 0;

$('#iconMute').click(function () {
    clicks++;

    var x = (clicks / 2);

    if (x % 1 == 0) {
        $('#backgroundSound').trigger("play");
    } else {
        $('#backgroundSound').trigger("pause");
    }
});

// video move on mouse move animation

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.moveAround').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    //  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (200 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    //  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

// floating settings of text

$('.floatText').jqFloat({
    height: 5,
    speed: 10000
});

$('.float').jqFloat({
    width: 80,
    height: 80,
    speed: 6000
});