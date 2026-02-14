document.addEventListener('DOMContentLoaded', () => {
    // 1. Map Initialization
    const map = L.map('map').setView([37.5665, 126.9780], 13); // Centered on Seoul
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 2. DOM Elements
    const photoModal = document.getElementById('photoModal');
    const closeModalBtn = document.querySelector('.close');
    const photoFileInput = document.getElementById('photoFile');
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const addPhotoBtn = document.getElementById('addPhotoBtn');

    let photoMarkers = []; // Array to store marker data { lat, lng, imageData }

    // 3. Modal Management
    const openModal = (lat, lng) => {
        latitudeInput.value = lat.toFixed(6);
        longitudeInput.value = lng.toFixed(6);
        photoModal.style.display = 'block';
    };

    const closeModal = () => {
        photoModal.style.display = 'none';
        // Clear inputs for the next use
        photoFileInput.value = '';
        latitudeInput.value = '';
        longitudeInput.value = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == photoModal) {
            closeModal();
        }
    });

    // 4. Map Click Event to Open Modal
    map.on('click', (e) => {
        openModal(e.latlng.lat, e.latlng.lng);
    });

    // 5. Local Storage Management
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
        marker.bindPopup(`<img src="${imageData}" style="width:100%; height:auto;">`);
    };

    // 6. Add Photo Functionality
    addPhotoBtn.addEventListener('click', () => {
        const lat = parseFloat(latitudeInput.value);
        const lng = parseFloat(longitudeInput.value);
        const photoFile = photoFileInput.files[0];

        if (isNaN(lat) || isNaN(lng) || !photoFile) {
            alert('사진 파일을 선택하고, 지도에서 위치를 클릭해주세요.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result; // Base64 encoded image

            addMarkerToMap(lat, lng, imageData);

            // Store marker data
            photoMarkers.push({ lat, lng, imageData });
            saveMarkers();

            // Close modal after adding
            closeModal();
        };
        reader.readAsDataURL(photoFile);
    });

    // 7. Initial Load
    loadMarkers();
});