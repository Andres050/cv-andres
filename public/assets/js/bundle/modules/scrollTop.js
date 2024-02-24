export default function () {
    document.querySelector('[data-scrolltop]')?.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}

