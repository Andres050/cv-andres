

export default function () {

    $('.js-filters-location [data-value]').on('click', function(){
        const textLLocation = $(this).text()
        const texValue = $(this).attr('data-value')
        $(this).parents('.js-filters-location').find('.js-calendar-location').val(texValue)
        $(this).parents('.js-filters-location').find('.js-calendar-text').text(textLLocation)
        $(this).parents('.js-filters-location').find('.c-filters__list').removeClass('is-active')
    })

}
