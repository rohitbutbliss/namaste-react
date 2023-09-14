import Logo from "./Logo";
import NavItems from "./NavItems";
import Location from "./Location";
import LoginButton from "./LoginButton";

const Header = (props) => {
  const { updateIsModalActive, updateSearchModalStatus } = props;
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <NavItems />
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "24px", cursor: "pointer" }}
              src={require("../../node_modules/iconoir/icons/search.svg")}
              alt="search"
              onClick={updateSearchModalStatus}
            />
            <Location updaterFunction={updateIsModalActive} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
