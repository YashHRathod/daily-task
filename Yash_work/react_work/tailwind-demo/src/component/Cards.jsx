import React from 'react';

function Cards() {
  return (
    <div>
      <div className="bg-red-200 p-4 m-2 rounded-xl shadow-lg hover:bg-red-900 hover:scale-105 md:display-none">
        <h2 className="text-red-700 text-xl font-semibold flex justify-center item-center">Card Title</h2>

        <p className="text-red mt-3 flex justify-center item-center">
          This is a simple card built using Tailwind CSS utility classes.
        </p>
        <button className='border-black bg-red-300 hover:bg-red-100 rounded-xl p-1 m-1 flex justify-center active:bg-red-400 hover:scale-105'>Press</button>
      </div>
    </div>
  );
}

export default Cards;
