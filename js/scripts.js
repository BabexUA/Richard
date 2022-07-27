$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        rewind: false,
        autoplayTimeout: 6000,

        navText:[ '',' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

});