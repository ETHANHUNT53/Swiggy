import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="head-container flex justify-between border-gray-500">
      <img className="logo w-36" src={LOGO_URL}></img>
      <ul className="header-items flex items-center">
        <li className="px-4">
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About Us
          </Link>
        </li>
        <li className="px-4">
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
        <li className="px-4">
          <Link
            to={"/Instamart"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Instamart
          </Link>
        </li>
        <li className="px-4">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
