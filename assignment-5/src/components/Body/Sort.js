const Sort = () => {
  return (
    <div
      className="sort"
      onClick={() => {
        console.log("hey");
      }}
    >
      <div className="sort-value">Price : High To Low</div>
      <img
        src={require("../../../node_modules/iconoir/icons/nav-arrow-down.svg")}
        alt="sort-options"
      />
    </div>
  );
};

export default Sort;
