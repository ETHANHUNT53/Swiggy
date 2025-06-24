import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
  return (
    <div>
        <div className=' flex justify-center'>
            <h1 className='text-2xl font-bold text-center'>Cart</h1>
            <button onClick={handleClearCart} className='mx-16 bg-gray-400 px-4 py-2 rounded-lg  transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:bg-black hover:text-white hover:scale-110'>Clear Cart</button>
         </div>

        <div className='w-6/12 flex-row justify-center ml-80 mt-16'>
            {cartItems.map((item)=><ItemList key={item?.info?.id} data={item}/>)}
        </div>
    
    </div>
  )
}

export default Cart
