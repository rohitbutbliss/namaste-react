import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = (props) => {
  const { restaurantList } = props;

  return (
    <div className="restaurant-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantCardContainer;
