import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { itemCards } = data;
  // console.log(itemCards);
  //   console.log(itemCards?.card?.info?.itemAttribute);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className=" bg-gray-200 hover:bg-gray-100 rounded-lg">
      <span
        onClick={handleClick}
        className="flex border-gray-500  cursor-pointer rounded-lg justify-between h-16 shadow-xl  border-b-2"
      >
        <h1 className="text-xl font-bold my-4 mx-2">
          {data.title + "(" + data.itemCards.length + ")"}
        </h1>
        <span className="my-4 mx-2 text-lg ">{showItems ? "⬆️" : "⬇️"}</span>
      </span>
      {/* Accordion body */}
      {showItems ? (
        <div>
          {itemCards.map((item) => (
            <ItemList key={item?.card?.info?.id} data={item?.card}/>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantCategory;
