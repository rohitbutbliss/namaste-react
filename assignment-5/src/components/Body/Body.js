import Sort from "./Sort";
import Filter from "./Filter";
import RestaurantCardContainer from "./RestaurantCardContainer";

const Body = () => {
  return (
    <main>
      <div className="body">
        <div className="options-container">
          <h2>20 Restaurants</h2>
          <div className="options">
            <Sort />
            <Filter />
          </div>
        </div>
        <RestaurantCardContainer />
      </div>
    </main>
  );
};

export default Body;
