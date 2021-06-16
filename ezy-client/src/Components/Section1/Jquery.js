import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const $  = require('jquery');

export const jquery = $(window).on("load", function () {
    function fade(pageLoad) {
        const windowTop = $(window).scrollTop(), windowBottom = windowTop + $(window).innerHeight();
        const min = 0, max = 1, threshold = 0.01;

        $(".fade").each(function () {
            /* Check the location of each desired element */
            const objectHeight = $(this).outerHeight(), objectTop = $(this).offset().top, objectBottom = $(this).offset().top + objectHeight;

            /* Fade element in/out based on its visible percentage */
            if (objectTop < windowTop) {
                if (objectBottom > windowTop) { $(this).fadeTo(1, min + ((max - min) * ((objectBottom - windowTop) / objectHeight))); }
                else if ($(this).css("opacity") >= min + threshold || pageLoad) { $(this).fadeTo(1, min); }
            } else if (objectBottom > windowBottom) {
                if (objectTop < windowBottom) { $(this).fadeTo(1, min + ((max - min) * ((windowBottom - objectTop) / objectHeight))); }
                else if ($(this).css("opacity") >= min + threshold || pageLoad) { $(this).fadeTo(1, min); }
            } else if ($(this).css("opacity") <= max - threshold || pageLoad) { $(this).fadeTo(1, max); }
        });
    } fade(true); //fade elements on page-load
    $(window).scroll(function () { fade(false); }); //fade elements on scroll
});