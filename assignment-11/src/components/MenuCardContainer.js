import { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCardContainer = (props) => {
  const { title, itemCards } = props.menuList;
  const { showStatusArray, setShowStatusArray, index } = props;
  const handleClick = () => {
    const tempStatusArray = new Array(showStatusArray.length).fill(false);
    tempStatusArray[index] = !showStatusArray[index];
    setShowStatusArray(tempStatusArray);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1
        style={{ fontWeight: "bold", fontSize: "24px", cursor: "pointer" }}
        onClick={handleClick}
      >
        {title + ` [${itemCards.length}]`}
      </h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(211,211,211)",
          height: "1px",
        }}
      ></div>
      {itemCards.map(
        (menuItem) =>
          showStatusArray[index] && (
            <MenuCard
              key={menuItem.card.info.id}
              menuItemObj={menuItem.card.info}
            />
          )
      )}
    </div>
  );
};

export default MenuCardContainer;
