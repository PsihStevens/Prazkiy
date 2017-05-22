
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

$(document).ready(function(){

    owlCarousel();
    fixMenu();
    hoverItem();
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
        navText: ["",""]
    });

});

// $(window).load(function(){

// });

$(window).resize(function(){

});