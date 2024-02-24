export default function (headerClass = '.c-header', stuckClass = 'stuck') {

    window.addEventListener('load', stuckNav);
    window.addEventListener('ready', stuckNav);
    window.addEventListener('scroll', stuckNav);

    function stuckNav() {
        const headerElement = document.querySelector(headerClass);
        const body = document.querySelector('body');

        const scrollY = window.scrollY;

        if (scrollY > 100) {
            if (!headerElement.classList.contains(stuckClass)) {
                headerElement.classList.add(stuckClass)
                body.classList.add(stuckClass)
            }
        } else if (scrollY <= 15) {
            headerElement.classList.remove(stuckClass)
            body.classList.remove(stuckClass)
        }
    }
}
