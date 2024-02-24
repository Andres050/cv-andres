$(document).ready(function () {
    var descriptions = $('#slider-news .owl-stage-outer .owl-stage .owl-item .new-box .new-content .new-des');
    var listDescription = $('.news-description');

    for (let index = 0; index < descriptions.length; index++) {
        const element = descriptions[index];
        element.innerText = element.innerText.substring(0, 143).concat('...');
    }

    for (let index = 0; index < listDescription.length; index++) {
        const element = listDescription[index];
        element.innerText = element.innerText.substring(0, 450).concat('...');
    }
});