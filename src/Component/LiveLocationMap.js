import React, { useEffect, useRef } from "react";

const LiveLocationMap = () => {
  const mapDivRef = useRef(null);
  const detailsDivRef = useRef(null);
  let map;
  let marker;

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.watchPosition(
      successCallback,
      errorCallback,
      options
    );

    function successCallback(position) {
      const { accuracy, latitude, longitude, altitude, heading, speed } =
        position.coords;

      if (!map) {
        map = new window.google.maps.Map(mapDivRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });
      } else {
        map.setCenter({ lat: latitude, lng: longitude });
      }

      if (!marker) {
        marker = new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          icon: {
            url: "car-front.svg",
            scaledSize: new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
            rotation: heading,
          },
        });
      } else {
        marker.setPosition({ lat: latitude, lng: longitude });
        marker.setIcon({
          url: "car-front.svg",
          scaledSize: new window.google.maps.Size(50, 50),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(25, 25),
          rotation: heading,
        });
      }

      detailsDivRef.current.textContent = `Accuracy: ${accuracy}
          Latitude: ${latitude} | Longitude: ${longitude}
          Altitude: ${altitude}
          Heading: ${heading}
          Speed: ${speed}`;
    }

    function errorCallback(error) {
      console.log("Error: ", error);
    }
  }, []);

  return (
    <div>
      <div ref={mapDivRef} style={{ height: "100vh" }}></div>
      <div ref={detailsDivRef}></div>
    </div>
  );
};

export default LiveLocationMap;
