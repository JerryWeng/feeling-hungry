import styles from "./restaurantList.module.css";

export default function RestaurantList({ places, isOpen }) {
    const classNames = `${styles["restaurant-list"]} ${isOpen ? styles["restaurant-list--open"] : ""}`;
  
    return (
      <div className={classNames}>
        <h2>Restaurants:</h2>
        <ul>
          {places.map((place) => (
            <li key={place.place_id}>{place.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  