import Sort from "./Sort";
import Filter from "./Filter";
import RestaurantCardContainer from "./RestaurantCardContainer";
import { useEffect, useState } from "react";
import { CARD_API } from "../../utils/constants";
import Search from "../Header/Search";

// setting all the initial values
let initialRestaurantList;
let isFiltered = false;
let currentList;
let currentSearchInputText = "";

const Body = () => {
  // declaring all the state variables required
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterText, setFilterText] = useState("All");
  const restaurantCount = restaurantList.length;

  // This method is fetching restaurant data from API and converting it to list
  const fetchData = async () => {
    let res = await fetch(CARD_API);
    res = await res.json();

    let getRestaurantsList = res?.data?.cards.reduce((requiredCard, card) => {
      return card?.card?.card?.id === "restaurant_grid_listing"
        ? card?.card?.card?.gridElements.infoWithStyle?.restaurants
        : requiredCard;
    }, undefined);

    if (initialRestaurantList === undefined)
      initialRestaurantList = getRestaurantsList;

    return getRestaurantsList || [];
  };

  // This method will update the list based on search query and filter applied
  const updateRestaurantsContainer = () => {
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
  };

  // This method will set our list again to initial list based on filter once we will clear our search query
  const handleChangeInInput = (currentText) => {
    if (currentText.length === 0) {
      currentSearchInputText = currentText;
      updateRestaurantsContainer();
    }
  };

  // This method will help to process our search query
  const handleSearchEnter = (searchText) => {
    currentSearchInputText = searchText;
    updateRestaurantsContainer();
  };

  // Fetching required data to show on our webpage
  useEffect(() => {
    const loadData = async () => {
      const newList = await fetchData();
      setRestaurantList(newList);
    };
    loadData();
  }, []);

  return (
    <main>
      <div className="body">
        <div className="options-container">
          <h2>{restaurantCount} Restaurants</h2>
          <div className="options">
            <span>
              <Search
                handleSearchEnter={handleSearchEnter}
                handleChangeInInput={handleChangeInInput}
              />
            </span>
            <Sort />
            <span
              onClick={() => {
                if (isFiltered) setFilterText("All");
                else setFilterText("Highest Rating");
                isFiltered = !isFiltered;
                updateRestaurantsContainer();
              }}
            >
              <Filter stateVariables={[filterText, setFilterText]} />
            </span>
          </div>
        </div>
        <RestaurantCardContainer restaurantList={restaurantList} />
      </div>
    </main>
  );
};

export default Body;
