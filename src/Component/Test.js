import React, { useState, useEffect } from "react";
import LiveLocationMap from "./LiveLocationMap";

const Test = () => {
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div>
      <h1>Live Location Tracking</h1>
      {userLat && userLng && <LiveLocationMap lat={userLat} lng={userLng} />}
    </div>
  );
};

export default Test;
