
    const map = L.map('map').setView([39.50754756193319, 2.5303400727032788], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const LeafIcon = L.Icon.extend({
        options: {
            iconSize:     [110, 95],
            iconAnchor:   [55, 47],
        }
    });
    const icon = new LeafIcon({iconUrl: 'themes/bh-mallorca/assets/images/logo.svg'});
    L.marker([39.508864756193319, 2.5313400727032788], {icon: icon}).addTo(map);
