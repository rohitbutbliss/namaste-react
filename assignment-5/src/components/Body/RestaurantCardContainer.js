import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";

const RestaurantCardContainer = () => {
  return (
    <div className="restaurant-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantCardContainer;
