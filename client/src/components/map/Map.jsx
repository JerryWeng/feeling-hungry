import { GoogleMap, useJsApiLoader, MarkerF, Marker } from "@react-google-maps/api";
import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";

import styles from "./map.module.css";

export default function Map() {
  const [places, setPlaces] = useState();
  const [coordinates, setCoordinates] = useState();

  const mapStyles = styles["map-container"]
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
  }), []);

  const onLoad = useCallback(async function onLoad (mapInstance){
    const geocoder = new window.google.maps.Geocoder
    const service = new window.google.maps.places.PlacesService(mapInstance)

    const getCurrentPositionPromise = () => {
      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((successResponse) => {
              resolve(successResponse);
          }, (errorResponse) => {
              reject(errorResponse);
          });
      });
    }   

    let currentLocation;
    const result = await getCurrentPositionPromise();
    const coordinate = {"lat" : result['coords']['latitude'], "lng" : result['coords']['longitude']}
    setCoordinates(coordinate)
    mapInstance.setCenter(coordinate)
    mapInstance.setZoom(13)

    console.log(coordinate)
    
    geocoder.geocode({'location': coordinate}, function(results, status){
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          currentLocation = results[0].geometry.location
          service.nearbySearch({
            location: currentLocation,
            radius: 2000,
            type: ['restaurant']
          }, function (place, status) {
            console.log('Place details:', place);
            setPlaces(place)
          });
        } else {
          console.log('No results found')
        }
      } else {
        console.log('Geocoder failed due to: ' + status)
      }
    })
  });

  const {isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const RenderMap = () => {
    return (
      <div>
        <div className={styles["search"]}>
        </div>
        <div className={styles["map-container"]}>
          <GoogleMap
            id={'map'}
            zoom={10}
            mapContainerClassName={mapStyles}
            options={options}
            onLoad={onLoad}
          >
            <MarkerF position={coordinates}></MarkerF>

          </GoogleMap>
        </div>
      </div>
    );
  }
  if (loadError) {
    return <div>Map cannot be loaded.</div>
  }
  return isLoaded ? RenderMap() : <div></div>
}
