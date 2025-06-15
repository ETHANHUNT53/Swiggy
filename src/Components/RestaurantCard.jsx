import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card bg-gray-300 w-48 h-[380px] rounded-lg  transition delay-100 duration-300 ease-in-out hover:translate-y-2 hover:scale-110 hover:bg-gray-200">
      <div className="flex items-center justify-center  ">
        <img
          className="res-image py-4 w-44 h-36 rounded-3xl"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="mx-2 my-2 font-bold">{name}</h3>
      <h4 className="mx-2 my-1">{cuisines.join(", ")}</h4>
      <h4 className="mx-2 my-1">{avgRating} ⭐</h4>
      <h4 className="mx-2 my-1">{resData?.info?.sla?.slaString} ⌛</h4>
    </div>
  );
};

export default RestaurantCard;
