import React, { useState } from 'react'


  import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
  import logo from '../../Assets/detroitLogo.jpg'
import BrandInnerCardGrid from './BrandInnerCardGrid';
import { useParams } from 'react-router-dom';

function BrandsPage() {
  const {id} = useParams()
     
  return (
    <div className="bg-[#F5F7FA] h-screen w-full flex flex-col ">
    {/* Header Section */}
    <div className=" p-5 pb-0">
    <header className="flex items-center justify-start px-6 rounded-full py-4 h-20 shadow-lg bg-blue-900 text-white border border-gray-200  w-full">
     
      

      {/* Desktop Navigation */}
      <nav className=" flex gap-8 items-center justify-center w-full text-2xl  font-bold font-myFont">
        <h1>{id.toUpperCase()} Parts </h1>      
      </nav>
     
    </header>

    </div>


    <BrandInnerCardGrid id={id}/>
  </div>
  )
}

export default BrandsPage
