// src/hooks/useFetchRestaurants.js
import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(RES_API);
        const json = await data.json();
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setListOfRestaurants(restaurants || []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setListOfRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { listOfRestaurants, loading };
};

export default useFetchRestaurants;
