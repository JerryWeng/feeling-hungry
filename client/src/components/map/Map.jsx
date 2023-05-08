import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import { getPlacesData } from '../../api/index.js'
import styles from "./map.module.css";

export default function Map() {
  const [places, setPlaces] = useState();
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useStaet(null);

  const map = styles["map-container"];
  const mapRef = useRef();
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
  }), []);
  const onLoad = useCallback(map => (mapRef.current = map), []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlacesData()
  })

  return (
    <div>
      <div className={styles["search"]}>
        <Places setOffice={(position) => {
          setPlaces(position)
          mapRef.current?.panTo(position);
        }} />
      </div>
      <div className={styles["map-container"]}>
        <GoogleMap
          zoom={10}
          center={coordinates}
          mapContainerClassName={map}
          options={options}
          onLoad={onLoad}
        >
          <MarkerF position={coordinates}></MarkerF>
        </GoogleMap>
      </div>
    </div>
  );
}
