var jquery = require("jquery");

window.$ =  jquery;

export default function () {
    console.log('yup')
    $(".js-file").on("change", function(e){
        $(this).parent().find('.js-file-name').text(e.target.files[0].name)
    })
}
