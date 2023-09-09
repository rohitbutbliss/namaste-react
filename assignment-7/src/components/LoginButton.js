import { useState } from "react";

const LoginButton = (props) => {
  const [loginState, setLoginState] = useState(false);

  return (
    <div
      style={
        loginState ? { backgroundColor: "red" } : { backgroundColor: "green" }
      }
      onClick={() => {
        setLoginState(!loginState);
      }}
      className="login-btn"
    >
      <h3>{loginState ? "Log out" : "Login"}</h3>
    </div>
  );
};

export default LoginButton;
