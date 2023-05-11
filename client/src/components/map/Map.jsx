import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React, { useState, useMemo, useCallback } from "react";

import styles from "./map.module.css";

export default function Map() {
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState();
  const [markers, setMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [showMarkers, setShowMarkers] = useState(false);

  const mapStyles = styles["map-container"];
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback(async function onLoad(mapInstance) {
    setMap(mapInstance);

    const getCurrentPositionPromise = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (successResponse) => {
            resolve(successResponse);
          },
          (errorResponse) => {
            reject(errorResponse);
          }
        );
      });
    };

    const result = await getCurrentPositionPromise();
    const coordinate = {
      lat: result["coords"]["latitude"],
      lng: result["coords"]["longitude"],
    };
    setCoordinates(coordinate);
    mapInstance.setCenter(coordinate);
    mapInstance.setZoom(13);

    console.log(coordinate);
  });

  async function getGeocoderResult(location) {
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          resolve(results[0]);
        } else {
          reject(new Error(`Geocoder failed due to: ${status}`));
        }
      });
    });
  }

  async function searchNearbyPlaces(location, radius, type) {
    return new Promise((resolve, reject) => {
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch({ location, radius, type }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(new Error(`Places search failed due to: ${status}`));
        }
      });
    });
  }

  async function findPlaces() {
    if (!map || !coordinates) {
      return;
    }

    try {
      const result = await getGeocoderResult(coordinates);
      const places = await searchNearbyPlaces(
        result.geometry.location,
        2000,
        ["restaurant"]
      );

      if (showMarkers) {
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        setMarkers([]);
      } else {
        const newMarkers = places.map((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });
          return marker;
        });
        setMarkers(newMarkers);
      }

      setPlaces(places);
      setShowMarkers(!showMarkers);
    } catch (error) {
      console.log(error);
    }
  }

  const {isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
            <Marker position={coordinates}></Marker>
            {map && (
              <button 
                className={styles['findButton']}
                onClick={findPlaces} 
              >
                Find Restaurants
              </button>
            )}
          </GoogleMap>
        </div>
      </div>
    );
  }
  if (loadError) {
    return <div>Map cannot be loaded.</div>
  }
  return isLoaded ? RenderMap() : null
}