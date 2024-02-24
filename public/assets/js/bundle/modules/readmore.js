export default function () {

    const elements = document.querySelectorAll('[data-toggle-text]');

    elements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute('data-toggle-text-target'))
            const moreText = this.getAttribute('data-toggle-text-more');
            const lessText = this.getAttribute('data-toggle-text-less');

            if (moreText && lessText) {
                if (target.innerText === lessText) {
                    const buttonText = this.getAttribute('data-toggle-text-lessbutton')
                    if (buttonText) {
                        this.innerText = buttonText
                    }
                    target.innerText = moreText
                } else {
                    const buttonText = this.getAttribute('data-toggle-text-morebutton')
                    if (buttonText) {
                        this.innerText = buttonText
                    }
                    target.innerText = lessText
                }
            }
        });
    })
}
