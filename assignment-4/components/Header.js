const Logo = () => {
  return (
    <div className="logo">
      <img src={require("../images/logo.png")} alt="food-hobbit" />
    </div>
  );
};

const Location = () => {
  return (
    <div className="location">
      <img
        src={require("../node_modules/iconoir/icons/pin-alt.svg")}
        alt="location"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <img
        src={require("../node_modules/iconoir/icons/search.svg")}
        alt="search"
      />
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search"
        autoComplete="off"
      />
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li className="nav-item">
          <img
            src={require("../node_modules/iconoir/icons/percentage-circle.svg")}
            alt="discount"
          />
          <span className="nav-item-text">Offers</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../node_modules/iconoir/icons/headset-help.svg")}
            alt="help"
          />
          <span className="nav-item-text">Help</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../node_modules/iconoir/icons/profile-circle.svg")}
            alt="signin"
          />
          <span className="nav-item-text">Sign In</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../node_modules/iconoir/icons/cart.svg")}
            alt="cart"
          />
          <span className="nav-item-text">Cart</span>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <NavItems />
          <Location />
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
