import { useEffect, useState } from "react";

const useFilteredSearchedList = (
  isFiltered,
  searchText,
  initialRestaurantList
) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [restaurantsCount, setRestaurantCount] = useState(0);

  let currentList = [];

  useEffect(() => {
    if (isFiltered)
      currentList = initialRestaurantList.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
    else currentList = initialRestaurantList;

    if (searchText.length !== 0)
      currentList = currentList.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    setRestaurantsList(currentList);
    setRestaurantCount(currentList.length);
  }, [isFiltered, searchText, initialRestaurantList]);

  return [restaurantsList, restaurantsCount];
};

export default useFilteredSearchedList;
