// src/MapComponent.js
import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// Define map style and center position
const mapStyles = {
  width: '100%',
  height: '400px',
};

const MapSec = () => {
  const [markers, setMarkers] = useState([
    { id: 1, lat: 40.748817, lng: -73.985428, label: "Empire State Building" },
    { id: 2, lat: 40.730610, lng: -73.935242, label: "Another Location" }
  ]);

  useEffect(() => {
    // Example of auto-changing markers after 5 seconds
    const interval = setInterval(() => {
      setMarkers(prevMarkers => [
        ...prevMarkers,
        { id: prevMarkers.length + 1, lat: 40.730610 + Math.random() * 0.01, lng: -73.935242 + Math.random() * 0.01, label: `New Location ${prevMarkers.length + 1}` }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 40.748817, lng: -73.985428 }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          label={marker.label}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGiAncbB6v4AzAParaKuNijMPxZHiWiXk', // Replace with your API key
})(MapSec);
