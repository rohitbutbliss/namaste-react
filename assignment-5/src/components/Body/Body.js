import Sort from "./Sort";
import Filter from "./Filter";
import RestaurantCardContainer from "./RestaurantCardContainer";
import { restaurantList as list } from "../../utils/mockData";
import { useState } from "react";

const initialRestaurantList = [...list];
let isFiltered = false;

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(list);

  return (
    <main>
      <div className="body">
        <div className="options-container">
          <h2>20 Restaurants</h2>
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
