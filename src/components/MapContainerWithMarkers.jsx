
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController.jsx';
// import MapController from '../components/MapController.jsx'; // Import the new controller component

// Fix Leaflet marker icon path issue in React
delete L.Icon.Default.prototype._getIconUrl;

// Define custom blue and red marker icons
const blueIcon = new L.Icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', // URL for red marker
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapContainerWithMarkers = ({ highlightedCourseName }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('./location.json')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Error loading location.json:', error));
  }, []);

  return (
    <MapContainer center={[28.0, -82.5]} zoom={8} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render the MapController component as a child of MapContainer */}
      <MapController
        highlightedCourseName={highlightedCourseName}
        locations={locations}
      />

      {locations.map((loc, index) => (
        <Marker
          key={index}
          position={[parseFloat(loc.lat), parseFloat(loc.lng)]}
          icon={loc.name === highlightedCourseName ? redIcon : blueIcon}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapContainerWithMarkers;

