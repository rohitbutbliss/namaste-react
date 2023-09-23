import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <Link to="">
          <li className="nav-item">
            <img
              src={require("../../node_modules/iconoir/icons/percentage-circle.svg")}
              alt="discount"
            />
            <span className="nav-item-text">Offers</span>
          </li>
        </Link>

        <Link to="/about">
          <li className="nav-item">
            <img
              src={require("../../node_modules/iconoir/icons/group.svg")}
              alt="signin"
            />
            <span className="nav-item-text">About Us</span>
          </li>
        </Link>
        <Link to="/contact">
          <li className="nav-item">
            <img
              src={require("../../node_modules/iconoir/icons/phone-add.svg")}
              alt="help"
            />
            <span className="nav-item-text">Contact</span>
          </li>
        </Link>
        <Link to="">
          <li className="nav-item">
            <img
              src={require("../../node_modules/iconoir/icons/cart.svg")}
              alt="cart"
            />
            <span className="nav-item-text">Cart</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavItems;
