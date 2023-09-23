import { City } from "country-state-city";
import { MOCK_RESTAURANT_DATA } from "./mockData";

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
      "https://cors-anywhere-v3.onrender.com/" +
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    res = await res.json();

    const filterObj = {};
    getAllResult.restaurantInfo = res?.data?.cards[0]?.card?.card?.info;
    getAllResult.restaurantMenu = res?.data?.cards
      ?.reduce((initial, card) => {
        if (card.groupedCard !== undefined) return card;
      }, undefined)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (cards) =>
          cards?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    getAllResult.restaurantMenu = getAllResult.restaurantMenu
      ?.reduce((initial, cards) => {
        initial.push(...cards?.card?.card?.itemCards);
        return initial;
      }, [])
      .map((items) => items.card.info)
      .filter((item) => {
        if (filterObj[item.id] === undefined) {
          filterObj[item.id] = true;
          return true;
        }
      });
  } catch (error) {
    getAllResult.restaurantInfo = null;
    getAllResult.restaurantMenu = null;
  }

  return getAllResult;
};

export { fetchList, getCity, fetchRestaurantMenu };
