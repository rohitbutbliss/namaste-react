import Sort from "./Sort";
import Search from "./Search";
import Filter from "./Filter";

const BodyTop = (props) => {
  const {
    restaurantCount,
    handleInputEnter,
    handleInputChange,
    handleFilterClick,
    isFiltered,
    searchText,
  } = props;
  return (
    <div className="options-container">
      <h2>{restaurantCount} Restaurants</h2>
      <div className="options">
        <span>
          <Search
            handleSearchEnter={handleInputEnter}
            handleChangeInInput={handleInputChange}
            searchText={searchText}
          />
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
