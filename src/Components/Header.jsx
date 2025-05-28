import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head-container">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="header-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
