import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const ItemList = ({data}) => {
    console.log(data.info)
    // const {card} = data;
    // console.log(card)

    const dispatch = useDispatch();
    const handleAddItem = (card)=>{
        dispatch(addItem(card))
    }
  return (
    <div className="ml-2 my-8" >
                  <div className="flex justify-between px-4  border-gray-400 border-b-2 ">
                    <div>
                      <span>
                        {data?.info?.itemAttribute?.vegClassifier === "NONVEG"
                          ? "🔴"
                          : "🟢"}
                      </span>
                      <h1 className="text-lg font-semibold">
                        {data?.info?.name}
                      </h1>
                      <h3 className="text-base font-medium">
                        Rs. {data?.info?.price / 100}
                      </h3>
                      <div className="w-96">
                        <p className="my-2 mb-8">{data?.info?.description}</p>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="sticky">
                        <img
                          className="w-40 h-40 "
                          src={CDN_URL + data?.info?.imageId}
                          alt=""
                        />
                      </div>
                      <button onClick={()=>handleAddItem(data)} className="bg-white px-8 py-2  hover:bg-gray-100 rounded-lg absolute z-10 my-[-45px] mx-8 transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:scale-125 hover:text-green-600">
                        ADD
                      </button>
                    </div>
                  </div>
                  {/* <div className="bg-gray-400 h-1"></div> */}
                </div>
    
  )
}

export default ItemList
