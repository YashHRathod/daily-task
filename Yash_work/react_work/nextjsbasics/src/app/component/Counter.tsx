"use client";
import { useState } from 'react'
// import Contact from "../contact/page"
export default function Counter() {
    const [count,setCount]=useState(0)
    const increase=()=>{
        setCount(prev=>prev+1);
    }
    const decrease=()=>{
        setCount(prev=>prev-1);
    }
  return (
    <div >
        {/* <Contact/> */}
       <div className='flex justify-center align-center mt-40'> <h1 className='text-3xl'>Counter:{count}</h1></div>
        <div className='flex justify-center align-center'>
        <button className=" m-2 bg-amber-950 p-2 rounded-4xl text-2xl w-10" onClick={increase}>+</button>
        <button className="m-2 bg-amber-950 p-2 rounded-4xl text-2xl w-10" onClick={decrease}>-</button>
        </div>
    </div>
  )
}
