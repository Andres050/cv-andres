var jquery = require("jquery");

window.$ =  jquery;

require ("../jquery.payment.min")

export default function () {
    $('.cc-number').formatCardNumber();
    $('.cc-expires').formatCardExpiry();
    $('.cc-cvc').formatCardCVC();
}
