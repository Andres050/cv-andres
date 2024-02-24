export default function() {
    document.querySelectorAll('img.svg').forEach((el) => {
        const imgID = el.getAttribute('id');
        const imgClass = el.getAttribute('class');
        const imgURL = el.getAttribute('src');

        fetch(imgURL)
            .then(data => data.text())
            .then(response => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response, 'text/html');
                let svg = xmlDoc.querySelector('svg');

                if (typeof imgID !== 'undefined') {
                    svg.setAttribute('id', imgID);
                }

                if (typeof imgClass !== 'undefined') {
                    svg.setAttribute('class', imgClass + ' replaced-svg');
                }

                svg.removeAttribute('xmlns:a');

                el.parentNode.replaceChild(svg, el);
            });
    });
}
