export default function () {
    $('.c-input-number--less').on('click', function() {
       const input = $(this).parents('.c-input-number').find('input');
        if(parseInt(input.val()) > 0 && parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val()) -1)
            updateLabel(input)
        }
    })
    $('.c-input-number--more').on('click', function() {
        const input = $(this).parents('.c-input-number').find('input');
        if(parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val()) +1)
            updateLabel(input)
        }
    })
    /* Init on load */
    updateLabel($('.js-number-rooms'))
    updateLabel($('.js-number-adults'))

    function updateLabel(input) {
        let textLabel = ''
        let type = 'rooms'
        if($(input).hasClass('js-number-adults')) {
            type = 'adults'
        }
        $('.js-'+ type +'-number').text(input.val())
        if(input.val()>1) {
            $('.js-'+ type +'-name').text($('.js-'+ type +'-name').attr('data-'+ type +'-name-plural'))
        } else {
            $('.js-'+ type +'-name').text($('.js-'+ type +'-name').attr('data-'+ type +'-name-singular'))
        }

    }
}
