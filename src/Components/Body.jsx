import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useRestaurants from "../hooks/useRestaurants";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, loading } = useRestaurants();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(RES_API);
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurants(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurants(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   console.log(listOfRestaurants);
  // };

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
          className="border border-gray-700 mx-8 px-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="mx-8 bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-300"
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
          className="rating-btn mx-8 bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-300"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap  mx-12 rounded-xl">
        {filteredRestaurants?.map((res) => (
          <Link
            to={"/restaurant/" + res?.info?.id}
            key={res?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="mx-4 my-4 flex rounded-xl">
              <RestaurantCard resData={res} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
