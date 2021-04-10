(function ($) {
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#header').addClass('sticky');
            } else {
                $('#header').removeClass('sticky');
            }
        });


        $('#partner-logo-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            center: false,
            loop: true,
            items: 5,
            margin: 40,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    autoplay: true,
                    nav: false,
                    dots: true,
                },
                600: {
                    items: 3,
                    autoplay: true,
                    nav: false,
                    dots: true,
                },
                1000: {
                    items: 5,
                    autoplay: true,
                    nav: false,
                    dots: false,
                }
            }
        });

        $(window).scroll(function() {
            if ($(this).scrollTop()>350)
             {
                $('.back-to-top-btn').show(3000);
             }
            else
             {
              $('.back-to-top-btn').hide(3000);
             }
         });

         //Accordion
        //new Accordion('.accordion-container');

        //wow js
        new WOW().init();

    });
})(jQuery);