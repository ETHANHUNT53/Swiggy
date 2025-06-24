import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className="head-container flex justify-between border-gray-500">
      <img className="logo w-36" src={LOGO_URL}></img>
      <ul className="header-items flex items-center">
        <li className="px-4 text-gray-700 transition delay-100  duration-300 ease-in-out hover:translate-y-1  hover:font-semibold hover:scale-110 hover:text-black">
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li className="px-4 text-gray-700 transition delay-100 duration-300 ease-in-out hover:translate-y-1  hover:font-semibold hover:scale-110 hover:text-black">
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About Us
          </Link>
        </li>
        <li className="px-4 text-gray-700 transition delay-100 duration-300 ease-in-out hover:translate-y-1  hover:font-semibold hover:scale-110 hover:text-black">
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
        <li className="px-4 text-gray-700 transition delay-100 duration-300 ease-in-out hover:translate-y-1  hover:font-semibold hover:scale-110 hover:text-black">
          <Link
            to={"/Instamart"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Instamart
          </Link>
        </li>
        <li className="px-4 font-bold transition delay-100 duration-300 ease-in-out hover:translate-y-1  hover:font-semibold hover:scale-110 cursor-pointer">
          <Link 
          to = {'/cart'}
          >
            Cart - ({cartItems.length})
            </Link>
          </li>
        <li className="font-bold ">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
