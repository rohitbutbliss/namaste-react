import RestaurantCard, { WithDiscountOffer } from "./RestaurantCard";

const RestaurantCardContainer = (props) => {
  const { restaurantList } = props;
  return (
    <div className="restaurant-container">
      {restaurantList.map((restaurant) => {
        const { info: resInfo } = restaurant;
        return resInfo.aggregatedDiscountInfoV3 === undefined ||
          resInfo.aggregatedDiscountInfoV3.header === undefined ? (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ) : (
          <WithDiscountOffer key={restaurant.info.id} resData={restaurant} />
        );
      })}
    </div>
  );
};

export default RestaurantCardContainer;
