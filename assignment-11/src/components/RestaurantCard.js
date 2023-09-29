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

const WithDiscountOffer = (props) => {
  console.log(props);
  const { resData } = props;
  const { aggregatedDiscountInfoV3 } = resData.info;
  const { header, subHeader } = aggregatedDiscountInfoV3;

  const { name, locality, cuisines, avgRating, cloudinaryImageId, id } =
    resData.info;

  const { resId } = useParams();

  return (
    <Link to={`/restaurants/menu/${id}`}>
      <div className="restaurant-card" style={{ position: "relative" }}>
        <label
          style={{
            position: "absolute",
            color: "white",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "5px",
            left: "5px",
            top: "5px",
          }}
        >
          {header + (subHeader ? " " + subHeader : "")}
        </label>
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
export { WithDiscountOffer };
