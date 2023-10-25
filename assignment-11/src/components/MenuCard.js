const MenuCard = (props) => {
  const { description, imageId, isVeg, name, defaultPrice, price, id } =
    props.menuItemObj;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto auto 1fr",
          gap: "10px",
          alignItems: "space-between",
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
        <p
          style={{
            fontSize: "12px",
            color: "rgb(162,162,162)",
            height: "100%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
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
        <button
          style={{
            backgroundColor: "green",
            border: "none",
            color: "white",
            position: "absolute",
            bottom: 0,
            translate: "0 10%",
            padding: "5px 8px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
