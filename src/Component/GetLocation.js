import React, { useState } from "react";

const GetLocation = () => {
  const [location, setLocation] = useState({});
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function requestLocationPermission() {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        getLocation();
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(getLocation, console.error);
      } else {
        console.error("Location permission denied.");
      }
    });
  }
  return (
    <div>
      <button onClick={requestLocationPermission}>Get Location</button>
      <p>
        Latitude: {location.lat}
        <br />
        Longitude: {location.lng}
      </p>
    </div>
  );
};

export default GetLocation;
