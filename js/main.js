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
        if ($(window).width() < 769) {
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
        if ($(window).width() < 769) {
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
    function coverVideoResize() {
        if ($(window).width() < 769) {
            $('.cover__body-mobile').append($('.cover__video-big'));
        } else {
            $('.cover').append($('.cover__video-big'));
        }
    }

    canSlider();
    levelSlider();
    autorSlider();
    coverVideoResize();

    $(window).resize(function () {
        canSlider();
        levelSlider();
        autorSlider();
        coverVideoResize();
    })








});