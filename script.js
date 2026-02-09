// Initialize the map
const map = L.map('mapid').setView([37.5665, 126.9780], 12); // Centered on Seoul

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Destination data
const seoulDestinations = [
    {
        name: "Gyeongbokgung Palace",
        coords: [37.5821, 126.9774],
        link: "gyeongbokgung.html"
    },
    {
        name: "Namsan Seoul Tower",
        coords: [37.5512, 126.9882],
        link: "namsan.html"
    },
    {
        name: "Myeongdong",
        coords: [37.5610, 126.9859],
        link: "myeongdong.html"
    },
    {
        name: "Hongdae",
        coords: [37.5577, 126.9247],
        link: "hongdae.html"
    },
    {
        name: "Gangnam",
        coords: [37.5172, 127.0473],
        link: "gangnam.html"
    }
];

// Add markers for each destination
seoulDestinations.forEach(destination => {
    const marker = L.marker(destination.coords).addTo(map);
    marker.bindPopup(destination.name); // Add a popup with the destination name
    marker.on('click', () => {
        window.location.href = destination.link;
    });
});
