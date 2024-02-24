export default function () {
    // Obtén todos los elementos con el atributo "data-scrollto"
    const scrollElements = document.querySelectorAll('[data-scrollto]');

    // Añade un event listener a cada elemento
    scrollElements.forEach(element => {
        element.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
        // Obtén el atributo "data-scrollto" del elemento clickeado
        const target = event.target.getAttribute('data-scrollto');

        // Obtén la posición vertical de la sección de destino
        const targetPosition = document.getElementById(target).offsetTop - 150;

        // Realiza el scroll animado hacia la sección
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

