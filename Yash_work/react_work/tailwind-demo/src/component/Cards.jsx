import React from 'react';
import { FcCloseUpMode, FcLike } from "react-icons/fc";
import { FaBeer, FaShoppingCart } from 'react-icons/fa'
function Cards({number}) {

  return (
    <div>
      <div className="bg-red-200 p-4 m-2 rounded-xl shadow-lg hover:bg-red-900 hover:scale-105 md:display-none">
        <h2 className="text-red-700 text-xl font-semibold flex justify-center item-center m-2"><FcCloseUpMode size={30} enableBackground={true} /> Card {number} <FcCloseUpMode size={30}/></h2>

        <p className=" mt-3 flex justify-center item-center">
          This is a simple card built using Tailwind CSS utility classes.
        </p>
        <button className='bg-red-300 hover:bg-red-100 rounded-xl p-1 m-1 flex justify-center active:bg-red-400 hover:scale-105'>Press<div className='text-xl m-1'><FaBeer className='text-xl bg-white-300'/></div></button>
      </div>
       <button className="
      flex items-center gap-2
      bg-red-400 text-white
      px-4 py-2 rounded-lg
      hover:bg-red-500
      active:scale-95
      active:bg-red-900
      mx-2 shadow-lg 
    ">
      <FaShoppingCart className="text-xl" />
      Add to Cart
    </button>
    </div>
  );
}

export default Cards;
