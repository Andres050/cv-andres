var jquery = require("jquery");

window.$ =  jquery;

export default function () {
    contactCheck();
    $(".js-contact-type").on('change', function() {
        contactCheck();
    })
    function contactCheck() {
        const valueSelected = $(".js-contact-type option:selected").val();
        const valuesShow =  eval($(".js-cv-show").attr('data-show-values'));
        if(valuesShow) {
            const found = valuesShow.find(element => element === valueSelected);
            if(found) {
                $('.js-cv-show').show()
            } else {
                $('.js-cv-show').hide()
            }
        }

    }
}
