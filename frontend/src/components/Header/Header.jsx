import React, { useState } from 'react';
import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { Link } from "react-scroll"; // Import smooth scrolling
import logo from '../../Assets/detroitLogo.jpg';
import { useNavigate } from 'react-router-dom';

function Header( {condition = true } ) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
   // Change this dynamically based on your logic

  const menuItems = [
    { name: "Home", icon: <MdHome size={30} />, link: "home", link2: "/" },
    { name: "Products", icon: <MdOutlineProductionQuantityLimits size={30} />, link: "products", link2: "/" },
    { name: "About Us", icon: <HiUserGroup size={30} />, link: "about", link2: "/" },
    { name: "Contact Us", icon: <TiContacts size={30} />, link: "contact", link2: "/" }
  ];

  return (
    <>
      <header className="flex items-center justify-between p-4 h-20 shadow-lg text-xl bg-white">
        <img src={logo} className="h-16 ml-16" alt="Company Logo" />

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row gap-10 items-center text-blue-900">
          {menuItems.map((item, index) => (
            condition ? (
              <Link
                key={index}
                to={item.link}
                smooth={true}
                duration={800}
                className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {item.icon} {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => navigate(item.link2)}
                className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {item.icon} {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <IoMenuSharp size={30} onClick={() => setDrawerOpen(true)} className="cursor-pointer" />
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <IoCloseSharp size={25} onClick={() => setDrawerOpen(false)} className="cursor-pointer text-gray-600 hover:text-gray-900" />
          <div className="flex flex-col gap-6 mt-4">
            {menuItems.map((item, index) => (
              condition ? (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  onClick={() => setDrawerOpen(false)}
                  className="relative flex items-center gap-2 group text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
                >
                  {item.icon} {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.link2);
                    setDrawerOpen(false);
                  }}
                  className="relative flex items-center gap-2 group text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
                >
                  {item.icon} {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
