export default function (activeClass = 'is-active') {
    document.querySelector('body, html')?.addEventListener('click', function (e) {
        document.querySelectorAll('[data-click-outside].' + activeClass).forEach(function (element) {
            if (!element.contains(e.target)) {
                if (element.getAttribute('data-toggle-class-item') !== e.target.getAttribute('data-toggle-class-item')) {
                    element.classList.remove(activeClass);
                }
            }
        });
    });
}
