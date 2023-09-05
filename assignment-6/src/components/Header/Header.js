import Logo from "./Logo";
import NavItems from "./NavItems";
import Location from "./Location";
import Search from "./Search";

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
        </div>
      </div>
    </header>
  );
};

export default Header;
