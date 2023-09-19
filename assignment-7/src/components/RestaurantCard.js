import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, locality, cuisines, avgRating, cloudinaryImageId, id } =
    resData.info;

  const { resId } = useParams();

  return (
    <Link to={`/restaurants/menu/${id}`}>
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
    </Link>
  );
};

export default RestaurantCard;
