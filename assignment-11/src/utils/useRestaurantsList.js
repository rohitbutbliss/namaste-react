import { useEffect, useState } from "react";

const useRestaurantsList = (lat, lon) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let currentRestaurantsList = [];
  const fetchList = async () => {
    try {
      let res = await fetch(
        "https://cors-anywhere-v3.onrender.com/" +
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      res = await res.json();

      console.log(res);

      currentRestaurantsList = res?.data?.cards.reduce((requiredCard, card) => {
        return card?.card?.card?.id === "top_brands_for_you"
          ? card?.card?.card?.gridElements.infoWithStyle?.restaurants
          : requiredCard;
      }, undefined);
    } catch (error) {
      currentRestaurantsList = [];
    }
    setRestaurantsList(currentRestaurantsList || []);
    setIsLoaded(true);
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchList();
  }, [lat, lon]);

  return { restaurantsList, setRestaurantsList, isLoaded };
};

export default useRestaurantsList;
