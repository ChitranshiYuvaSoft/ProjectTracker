import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import L from "leaflet";

const center = {
  lat: 40.748817,
  lng: -73.985428,
};

const containerStyle = {
  width: "100%",
  height: "40rem",
};



const marker = [
  { id: 1, position: [51.505, -0.09], title: "Marker 1" },
  { id: 2, position: [51.515, -0.1], title: "Marker 2" },
  { id: 3, position: [51.525, -0.08], title: "Marker 3" },
];

const MapSec = () => {
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyARD66hnh32yrvy7Pk9y4XXjs7BhTTys4U">
        <GoogleMap mapContainerStyle={containerStyle} zoom={7} center={center}>
          {/* <Marker position={center}/> */}
          {marker.map((item, index) => (
            <Marker
              key={index}
              position={marker.position}
              title={marker.title}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
export default MapSec;
