export default function () {

    $(document).on('click', '.js-controls-less', function() {
        updatePax(-1, this)
    })
    $(document).on('click', '.js-controls-more', function() {
        updatePax(1, this)
    })
    function updatePax(increment, target) {
        const actualValue = $(target).parents('.js-controls').find('input').val()
        let setValue = parseInt(actualValue) + increment;
        let min = $(target).parents('.js-controls').find('input').attr('min')
        let max = $(target).parents('.js-controls').find('input').attr('max')
        if ((setValue >= parseInt(min) || !min) && (setValue <= parseInt(max) || !max)) {
            $(target).parents('.js-controls').find('input').val(setValue)
        }

    }
}
