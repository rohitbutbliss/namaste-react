const LoginButton = (props) => {
  const { loginState } = props;
  return (
    <div
      style={
        loginState ? { backgroundColor: "red" } : { backgroundColor: "green" }
      }
      className="login-btn"
    >
      <h3>{loginState ? "Log out" : "Login"}</h3>
    </div>
  );
};

export default LoginButton;
