export default function () {
    window.addEventListener('load', (event) => {
        const modals = document.querySelectorAll('.c-modal')
        modals.forEach(function (element) {
            element.classList.remove('hidden')
        })
    });
}
