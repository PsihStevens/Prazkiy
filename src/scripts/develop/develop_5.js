
function owlCarousel() {

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
        autoplayTimeout: 5000,
        // afterAction: syncPosition1,
        responsiveRefreshRate: 200,
        navigationText: [
            "<span></span>",
            "<span></span>"
        ],
    });

    $('#carusel-full').owlCarousel({
        items: 1,
        singleItem: true,
        navigation: true,
        mouseDrag: false,
        pagination: false,
        // afterAction: syncPosition1,
        responsiveRefreshRate: 200,
        navigationText: [
            "<span></span>",
            "<span></span>"
        ],
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
        navText: ["",""
        ],
        onInitialized: function(event) {

            $('#carusel-small').find(".owl-item").eq(0).addClass("active-slide");
        }
    });
    $("#carusel-small").on("click", ".owl-item", function(event) {

        event.preventDefault();
        $(".owl-item").removeClass("active-slide");
        $(this).addClass("active-slide");
        var number = $(this).index();
        $('#carusel-full').trigger("to.owl.carousel", number);
    });
}

$(document).ready(function(){

    owlCarousel();

});

$(window).load(function(){

});

$(window).resize(function(){

});