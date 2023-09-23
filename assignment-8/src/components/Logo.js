import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src={require("../images/logo.png")} alt="food-hobbit" />
      </Link>
    </div>
  );
};

export default Logo;
