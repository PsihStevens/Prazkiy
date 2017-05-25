
function owlCarousel() {

    $("#carusel-small").on("click", ".owl-item", function(event) {

        event.preventDefault();
        $(".owl-item").removeClass("active-slide");
        $(this).addClass("active-slide");
        var number = $(this).index();
        $('#carusel-full').trigger("to.owl.carousel", number);
    });



}

function fixMenu() {

    $(window).scroll(function(){

        if ($(window).scrollTop() > 300 ) {

            $('#second-menu-box').slideDown("slow");

        } else {

            $('#second-menu-box').slideUp("slow");

        }
    })
};

function hoverItem() {

    $(document).scroll(function(){
        if($(document).scrollTop()>10){
            $('#section-3 .hiden-text').css('opacity','1');
            $('#section-3 .hiden-text').addClass('animated');
            $('#section-3 .hiden-text').addClass('zoomIn');
        }
    });

    // $('#section-3 .item').hover(function(){

    //     // $(this).closest('.office-box').find('.office-content-box .office-tab')
    //     $(this).find('.hiden-text').slideDown(300);
    // },
    // function(){

    //     $(this).find('.hiden-text').slideUp(300);
    // });
};


function popUp() {

    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(e){ // лoвим клик пo ссылке с клaссoм open_modal
         e.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div).css('display', 'block').animate({opacity: 1}, 200);
                 $("html,body").addClass("noneScroll");

         }).css('display', 'flex');
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal.animate({opacity: 0}, 200, function(){ // пoсле этoгo
                $(this).css('display', 'none');
                $("html,body").removeClass("noneScroll");
                overlay.fadeOut(400); // прячем пoдлoжку
            });
     });
};

function mobMenuClose() {


};

function mobMenuUp() {

    $('#header .burger-memu').on('click', function() {

        $('#header .nav-menu').animate({right: 0}, 500);
    });

    $('#second-menu-box .burger-memu').on('click', function() {

        $('#second-menu-box .nav-menu').animate({right: 0}, 500);
    });

    $('.close-button').on('click', function() {

        $('.nav-menu').animate({right: '-100%'}, 500);
    });
};

$(document).ready(function(){

    owlCarousel();
    fixMenu();
    hoverItem();
    popUp();
    mobMenuUp();
    $('.js_popup').fancybox();
    // $("a.js_popup").attr('rel', 'mySlideshows').fancybox();

    $('#slider-header').owlCarousel({
        items: 1,
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        mouseDrag: true,
        pagination: false,
        autoplay: true,
        loop: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        // afterAction: syncPosition1,
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

    $('#carusel-full').owlCarousel({
        items: 1,
        singleItem: true,
        navigation: true,
        mouseDrag: false,
        pagination: false,
        // afterAction: syncPosition1,
        responsiveRefreshRate: 200,
        navText: ["",""],
        responsive:{
            0:{
                nav:true
            },
            600:{
                nav:false
            }
        },
    });

    $('#carusel-small').owlCarousel({
        items: 3,
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        mouseDrag: false,
        pagination: false,
        // afterAction: syncPosition1,
        responsiveRefreshRate: 200,
        navText: ["",""],
        onInitialized: function(event) {

            $('#carusel-small').find(".owl-item").eq(0).addClass("active-slide");
        }
    });

    $('#carusel-doc').owlCarousel({
        items: 2,
        singleItem: true,
        // margin:20,
        // center: true,
        navigation: true,
        mouseDrag: false,
        pagination: false,
        // afterAction: syncPosition1,
        // responsiveRefreshRate: 200,
        navText: ["",""]
    });

    $('#carusel-news').owlCarousel({
        items: 2,
        singleItem: true,
        // margin:20,
        // center: true,
        navigation: false,
        mouseDrag: false,
        pagination: false,
        // afterAction: syncPosition1,
        // responsiveRefreshRate: 200,
        navText: ["",""],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            }
        },
    });

});

// $(window).load(function(){

// });

$(window).resize(function(){

});