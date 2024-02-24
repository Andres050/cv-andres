export default function () {
    $('.js-spa-slider span').on('click', function () {
        $('.js-spa-slider span').removeClass('is-active')
        $(this).addClass('is-active')
        const image = $(this).attr('data-image')
        $(this).parents('.c-spa-slider').find('.js-spa-slider-image').fadeOut(400, function() {
            $(this).parents('.c-spa-slider').find('.js-spa-slider-image').attr('src',image);
        }).fadeIn(400);
    })
}
