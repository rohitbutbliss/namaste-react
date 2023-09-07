const Filter = (props) => {
  const [isFiltered] = props.stateVariables;
  return (
    <div className="filter">
      <div className="filter-value">
        {!isFiltered ? "All" : "Highest Rated"}
      </div>
      <img
        src={require("../../node_modules/iconoir/icons/filter-list.svg")}
        alt="filter-options"
      />
    </div>
  );
};

export default Filter;
