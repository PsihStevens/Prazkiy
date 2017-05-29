
function owlCarousel() {



    $("#carusel-small").on("click", ".owl-item", function(event) {

        event.preventDefault();
        $(".owl-item").removeClass("active-slide");
        $(this).addClass("active-slide");
        var number = $(this).index();
        $('#carusel-full').trigger("to.owl.carousel", number);
    });

    $('#1-rooms').on('click', '.owl-prev', function(event) {
        
        $('#area-1-rooms').trigger('prev.owl.carousel');
    });

    $('#1-rooms').on('click', '.owl-next', function(event) {

        $('#area-1-rooms').trigger('next.owl.carousel');
    });

    $('#1-rooms').on('dragged.owl.carousel', function(event) {

        var num = event.item.index;
        $('#area-1-rooms').trigger("to.owl.carousel", num);
    });

    




    $('#2-rooms').on('click', '.owl-prev', function(event) {
        
        $('#area-2-rooms').trigger('prev.owl.carousel');
    });

    $('#2-rooms').on('click', '.owl-next', function(event) {

        $('#area-2-rooms').trigger('next.owl.carousel');
    });

    $('#2-rooms').on('dragged.owl.carousel', function(event) {

        var num = event.item.index;
        $('#area-2-rooms').trigger("to.owl.carousel", num);
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



function mobMenuUp() {

    function mobMenuClose() {


        $('.nav-menu').animate({right: '-100%'}, 800);

    };

    $('#header .burger-memu').on('click', function(e) {

        e.stopPropagation();
        $('#header .nav-menu').animate({right: 0}, 800);
    });

    $('#second-menu-box .burger-memu').on('click', function(e) {

        e.stopPropagation();
        $('#second-menu-box .nav-menu').animate({right: 0}, 800);
    });

    $('.close-button').on('click', function() {

        mobMenuClose();
    });

    $('.nav-menu a').on('click', function() {

        mobMenuClose();
    });

    $('.nav-menu').on('click', function(e) {

        e.stopPropagation();
    });

    $(document).on('click', function(e){

        mobMenuClose();
    });
    
};

function tabsPlan() {

    var nameTab = $('.room-name');

    nameTab.on('click', function() {

        if ($(this).hasClass('active-tab-name')) {

            return false;

        } else {

            nameTab.removeClass('active-tab-name');
            $(this).addClass('active-tab-name');

            var index = $(this).index();
            
            $('.tab-slide-plan').removeClass('active-tab-slide');            
            $('.tab-slide-area').removeClass('active-tab-slide');            
            $('.tab-slide-plan').eq(index).addClass('active-tab-slide');
            $('.tab-slide-area').eq(index).addClass('active-tab-slide');
        };
    });
};

$(document).ready(function(){

    owlCarousel();
    fixMenu();
    hoverItem();
    popUp();
    mobMenuUp();
    tabsPlan();
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
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

    $('#carusel-full').owlCarousel({
        items: 1,
        singleItem: true,
        navigation: true,
        mouseDrag: false,
        pagination: false,
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
        responsiveRefreshRate: 200,
        navText: ["",""],
        onInitialized: function(event) {

            $('#carusel-small').find(".owl-item").eq(0).addClass("active-slide");
        }
    });

    $('#carusel-doc').owlCarousel({
        items: 2,
        singleItem: true,
        navigation: true,
        mouseDrag: false,
        pagination: false,
        navText: ["",""]
    });

    $('#carusel-news').owlCarousel({
        items: 2,
        singleItem: true,
        navigation: false,
        mouseDrag: false,
        pagination: false,
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

    $('#area-1-rooms').owlCarousel({
        items: 1,
        navigation: true,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

    $('#area-2-rooms').owlCarousel({
        items: 1,
        navigation: true,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

    $('#1-rooms').owlCarousel({
        items: 1,
        navigation: true,
        nav: true,
        mouseDrag: false,
        pagination: false,
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

    $('#2-rooms').owlCarousel({
        items: 1,
        navigation: true,
        mouseDrag: false,
        nav: true,
        pagination: false,
        responsiveRefreshRate: 200,
        navText: ["",""],
    });

});

// $(window).load(function(){

// });

$(window).resize(function(){

});