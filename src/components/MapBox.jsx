import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
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
  lat: 0,
  lng: 180
};
// const center = {
//   lat: 35.23316222896782,
//   lng: -80.87316164625584,
// };

function MapBox() {
  // grab viewport width and viewport height from custom useViewport hook;
  const { width, height } = useViewport();

  // set container width and height for the Google Map
  const containerStyle = {
    width: "100%",
    height: 0.5 * height,
  };

  //console.log('mapbox width, height', width, height);

  // uses js-api-loader package to load Google Maps JavaScript API
  // will use isLoaded to render different JSX depending on its value
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onClick = (event) => {
    console.log("Map click:", event);
  };

  // const onLoad = useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   // const bounds = new window.google.maps.LatLngBounds(center);
  //   // map.fitBounds(bounds);
  //   //console.log('Google Map loaded');
  //   setMap(map);
  // }, []);

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      // onLoad={onLoad}
      onClick={onClick}
      onUnmount={onUnmount}
      //   onCenterChanged={() => console.log('center changed')}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        onLoad={onLoad}
        visible={true}
        position={center}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          scale: 7,
        }}
      />

      <Marker
      label={"Here is your label!"}
      opacity={1}
      visible={true}
        icon={
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
        position={center}
      />
    </GoogleMap>
  ) : (
    <>
      <div>Map cannot be loaded right now, sorry.</div>
    </>
  );
}

export default MapBox;
