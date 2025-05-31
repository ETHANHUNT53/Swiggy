import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="head-container">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="header-items">
        <li>
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
