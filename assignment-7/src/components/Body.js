import RestaurantCardContainer from "./RestaurantCardContainer";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import BodyTop from "./BodyTop";
import NoResult from "./NoResult";
import { fetchList } from "../utils/FetchFunctions";
import { useOutletContext } from "react-router-dom";

const Body = () => {
  // declaring all the state variables required
  const [initialRestaurantList, setInitialRestaurantList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSearchInputText, setCurrentSearchInputText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);

  const [currentLatitude, currentLongitude] = useOutletContext();

  // This method is fetching restaurant data from API and converting it to list
  const fetchData = () => {
    const lat = Number(JSON.parse(localStorage.getItem("lat")));
    const lon = Number(JSON.parse(localStorage.getItem("lon")));
    return fetchList(lat, lon);
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
      setIsLoaded(true);
    };
    loadData();
  }, [currentLatitude, currentLongitude]);

  // This will update RestaurantContainer once there is change in search text or filter
  useEffect(() => {
    updateRestaurantsContainer();
  }, [currentSearchInputText, isFiltered]);

  return (
    <>
      {!isLoaded ? (
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
    </>
  );
};

export default Body;
