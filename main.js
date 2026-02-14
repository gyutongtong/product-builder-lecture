document.addEventListener('DOMContentLoaded', () => {
    // 1. Map Initialization
    const map = L.map('map').setView([37.5665, 126.9780], 13); // Centered on Seoul
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 2. DOM Elements
    const photoFileInput = document.getElementById('photoFile');
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const addPhotoBtn = document.getElementById('addPhotoBtn');

    let photoMarkers = []; // Array to store marker data { lat, lng, imageData }
    let selectionMarker; // To show the selected location

    // 3. Map Click Event to Select Location
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        latitudeInput.value = lat.toFixed(6);
        longitudeInput.value = lng.toFixed(6);

        // Add or move a marker to show selection
        if (selectionMarker) {
            selectionMarker.setLatLng(e.latlng);
        } else {
            selectionMarker = L.marker(e.latlng, {
                draggable: true // Allows dragging to fine-tune
            }).addTo(map);
            selectionMarker.on('dragend', function(event) {
                const marker = event.target;
                const position = marker.getLatLng();
                latitudeInput.value = position.lat.toFixed(6);
                longitudeInput.value = position.lng.toFixed(6);
            });
        }
    });

    // 4. Local Storage Management
    const saveMarkers = () => {
        localStorage.setItem('photoMarkers', JSON.stringify(photoMarkers));
    };

    const loadMarkers = () => {
        const storedMarkers = JSON.parse(localStorage.getItem('photoMarkers'));
        if (storedMarkers) {
            photoMarkers = storedMarkers;
            photoMarkers.forEach(markerData => {
                addMarkerToMap(markerData.lat, markerData.lng, markerData.imageData);
            });
        }
    };

    const addMarkerToMap = (lat, lng, imageData) => {
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<img src="${imageData}" style="width:100%; height:auto;">`).openPopup();
    };

    // 5. Add Photo Functionality
    addPhotoBtn.addEventListener('click', () => {
        const lat = parseFloat(latitudeInput.value);
        const lng = parseFloat(longitudeInput.value);
        const photoFile = photoFileInput.files[0];

        if (isNaN(lat) || isNaN(lng) || !photoFile) {
            alert('사진 파일과 유효한 위도, 경도를 모두 입력해주세요.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result; // Base64 encoded image

            addMarkerToMap(lat, lng, imageData);

            // Store marker data
            photoMarkers.push({ lat, lng, imageData });
            saveMarkers();

            // Clear inputs and selection marker
            photoFileInput.value = '';
            latitudeInput.value = '';
            longitudeInput.value = '';
            if (selectionMarker) {
                map.removeLayer(selectionMarker);
                selectionMarker = null;
            }
        };
        reader.readAsDataURL(photoFile);
    });

    // 6. Initial Load
    loadMarkers();
});