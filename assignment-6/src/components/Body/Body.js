import Sort from "./Sort";
import Filter from "./Filter";
import RestaurantCardContainer from "./RestaurantCardContainer";
import { useEffect, useRef, useState } from "react";
import { CARD_API } from "../../utils/constants";
import Search from "../Header/Search";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  // declaring all the state variables required
  const [initialRestaurantList, setInitialRestaurantList] = useState([]);
  const [currentSearchInputText, setCurrentSearchInputText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const counter = useRef(0);

  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);

  // This method is fetching restaurant data from API and converting it to list
  const fetchData = async () => {
    let getRestaurantsList;
    try {
      let res = await fetch(CARD_API);
      res = await res.json();

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
    console.log("inside update restaurnt container");
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
  };

  // This method will set our list again to initial list based on filter once we will clear our search query
  const handleChangeInInput = (currentText) => {
    if (currentText.length === 0) {
      setCurrentSearchInputText(currentText);
    }
  };

  // This method will help to process our search query
  const handleSearchEnter = (searchText) => {
    if (!(currentSearchInputText === searchText))
      setCurrentSearchInputText(searchText);
  };

  // Fetching required data to show on our webpage
  useEffect(() => {
    const loadData = async () => {
      const newList = await fetchData(); // fetching data
      console.log("here");
      setRestaurantList(newList);
      setInitialRestaurantList(newList);
      if (!isLoaded) setIsLoaded(!isLoaded); // updating isLoaded state after fetching data to mark it as true
    };
    loadData();
  }, []);

  // This will update RestaurantContainer once there is change in search text or filter
  useEffect(() => {
    console.log("changing current container due to search and filter");
    updateRestaurantsContainer();
  }, [currentSearchInputText, isFiltered]);

  // This method will change the restaurant count
  useEffect(() => {
    console.log("changing current counter");
    const currentListLength = restaurantList.length;
    setRestaurantCount(currentListLength);
  }, [restaurantList]);

  counter.current++;
  console.log(counter.current);
  if (!isLoaded) {
    return (
      <main>
        <div className="body">
          <ShimmerUI />
        </div>
      </main>
    );
  } else if (restaurantList.length === 0) {
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
                  const updatedIsFiltered = !isFiltered;
                  setIsFiltered(updatedIsFiltered);
                }}
              >
                <Filter stateVariables={[isFiltered]} />
              </span>
            </div>
          </div>
          <div className="no-result">
            <p>No Result Found</p>
            <img src={require("../../images/no-results.png")} alt="" />
          </div>
        </div>
      </main>
    );
  }

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
                const updatedIsFiltered = !isFiltered;
                setIsFiltered(updatedIsFiltered);
              }}
            >
              <Filter stateVariables={[isFiltered]} />
            </span>
          </div>
        </div>
        <RestaurantCardContainer restaurantList={restaurantList} />
      </div>
    </main>
  );
};

export default Body;
