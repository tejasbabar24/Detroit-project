  import React, { useState } from "react";
  import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
  import { TiContacts } from "react-icons/ti";
  import { HiUserGroup } from "react-icons/hi2";
  import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
  import { FaDownload } from "react-icons/fa";
  import { Link } from "react-scroll"; // For smooth scrolling
  import { useNavigate } from "react-router-dom";
  import logo from "../../Assets/detroitLogo.jpg";

  function Header({ condition = true }) {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
      { name: "Home", icon: <MdHome size={25} />, link: "home", link2: "/" },
      { name: "Products", icon: <MdOutlineProductionQuantityLimits size={25} />, link: "products", link2: "/" },
      { name: "About Us", icon: <HiUserGroup size={25} />, link: "about", link2: "/" },
      { name: "Contact Us", icon: <TiContacts size={25} />, link: "contact", link2: "/" },
    ];

    return (
      <>
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 h-20 shadow-lg text-xl bg-white z-50">
          <img src={logo} className="h-16 ml-16" alt="Company Logo" />

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-row gap-8 items-center text-blue-900">
            {menuItems.map((item, index) =>
              condition ? (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => navigate(item.link2)}
                  className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}

            {/* Downloads Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="flex items-center gap-2 p-2 text-gray-700 hover:text-blue-900 transition-all cursor-pointer">
                <FaDownload size={25} /> Downloads
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-44  bg-white shadow-lg rounded-b-md z-50 transition-all duration-300 ${
                  isDropdownOpen ? "opacity-100 visible translate-y-2 -translate-x-4  " : "opacity-0 invisible translate-y-2"
                }`}
              >
                <ul className="py-2 flex flex-col gap-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                    <a href="/files/sample1.pdf" download>File 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                    <a href="/files/sample2.pdf" download>File 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <IoMenuSharp size={30} onClick={() => setDrawerOpen(true)} className="cursor-pointer" />
          </div>
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}

              {/* Downloads Link in Mobile Menu */}
              <div
                className="relative flex flex-col group"
                onMouseEnter={() => setMobileDropdownOpen(true)}
                onMouseLeave={() => setMobileDropdownOpen(false)}
              >
                <span className="flex items-center gap-2 p-2 text-gray-700 hover:text-blue-900 transition-all cursor-pointer">
                  <FaDownload size={25} /> Downloads
                </span>
                <div className={`bg-white shadow-lg rounded-lg mt-2 transition-all duration-300 ${
                  isMobileDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                      <a href="/files/sample1.pdf" download>File 1</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer">
                      <a href="/files/sample2.pdf" download>File 2</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }

  export default Header;
