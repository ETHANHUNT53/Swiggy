import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + params.resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json);
  };

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

  const itemCards = menuCard?.card?.card?.itemCards || [];
  //   console.log(resInfo.cards[4]);
  return (
    <div className="res-menu">
      <h2>{name}</h2>
      <h3>
        {cuisines} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
