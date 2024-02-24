export default function() {
    const accordionItems = document.querySelectorAll(".js-accordion");
    accordionItems.forEach(accordionItem => {

        accordionItem.addEventListener('click', function(event) {
            accordionItem.closest('.c-accordion').classList.toggle('is-active');
        })

    });
}
