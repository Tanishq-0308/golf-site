
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MapController = ({ highlightedCourseName, locations }) => {
  const map = useMap(); // useMap hook can now be called here!

  useEffect(() => {
    if (highlightedCourseName && locations.length > 0) {
      const selectedLocation = locations.find(loc => loc.name === highlightedCourseName);
      if (selectedLocation) {
        const lat = parseFloat(selectedLocation.lat);
        const lng = parseFloat(selectedLocation.lng);
        map.flyTo([lat, lng], 14, { // Increased speed for smoother animation
          duration: 1.5, // seconds
          easeLinearity: 0.7
        });
      }
    } else {
      // If no specific course is highlighted, reset view to a broader area
      map.flyTo([28.0, -82.5], 8, {
        duration: 1.5,
        easeLinearity: 0.7
      });
    }
  }, [highlightedCourseName, locations, map]); // Dependencies

  return null; // This component doesn't render any visible UI
};

export default MapController;
