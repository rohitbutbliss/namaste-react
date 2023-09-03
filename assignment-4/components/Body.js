const Sort = () => {
  return (
    <div className="sort">
      <div className="sort-value">Price : High To Low</div>
      <img
        src={require("../node_modules/iconoir/icons/nav-arrow-down.svg")}
        alt="sort-options"
      />
    </div>
  );
};

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-value">Veg</div>
      <img
        src={require("../node_modules/iconoir/icons/filter-list.svg")}
        alt="filter-options"
      />
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <div className="food-image-container">
        <img src={props.resImageUrl} alt="food-image" />
      </div>
      <div className="food-info-container">
        <h2 className="restaurant-title">{props.resName}</h2>
        <div className="restaurant-rating">{props.resRating}</div>
        <div className="restaurant-cuisine">{props.resCuisine}</div>
        <div className="district">{props.resDistrict}</div>
      </div>
    </div>
  );
};

const RestaurantCardContainer = () => {
  return (
    <div className="restaurant-container">
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g2pklvjnapzfoc4ackou"
        resName="Punjab Angithi"
        resDistrict="Rohini"
        resRating="4.1"
        resCuisine="North Indian, Chinese, Punjabi, Kebabs, Tandoor"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
        resName="KFC"
        resDistrict="Rohini"
        resRating="4.1"
        resCuisine="Burgers, Biryani, American, Snacks, Fast Food"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        resName="Burger King"
        resDistrict="Rohini"
        resRating="4.4"
        resCuisine="Burgers, American"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720"
        resName="McDonald's"
        resDistrict="Rohini"
        resRating="4.3"
        resCuisine="American"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hsb5yt3qhechxockrbut"
        resName="Domino's Pizza"
        resDistrict="Rohini"
        resRating="4.4"
        resCuisine="Pizzas, Italian, Pastas, Desserts"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmnzl74nmlldrsv9bnvk"
        resName="Bakingo"
        resDistrict="Rohini"
        resRating="4.3"
        resCuisine="Bakery, Desserts, Beverages, Snacks"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"
        resName="Subway"
        resDistrict="Rohini"
        resRating="3.7"
        resCuisine="Salads, Snacks, Desserts, Beverages"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
        resName="Pizza Hut"
        resDistrict="Rohini"
        resRating="3.8"
        resCuisine="Pizzas, Fast Food"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aizb6uyem2jb1hcrhxac"
        resName="La Pino's Pizza"
        resDistrict="Rohini"
        resRating="4"
        resCuisine="Pizzas, Pastas, Italian, Desserts, Beverages"
      />
      <RestaurantCard
        resImageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0984acc0ed7b914206dbbcb90297becc"
        resName="Wow! Momo"
        resDistrict="Prashant Vihar"
        resRating="3.8"
        resCuisine="Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages"
      />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="options-container">
        <h2>10 Restaurant</h2>
        <div className="options">
          <Sort />
          <Filter />
        </div>
      </div>
      <RestaurantCardContainer />
    </div>
  );
};

export { Body };
