import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { itemCards } = data;
  console.log(itemCards);
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
            <div className="ml-2 my-8" key={item.card.info.id}>
              <div className="flex justify-between px-4  border-gray-400 border-b-2 ">
                <div>
                  <span>
                    {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                      ? "🔴"
                      : "🟢"}
                  </span>
                  <h1 className="text-lg font-semibold">
                    {item?.card?.info?.name}
                  </h1>
                  <h3 className="text-base font-medium">
                    Rs. {item?.card?.info?.price / 100}
                  </h3>
                  <div className="w-96">
                    <p className="my-2 mb-8">{item?.card?.info?.description}</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="sticky">
                    <img
                      className="w-40 h-40 "
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt=""
                    />
                  </div>
                  <button className="bg-white px-8 py-2  hover:bg-gray-100 rounded-lg absolute z-10 my-[-45px] mx-8 transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:scale-125 hover:text-green-600">
                    ADD
                  </button>
                </div>
              </div>
              {/* <div className="bg-gray-400 h-1"></div> */}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantCategory;
