import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from "./map.module.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const map = styles["map-container"];
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={map}
    ></GoogleMap>
  );
};
export default Map;
