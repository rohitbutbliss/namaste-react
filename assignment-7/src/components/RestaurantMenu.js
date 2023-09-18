import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchRestaurantMenu } from "../utils/FetchFunctions";
import ShimmerUI from "./ShimmerUI";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [currentLatitude, currentLongitude] = useOutletContext();

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const fetchMenu = async () => {
    // 326440;
    const result = await fetchRestaurantMenu(
      currentLatitude,
      currentLongitude,
      326440
    );
    return result;
  };

  useEffect(() => {
    (async () => {
      const menuList = await fetchMenu();
      const { restaurantInfo, restaurantMenu } = menuList;
      setRestaurantInfo(restaurantInfo);
      setRestaurantMenu(restaurantMenu);
    })();
  }, []);
  return !restaurantInfo || !restaurantMenu ? (
    <ShimmerUI />
  ) : (
    <div
      style={{
        maxWidth: "800px",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontFamily: "proxima-nova-medium", fontSize: "24px" }}>
            {restaurantInfo.name}
          </span>
          <span style={{ fontSize: "14px", color: "rgb(162 162 162)" }}>
            {restaurantInfo.cuisines.join(", ")}
          </span>
          <span style={{ color: "rgb(162 162 162)" }}>
            {restaurantInfo.areaName}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifySelf: "end",
            alignItems: "center",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #d3d3d3",
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "center",
              padding: "10px",
              borderBottom: "0.5px solid #d3d3d3",
            }}
          >
            {restaurantInfo.avgRating}
          </span>

          <span
            style={{
              padding: "10px",
              fontSize: "12px",
              borderTop: "0.5px solid #d3d3d3",
            }}
          >
            {restaurantInfo.totalRatingsString}
          </span>
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "40px 0",
          borderTop: "1px solid #d3d3d3",
        }}
      >
        {restaurantMenu.map((menuItem) => (
          <MenuCard menuItemObj={menuItem} key={menuItem.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
