import Sort from "./Sort";
import Filter from "./Filter";
import RestaurantCardContainer from "./RestaurantCardContainer";
import { restaurantList as list } from "../../utils/mockData";
import { useEffect, useState } from "react";
import { CARD_API } from "../../utils/constants";

let initialRestaurantList = [...list];
let isFiltered = false;

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(list);
  const totalRestaurants = restaurantList.length;

  const fetchData = async () => {
    let res = await fetch(CARD_API);
    res = await res.json();
    return res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  };

  useEffect(() => {
    const loadData = async () => {
      const newList = await fetchData();
      setRestaurantList(newList);
      initialRestaurantList = newList;
    };
    loadData();
  }, []);

  return (
    <main>
      <div className="body">
        <div className="options-container">
          <h2>{totalRestaurants} Restaurants</h2>
          <div className="options">
            <Sort />
            <span
              onClick={() => {
                if (!isFiltered) {
                  const filteredList = restaurantList.filter(
                    (restaurant) => restaurant.info.avgRating > 4
                  );
                  setRestaurantList(filteredList);
                } else {
                  setRestaurantList(initialRestaurantList);
                }
                isFiltered = !isFiltered;
              }}
            >
              <Filter />
            </span>
          </div>
        </div>
        <RestaurantCardContainer restaurantList={restaurantList} />
      </div>
    </main>
  );
};

export default Body;
