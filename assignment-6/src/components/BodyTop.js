import Sort from "./Sort";
import Search from "./Search";
import Filter from "./Filter";

const BodyTop = (props) => {
  const { restaurantCount, handleInputEnter, handleFilterClick, isFiltered } =
    props;
  return (
    <div className="options-container">
      <h2>{restaurantCount} Restaurants</h2>
      <div className="options">
        <span>
          <Search handleSearchEnter={handleInputEnter} />
        </span>
        <Sort />
        <span onClick={handleFilterClick}>
          <Filter stateVariables={[isFiltered]} />
        </span>
      </div>
    </div>
  );
};

export default BodyTop;
