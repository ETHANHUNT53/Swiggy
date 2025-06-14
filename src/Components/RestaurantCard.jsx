import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card bg-gray-300 w-48 h-[380px] rounded-lg hover:bg-gray-200">
      <div className="flex items-center justify-center rounded-lg ">
        <img
          className="res-image py-4 w-44 h-36 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="mx-2 my-2 font-bold">{name}</h3>
      <h4 className="mx-2 ">{cuisines.join(", ")}</h4>
      <h4 className="mx-2 ">{avgRating}</h4>
      <h4 className="mx-2 ">{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
