$(document).ready(function () {

    function canSlider() {
        if ($(window).width() < 600) {
            $('.can__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                // autoplay: true,
                dots: true,
            });
        } else {
            $('.can__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function levelSlider() {
        if ($(window).width() < 768) {
            $('.level__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                // autoplay: true,
                dots: true,
            });
        } else {
            $('.level__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function autorSlider() {
        if ($(window).width() < 768) {
            $('.autor__info').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                // autoplay: true,
                dots: true,
            });
        } else {
            $('.autor__info').filter('.slick-initialized').slick('unslick');
        }
    }

    canSlider();
    levelSlider();
    autorSlider();

    $(window).resize(function () {
        canSlider();
        levelSlider();
        autorSlider();

    })



});