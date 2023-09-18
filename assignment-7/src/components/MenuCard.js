const MenuCard = (props) => {
  const { description, imageId, isVeg, name, defaultPrice, price, id } =
    props.menuItemObj;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "5px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            width: "20px",
          }}
          src={
            isVeg
              ? require("../images/icons8-veg-48.png")
              : require("../images/icons8-non-veg-48.png")
          }
          alt={isVeg ? "veg" : "non-veg"}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ fontSize: "14px" }}>{name}</span>

          <span
            style={{
              fontSize: "14px",
            }}
          >
            {"₹" + (defaultPrice || price) / 100}
          </span>
        </div>
        <p style={{ fontSize: "12px", color: "rgb(162,162,162)" }}>
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          width: "80px",
          overflow: "hidden",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <img
          style={{ objectFit: "contain" }}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuCard;
