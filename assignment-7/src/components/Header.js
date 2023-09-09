import Logo from "./Logo";
import NavItems from "./NavItems";
import Location from "./Location";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <LoginButton />

          <NavItems />
          <Location />
        </div>
      </div>
    </header>
  );
};

export default Header;
