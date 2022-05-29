import React ,{useLayoutEffect}from 'react'
import Link from 'next/link'
import { BsList } from "react-icons/bs";
import { useState } from 'react';
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [show,setShow]=useState(true)
  useLayoutEffect(() => {
    //  if(window.innerWidth)
  if(window.innerWidth<720){
      setShow(false)
    }else{
      setShow(true)
    }
   }, [])
  return (
    <div className='menu flex lg:flex-row flex-col justify-between h-10 p-2 items-center relative'>
        <div className=" px-10">
            {/* <h1>Shrinidhi Batavi</h1> */}
        </div>
        {/* menu buttons */}
       {show?<div className="flex lg:bg-transparent bg-gray-600 z-10  flex-col lg:flex-row lg:w-auto w-full justify-center items-center gap-y-3 p-5 mt-8 ">
                <Link  href="/">
                    <div className="w-32 cursor-pointer hover:bg-orange-300  mx-4 flex justify-center items-center h-8 rounded shadow-xl text-gray-700 font-bold  bg-amber-500" >Home</div>
                </Link>
                <Link  href="/about">
                     <div className="w-32 cursor-pointer hover:bg-orange-300  mx-4 flex justify-center items-center h-8 rounded shadow-xl text-gray-700 font-bold  bg-amber-500">About</div>
                </Link> 
                <Link  href="/project">
                  <div className="w-32 cursor-pointer hover:bg-orange-300  mx-4 flex justify-center items-center h-8 rounded shadow-xl text-gray-700 font-bold  bg-amber-500">Projects</div>
                </Link>
                <Link  href="/contact">
                    <div className="w-32 cursor-pointer hover:bg-orange-300  mx-4 flex justify-center items-center h-8 rounded shadow-xl text-gray-700 font-bold  bg-amber-500">Contact</div>
                </Link> 
        </div>:null}
        <div onClick={()=>setShow(!show)} className="lg:hidden  absolute top-2 right-5">
          {!show?<BsList className="text-3xl font-bold cursor-pointer text-gray-200"/>:<MdCancel className="text-3xl font-bold cursor-pointer text-gray-200"/>}
        </div>
    </div>
  )
}

export default Navbar