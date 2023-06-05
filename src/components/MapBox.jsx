import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useViewport } from "../utils/viewportContext";

const centers = [
  {
    lat: 35.22530676939718,
    lng: -80.85415401661744,
  },
  {
    lat: 35.23316222896782,
    lng: -80.87316164625584,
  },
  {
    lat: 35.21384116604734,
    lng: -80.82649992624681,
  },
];

function MapBox() {
  // grab viewport width and viewport height from custom useViewport hook;
  const { width, height } = useViewport();
  // state for google maps api key
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");

  // set container width and height for the Google Map
  const containerStyle = {
    width: "100%",
    height: 0.5 * height,
  };

  // fetch Google Maps api key; side-effect runs just once after initial render (lifecycle event componentDidMount)
  useEffect(() => {
    const fetchApiKey = async () => {
      const response = await fetch("/api/google_maps_api_key");
      const { mapsApiKey } = await response.json();
      setGoogleMapsApiKey(mapsApiKey);
    };
    fetchApiKey();
  }, []);

  return googleMapsApiKey === "" ? (
    <>
      <div>Map cannot be loaded right now, sorry.</div>
    </>
  ) : (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centers[0]}
        zoom={13}
      >
        <Marker
          icon={
            "https://raw.githubusercontent.com/jcomp-03/pizza-baby/main/src/assets/images/favicon_io_logo_dark_transparent_png/favicon-32x32.png"
          }
          position={centers[1]}
        />
        <Marker
          icon={
            "https://raw.githubusercontent.com/jcomp-03/pizza-baby/main/src/assets/images/favicon_io_logo_dark_transparent_png/favicon-32x32.png"
          }
          position={centers[2]}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapBox;
