/*--------------------------------
        10. Preloader
    ----------------------------------*/
$(function () {
    if ($(".loader").length) {

        var loader = new SVGLoader(document.getElementById('loader'), {
            easingIn: mina.easeinout
        });

        loader.show();

        $(window).on('load', function () {

            $('.startLoad').fadeOut('slow');

            setTimeout(function () {
                $(".pageload-overlay").css("background-color", "transparent");
                loader.hide();
            }, 1000)

            setTimeout(function () {
                $('.page-loader').fadeOut();
            }, 1925)

        });

    } else {

        $("body").css("overflow", "auto");

    }

});