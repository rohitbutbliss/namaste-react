import { useOutletContext, useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCardContainer from "./MenuCardContainer";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [currentLatitude, currentLongitude] = useOutletContext();

  const { resId } = useParams();

  const { restaurantInfo, restaurantMenu } = useRestaurantMenu(
    currentLatitude,
    currentLongitude,
    resId
  );

  const [showStatusArray, setShowStatusArray] = useState([]);

  const setInitialStatusArray = () => {
    const tempStatusArray = [];
    for (let i = 0; i < restaurantMenu?.length || 0; i++)
      tempStatusArray[i] = false;

    tempStatusArray[0] = true;
    setShowStatusArray([...tempStatusArray]);
  };

  useEffect(() => {
    setInitialStatusArray();
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
          gap: "50px",
          padding: "40px 0",
          borderTop: "1px solid #d3d3d3",
        }}
      >
        {restaurantMenu.map((menuItem, index) => (
          <MenuCardContainer
            menuList={menuItem.card.card}
            key={index}
            setShowStatusArray={setShowStatusArray}
            statusArrayLength={restaurantMenu.length}
            index={index}
            showStatusArray={showStatusArray}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
