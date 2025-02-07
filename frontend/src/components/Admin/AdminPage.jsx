import React, { useState } from "react";
import {
  MdHome,
  MdOutlineProductionQuantityLimits,
  MdAddShoppingCart,
  MdOutlineDeleteSweep
} from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import { TbLogout2 } from "react-icons/tb";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import logo from "../../Assets/detroitLogo.jpg";
import AddProduct from "../Products/AddProduct";
import RemoveProduct from "../Products/RemoveProduct";



function AdminPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const  [currForm , setCurrForm] = useState('add')

  return (
    <div className="bg-[#F5F7FA] h-screen w-full flex flex-col ">
      {/* Header Section */}
      <div className=" p-5 pb-0">
      <header className="flex items-center justify-between px-6 rounded-full py-4 h-20 shadow-lg bg-[#008080] text-white border border-gray-200 w-full">
        {/* Logo */}
        <img
          src={logo}
          className="h-14 w-14 rounded-full shadow-md border border-white"
          alt="Company Logo"
        />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 items-center text-lg font-semibold">
          {[
            { name: "Add Product", icon: <MdAddShoppingCart size={26} />, link: "add" },
            { name: "Remove Product", icon: <MdOutlineDeleteSweep size={26} />, link: "remove" },
            
            
          ].map((item, index) => (
            <button
              key={index}
              onClick={()=>setCurrForm(item.link)}
              className="relative flex items-center gap-2 p-2 group text-white hover:text-[#FAD02E] transition-colors"
            >
              {item.icon} {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FAD02E] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          <button              
              className="relative flex items-center gap-2 p-2 group text-white hover:text-[#FAD02E] transition-colors"
            >
              <TbLogout2 size={36}/>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FAD02E] transition-all duration-300 group-hover:w-full"></span>
          </button>          
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <IoMenuSharp
            size={32}
            onClick={() => setDrawerOpen(true)}
            className="cursor-pointer text-white hover:scale-110 transition-transform"
          />
        </div>
      </header>

      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl rounded-l-2xl transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Menu</span>
            <IoCloseSharp
              size={28}
              onClick={() => setDrawerOpen(false)}
              className="cursor-pointer text-gray-600 hover:text-red-500 transition"
            />
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-5">
            {[
              { name: "Home", icon: <MdHome size={26} />, link: "#home" },
              { name: "Products", icon: <MdOutlineProductionQuantityLimits size={26} />, link: "#products" },
              { name: "About Us", icon: <HiUserGroup size={26} />, link: "#about" },
              { name: "Contact Us", icon: <TiContacts size={26} />, link: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#008080] hover:text-white transition duration-300"
              >
                {item.icon} {item.name}
              </a>
            ))}
          </nav>
        </div>
      </aside>

     { 
      currForm == 'remove' ? <RemoveProduct/> :<AddProduct/>
     } 

    </div>
  );
}

export default AdminPage;
