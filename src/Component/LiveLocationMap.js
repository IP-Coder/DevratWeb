import React, { useState, useEffect } from "react";

const LiveLocationMap = () => {
  const [accuracy, setAccuracy] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [heading, setHeading] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [reqcount, setReqcount] = useState(0);

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (position) => {
        setAccuracy(position.coords.accuracy);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setAltitude(position.coords.altitude);
        setHeading(position.coords.heading);
        setSpeed(position.coords.speed);
        setReqcount(reqcount + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <div>Accuracy: {accuracy}</div>
      <div>
        Latitude: {latitude} | Longitude: {longitude}
      </div>
      <div>Altitude: {altitude}</div>
      <div>Heading: {heading}</div>
      <div>Speed: {speed}</div>
      <div>reqcount: {reqcount}</div>
    </div>
  );
};

export default LiveLocationMap;
