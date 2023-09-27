import { useEffect, useState } from "react";

const useRestaurantMenu = (lat, lon, id) => {
  const [resInfo, setResInfo] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchRestaurantMenu = async () => {
    const currentResInfo = {};
    try {
      let res = await fetch(
        "https://cors-anywhere-v3.onrender.com/" +
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );

      res = await res.json();

      const filterObj = {};
      currentResInfo.restaurantInfo = res?.data?.cards[0]?.card?.card?.info;
      currentResInfo.restaurantMenu = res?.data?.cards
        ?.reduce((initial, card) => {
          if (card.groupedCard !== undefined) return card;
        }, undefined)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (cards) =>
            cards?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
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
      currentResInfo.restaurantInfo = undefined;
      currentResInfo.restaurantMenu = undefined;
    }

    setResInfo(currentResInfo);
  };

  useEffect(() => {
    if (!isLoaded) {
      (async () => {
        await fetchRestaurantMenu();
      })();
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return resInfo;
};

export default useRestaurantMenu;
