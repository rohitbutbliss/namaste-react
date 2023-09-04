const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li className="nav-item">
          <img
            src={require("../../../node_modules/iconoir/icons/percentage-circle.svg")}
            alt="discount"
          />
          <span className="nav-item-text">Offers</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../../../node_modules/iconoir/icons/headset-help.svg")}
            alt="help"
          />
          <span className="nav-item-text">Help</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../../../node_modules/iconoir/icons/profile-circle.svg")}
            alt="signin"
          />
          <span className="nav-item-text">Sign In</span>
        </li>
        <li className="nav-item">
          <img
            src={require("../../../node_modules/iconoir/icons/cart.svg")}
            alt="cart"
          />
          <span className="nav-item-text">Cart</span>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
