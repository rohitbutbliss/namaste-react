import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, locality, cuisines, avgRating, cloudinaryImageId } =
    resData.info;

  return (
    <div className="restaurant-card">
      <div className="food-image-container">
        <img src={CDN_URL + cloudinaryImageId} alt="food-image" />
      </div>
      <div className="food-info-container">
        <h2 className="restaurant-title">{name}</h2>
        <div className="restaurant-rating">{avgRating}</div>
        <div className="restaurant-cuisine">{cuisines.join(", ")}</div>
        <div className="district">{locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
