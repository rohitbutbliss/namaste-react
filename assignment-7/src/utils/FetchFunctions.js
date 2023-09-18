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

const fetchRestaurantMenu = async (lat, lon, id) => {
  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=326440&catalog_qa=undefined&submitAction=ENTER
  let getAllResult = {};
  try {
    // let res = await fetch(
    //   "https://cors-anywhere-gk19.onrender.com/" +
    //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    // );
    let res = await fetch(
      "https://cors-anywhere-gk19.onrender.com/" +
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    res = await res.json();

    getAllResult.restaurantInfo = res?.data?.cards[0]?.card?.card?.info;
    getAllResult.restaurantMenu = res?.data?.cards
      ?.reduce((initial, card) => {
        if (card.groupedCard !== undefined) return card;
      }, undefined)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (dish) => dish?.card?.info
      );
  } catch (error) {
    getAllResult.restaurantInfo = null;
    getAllResult.restaurantMenu = null;
  }

  return getAllResult;
};

export { fetchList, getCity, fetchRestaurantMenu };
