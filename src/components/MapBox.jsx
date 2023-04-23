import React, { useState, useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { useViewport } from "../utils/viewportContext";

// const locations = {
//     west: {
//         address: "2135 Thrift Rd, Charlotte, NC 28208",
//         lat: 35.23316222896782,
//         lon: -80.87316164625584
//     },
//     east: {
//         address: "1603 Elizabeth Ave, Charlotte, NC 28204",
//         lat: 35.21384116604734,
//         lon: -80.82649992624681
//     }
// }


const center = {
  lat: 35.23316222896782,
  lng: -80.87316164625584,
};

function MapBox() {
  // grab viewport width and viewport height from custom useViewport hook;
  const { width, height } = useViewport();
  
  const containerStyle = {
    width: "100%",
    height: 0.50 * height,
  };

  console.log('mapbox width, height', width, height);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAVhbu3Ox7jzTQr-BMxDnNGlWmsxUXsZoU",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    //   onCenterChanged={() => console.log('center changed')}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <>
      <div>Map cannot be loaded right now, sorry.</div>
    </>
  );
}

export default MapBox;
