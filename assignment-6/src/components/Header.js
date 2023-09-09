import Logo from "./Logo";
import NavItems from "./NavItems";
import Location from "./Location";
import { useState } from "react";
import LoginButton from "./LoginButton";

const Header = () => {
  const [loginState, setLoginState] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <span
            onClick={() => {
              setLoginState(!loginState);
            }}
          >
            <LoginButton loginState={loginState} />
          </span>
          <NavItems />
          <Location />
        </div>
      </div>
    </header>
  );
};

export default Header;
