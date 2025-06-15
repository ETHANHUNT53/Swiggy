import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const params = useParams();
  const resInfo = useRestaurantMenu(params.resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>;
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuCard = menuCards.find((c) => c?.card?.card?.itemCards);

  const categories = menuCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log("categories" + categories);
  const itemCards = menuCard?.card?.card?.itemCards || [];
  console.log(menuCards);
  // console.log(resInfo);
  return (
    <div className="res-menu border border-black">
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl">{name}</h2>
      </div>
      <div className="flex justify-center">
        <h3 className="font-semibold">
          {cuisines} - {costForTwoMessage}
        </h3>
      </div>
      <div className="flex justify-center">
        <h2 className="text-3xl my-4 font-semibold">Menu</h2>
      </div>
      <ul>
        {categories.map((category, index) => (
          // <li key={item?.card?.info?.id}>
          <li className="my-4 mx-80  " key={category.card?.card?.title}>
            <RestaurantCategory
              data={category.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
