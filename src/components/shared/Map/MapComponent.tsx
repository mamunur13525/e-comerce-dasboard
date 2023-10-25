import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "556px",
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDmSKSX0GFdAUS9lqC8zGX0Qixf72qJsYI",
  });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);
  const center = {
    lat: 40.712776,
    lng: -74.005974,
  };

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <GoogleMap
      center={center}
      mapContainerStyle={containerStyle}
      zoom={16}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* <div className="marker-container"> */}
      <div className="marker_div">
        <img
          className="marker_pic"
          src="https://ik.imagekit.io/y8s2vhk66ef/hi_h5oTkZ8HW.png"
          alt="marker"
        />
      </div>
      {/* <div className="pulse-box"> */}
      <div className="pulse-css"></div>
      {/* </div> */}
      {/* </div> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapComponent;