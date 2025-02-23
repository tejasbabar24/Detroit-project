import React, { useState } from "react";
import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/detroitLogo.jpg";

function Header({ condition = true }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpenProducts, setDropdownOpenProducts] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: <MdHome size={25} />, link: "home", link2: "/", product: false },
    { name: "About Us", icon: <HiUserGroup size={25} />, link: "about", link2: "/", product: false },
    { name: "Products", icon: <MdOutlineProductionQuantityLimits size={25} />, link: "products", link2: "/", product: true },
    { name: "Contact Us", icon: <TiContacts size={25} />, link: "contact", link2: "/", product: false },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 h-20 shadow-lg text-xl bg-white z-50">
        <img src={logo} className="h-16 ml-4 sm:ml-16" alt="Company Logo" />

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row gap-8 items-center text-blue-900">
          {menuItems.map((item, index) =>
            condition ? (
              item.product ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpenProducts(true)}
                  onMouseLeave={() => setDropdownOpenProducts(false)}
                >
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={800}
                    className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                  >
                    {item.icon} {item.name}
                  </Link>

                  {/* Products Dropdown */}
                  {isDropdownOpenProducts && (
                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-b-md z-50">
                      <ul className="py-2 flex flex-col gap-2 text-sm">
                        <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer" onClick={() => navigate(`/category/Air Filter`)}>
                          <p>Air  Filter</p>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer" onClick={() => navigate(`/category/Fuel Filter`)}>
                          <p>Fuel  Filter</p>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer" onClick={() => navigate(`/category/Oil Filter`)} >
                          <p>Oil  Filter</p>
                        </li><li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer" onClick={() => navigate(`/category/Cabin Filter`)}>
                          <p>Cabin  Filter</p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                </Link>
              )
            ) : (

              item.product ?
              <button
                key={index}
                onClick={() => navigate(item.link2)}
                className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                onMouseEnter={() => setDropdownOpenProducts(true)}
                  onMouseLeave={() => setDropdownOpenProducts(false)}
              >
                {item.icon} {item.name}
              </button> 
              :
              <button
                key={index}
                onClick={() => navigate(item.link2)}
                className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
              >
                {item.icon} {item.name}
              </button> 
            )
          )}

          {/* Downloads Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setMobileDropdownOpen(true)}
            onMouseLeave={() => setMobileDropdownOpen(false)}
          >
            <span className="flex items-center gap-2 p-2 text-gray-700 hover:text-blue-900 transition-all cursor-pointer">
              <FaDownload size={25} /> Downloads
            </span>

            {isMobileDropdownOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-b-md z-50">
                <ul className="py-2 flex flex-col gap-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                    <a href="/files/sample1.pdf" download>File 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                    <a href="/files/sample2.pdf" download>File 2</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <IoMenuSharp
          size={30}
          className="sm:hidden cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={() => setDrawerOpen(true)}
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <IoCloseSharp size={25} onClick={() => setDrawerOpen(false)} className="cursor-pointer text-gray-600 hover:text-gray-900" />
          <div className="flex flex-col gap-6 mt-4">
            {menuItems.map((item, index) =>
              condition ? (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  onClick={() => setDrawerOpen(false)}
                  className="relative flex items-center gap-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.link2);
                    setDrawerOpen(false);
                  }}
                  className="relative flex items-center gap-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                </button>
              )
            )}

            {/* Downloads Link in Mobile Menu */}
            <div className="relative flex flex-col group">
              <span
                className="flex items-center gap-2 p-2 text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                <FaDownload size={25} /> Downloads
              </span>

              {isMobileDropdownOpen && (
                <div className="bg-white shadow-lg rounded-lg mt-2">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                      <a href="/files/sample1.pdf" download>File 1</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                      <a href="/files/sample2.pdf" download>File 2</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
