import { useLoadScript } from "@react-google-maps/api";

import Header from "../components/layout/Header.jsx";
import Map from "../components/map/Map.jsx";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;
