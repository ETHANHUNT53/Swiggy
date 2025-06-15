import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useRestaurants from "../hooks/useRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, loading } = useRestaurants();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search-container flex px-8">
        <input
          type="text"
          className="border border-gray-700 mx-8 px-2 focus:rounded-lg rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="mx-8 bg-gray-400 px-4 py-2 rounded-lg  transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:bg-black hover:text-white hover:scale-110"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurantsList);
          }}
        >
          Search
        </button>
        <button
          className="rating-btn mx-8 bg-gray-400 px-4 py-2 rounded-lg transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:bg-black hover:text-white hover:scale-110"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className="border border-gray-700 mx-8 px-2 focus:rounded-lg rounded-lg"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container flex flex-wrap  mx-12 rounded-xl">
        {filteredRestaurants?.map((res) => (
          <Link
            to={"/restaurant/" + res?.info?.id}
            key={res?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="mx-4 my-4 flex rounded-xl ">
              <RestaurantCard resData={res} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
