import { City } from "country-state-city";
import { MOCK_RESTAURANT_DATA } from "./mockData";

const fetchList = async (lat, lon) => {
  let getRestaurantsList;
  try {
    let res = await fetch(
      "https://cors-anywhere-gk19.onrender.com/" +
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    res = await res.json();

    getRestaurantsList = res?.data?.cards.reduce((requiredCard, card) => {
      return card?.card?.card?.id === "restaurant_grid_listing"
        ? card?.card?.card?.gridElements.infoWithStyle?.restaurants
        : requiredCard;
    }, undefined);
  } catch (error) {
    getRestaurantsList = [];
  }

  return getRestaurantsList || [];
};
//api.ipgeolocation.io/ipgeo?apiKey=f7108121067647768e771fa850aa14a7

const getCity = (cityPrefix) => {
  return City.getCitiesOfCountry("IN").filter((city) =>
    city.name.toLowerCase().startsWith(cityPrefix.toLowerCase())
  );
};

export { fetchList, getCity };
