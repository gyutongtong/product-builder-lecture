import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import PlaceDetails from './components/PlaceDetails';
import { placesData } from './data';

function App() {
  const position = [37.5665, 126.9780]; // Seoul coordinates
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    { name: 'Myeongdong', position: [37.5630, 126.9832] },
    { name: 'Gangnam', position: [37.4979, 127.0276] },
    { name: 'Hongdae', position: [37.5569, 126.9239] },
    { name: 'Gyeongbokgung Palace', position: [37.5796, 126.9770] },
    { name: 'Namsan Tower', position: [37.5512, 126.9882] },
  ];

  const handleMarkerClick = (placeName) => {
    setSelectedPlace({
      name: placeName,
      details: placesData[placeName],
    });
  };

  const handleClose = () => {
    setSelectedPlace(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MapContainer center={position} zoom={12} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map(place => (
          <Marker 
            key={place.name} 
            position={place.position}
            eventHandlers={{
              click: () => handleMarkerClick(place.name),
            }}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {selectedPlace && <PlaceDetails place={selectedPlace} onClose={handleClose} />}
    </div>
  );
}

export default App;