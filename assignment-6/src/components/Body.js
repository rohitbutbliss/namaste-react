import RestaurantCardContainer from "./RestaurantCardContainer";
import { useEffect, useState } from "react";
import { CARD_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import BodyTop from "./BodyTop";
import NoResult from "./NoResult";

const Body = () => {
  // declaring all the state variables required
  const [initialRestaurantList, setInitialRestaurantList] = useState([]);
  const [currentSearchInputText, setCurrentSearchInputText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);

  console.log("body rendered");

  // This method is fetching restaurant data from API and converting it to list
  const fetchData = async () => {
    let getRestaurantsList;
    try {
      let res = await fetch(
        "https://cors-anywhere-gk19.onrender.com/" + CARD_API
      );
      res = await res.json();

      console.log(res);

      getRestaurantsList = res?.data?.cards.reduce((requiredCard, card) => {
        return card?.card?.card?.id === "restaurant_grid_listing"
          ? card?.card?.card?.gridElements.infoWithStyle?.restaurants
          : requiredCard;
      }, undefined);
    } catch (error) {
      getRestaurantsList = [];
    }

    return getRestaurantsList || [];
  };

  // This method will update the list based on search query and filter applied
  const updateRestaurantsContainer = () => {
    let currentList;
    if (isFiltered)
      currentList = initialRestaurantList.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
    else currentList = initialRestaurantList;

    if (currentSearchInputText.length !== 0)
      currentList = currentList.filter((restaurant) =>
        restaurant.info.name
          .toLowerCase()
          .includes(currentSearchInputText.toLowerCase())
      );
    setRestaurantList(currentList);
    setRestaurantCount(currentList.length);
  };

  // This method will help to process our search query
  const handleSearchEnter = (searchText) => {
    if (!(currentSearchInputText === searchText))
      setCurrentSearchInputText(searchText);
  };

  const handleFilterClick = () => {
    const updatedIsFiltered = !isFiltered;
    setIsFiltered(updatedIsFiltered);
  };

  // Fetching required data to show on our webpage
  useEffect(() => {
    const loadData = async () => {
      const newList = await fetchData(); // fetching data
      setRestaurantList(newList);
      setInitialRestaurantList(newList);
      setRestaurantCount(newList.length);
    };
    loadData();
  }, []);

  // This will update RestaurantContainer once there is change in search text or filter
  useEffect(() => {
    updateRestaurantsContainer();
  }, [currentSearchInputText, isFiltered]);

  return (
    <main>
      <div className="body">
        {initialRestaurantList.length === 0 ? (
          <ShimmerUI />
        ) : (
          <>
            <BodyTop
              restaurantCount={restaurantCount}
              handleInputEnter={handleSearchEnter}
              handleFilterClick={handleFilterClick}
              isFiltered={isFiltered}
            />
            {restaurantList.length === 0 ? (
              <NoResult />
            ) : (
              <RestaurantCardContainer restaurantList={restaurantList} />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Body;
