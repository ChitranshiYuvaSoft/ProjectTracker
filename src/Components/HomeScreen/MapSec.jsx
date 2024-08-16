import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import SearchMap from "./SearchMap";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const libraries = ["places"];

const marker = [
  {
    id: 1,
    position: { lat: 22.7196, lng: 75.8577 },
    title: "Indore",
    icon: "./Image/marker.png",
  },
  {
    id: 2,
    position: { lat: 23.1765, lng: 75.7885 },
    title: "Ujjain",
    icon: "./Image/marker.png",
  },
  {
    id: 3,
    position: { lat: 23.3315, lng: 75.0367 },
    title: "Ratlam",
    icon: "./Image/marker.png",
  },
];

const MapSec = () => {
  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyCGiAncbB6v4AzAParaKuNijMPxZHiWiXk" // Replace with your API key
        libraries={libraries}
      >
        <SearchMap />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullScreenControl: true,
            scrollwheel: true,
          }}
        >
          {marker.map((item, index) => (
            <MarkerF
              key={index}
              position={item.position}
              title={item.title}
              icon={item.marker}
            ></MarkerF>
          ))}
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapSec;
