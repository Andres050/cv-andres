export default function (triggerElement = '.js-toggle-button', targetElement = '.js-toggle-nav', classToToggle = 'is-active') {
    const toggleElements = document.querySelectorAll(triggerElement)

    toggleElements.forEach((toggler) => {
        toggler.addEventListener('click', function (event) {
            event.preventDefault();
            if (!document.querySelector(targetElement)) {
                throw new Error('TargetElement does not exist')
            }
            document.querySelector(targetElement).classList.toggle(classToToggle)
            // this.classList.toggle(classToToggle)
        })
    })
}
