import RestaurantCardContainer from "./RestaurantCardContainer";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import BodyTop from "./BodyTop";
import NoResult from "./NoResult";
import { useOutletContext } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";
import useFilteredSearchedList from "../utils/useFilteredSearchedList";

const Body = () => {
  // declaring all the state variables required
  const [currentSearchInputText, setCurrentSearchInputText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentLatitude, currentLongitude] = useOutletContext();
  const { restaurantsList: initialRestaurantList, isLoaded } =
    useRestaurantsList(currentLatitude, currentLongitude);
  const [restaurantsList, restaurantCount] = useFilteredSearchedList(
    isFiltered,
    currentSearchInputText,
    initialRestaurantList
  );

  // This method will help to process our search query
  const handleSearchEnter = (searchText) => {
    if (!(currentSearchInputText === searchText))
      setCurrentSearchInputText(searchText);
  };

  const handleFilterClick = () => {
    const updatedIsFiltered = !isFiltered;
    setIsFiltered(updatedIsFiltered);
  };

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
          {restaurantsList.length === 0 ? (
            <NoResult />
          ) : (
            <RestaurantCardContainer restaurantList={restaurantsList} />
          )}
        </>
      )}
    </>
  );
};

export default Body;
