import React, { useState } from 'react'
import { MdHome, MdOutlineProductionQuantityLimits ,MdEmail } from "react-icons/md";
import logo from '../../Assets/detroitLogo.jpg'

import { TiContacts } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import {
  IoLocation,
  IoNavigate,
  IoCloseSharp,
  IoMenuSharp,
} from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaMapLocationDot  , FaSquareFacebook, FaSquareInstagram, FaLinkedin , FaSquareYoutube} from "react-icons/fa6";




function Header() {
      const [isDrawerOpen, setDrawerOpen] =useState(false); // State for right drawer
    
  return (
    <>
    <header className="flex items-center justify-between p-4 h-20 shadow-lg font-myFont text-xl">
              <img src={logo} className="h-16 ml-16" alt="Company Logo" />
              <div className="hidden sm:flex flex-row gap-16 items-center  text-blue-900  ">
                <a
                  href="#home"
                  className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                >
                  <MdHome size={30} /> Home
                </a>
                <a
                  href="#products"
                  className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                >
                  <MdOutlineProductionQuantityLimits size={30} /> Products
                </a>
                <a
                  href="#about"
                  className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                >
                  <HiUserGroup size={30} /> About Us
                </a>
                <a
                  href="#contact"
                  className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                >
                  <TiContacts size={30} /> Contact Us
                </a>
    
              </div>
              <div className=" sm:hidden">
                <IoMenuSharp onClick={() => setDrawerOpen(!isDrawerOpen)} />
              </div>
            </header>
    
            <div
              className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-4">
                <IoCloseSharp
                  className="text-[#4A5C6A] hover:text-[#253745] cursor-pointer"
                  size={25}
                  onClick={() => setDrawerOpen(!isDrawerOpen)}
                />
    
                <div className="flex justify-center flex-col items-center mt-4 relative">
                  <div className="flex flex-col gap-8 justify-start items-start pr-16 text-blue-900  ">
                    <a
                      href="#home"
                      className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                    >
                      <MdHome size={30} /> Home
                    </a>
                    <a
                      href="#products"
                      className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                    >
                      <MdOutlineProductionQuantityLimits size={30} /> Products
                    </a>
                    <a
                      href="#about"
                      className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                    >
                      <HiUserGroup size={30} /> About Us
                    </a>
                    <a
                      href="#contact"
                      className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500"
                    >
                      <TiContacts size={30} /> Contact Us
                    </a>
                  </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Header
