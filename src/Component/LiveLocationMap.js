import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LiveLocationMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Replace this with your own location tracking logic
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    };

    getLocation();
    const intervalId = setInterval(getLocation, 10000); // Update location every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const markerIcon = new L.Icon({
    iconUrl: "marker-icon.png",
    iconRetinaUrl: "marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    shadowUrl: "marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {location && (
        <Marker position={[location.lat, location.lng]} icon={markerIcon}>
          <Popup>Your current location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LiveLocationMap;
