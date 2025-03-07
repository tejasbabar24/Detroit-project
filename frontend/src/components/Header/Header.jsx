import React, { useEffect, useState } from "react";
import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/detroitLogo.jpg";
import { getBrochures } from "../../api/brochure";

function Header({ condition = true }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpenProducts, setDropdownOpenProducts] = useState(false);
  const [isDropdownOpenProducts2, setDropdownOpenProducts2] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [brochures,setBrochures] = useState([])
  const navigate = useNavigate();

  const downloadFile = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);
  
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName || "downloaded_file"; // Set default filename if none provided
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  
      window.URL.revokeObjectURL(blobUrl); // Clean up memory
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  const menuItems = [
    { name: "Home", icon: <MdHome size={25} />, link: "home", link2: "/", product: false },
    { name: "About Us", icon: <HiUserGroup size={25} />, link: "about", link2: "/", product: false },
    { name: "Products", icon: <MdOutlineProductionQuantityLimits size={25} />, link: "products", link2: "/", product: true },
    { name: "Contact Us", icon: <TiContacts size={25} />, link: "contact", link2: "/", product: false },
  ];

  useEffect(()=>{
    const fetchBrochures = async ()=>{
      const response = await getBrochures();
      setBrochures(response.data.data.brochures);
    }
    fetchBrochures()
  },[])
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between  h-20 shadow-lg text-xl bg-white z-50">
        <img src={logo} className="h-16 ml-4 sm:ml-16" alt="Company Logo" />

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row gap-8 items-center pl-4 pr-4 h-full  text-blue-900">
          {menuItems.map((item, index) =>
            condition ? (
              item.product ? (
                <div
                  key={index}
                  className="relative h-full flex items-center"
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                  </Link>

                  {/* Products Dropdown */}
                  {isDropdownOpenProducts && (
                    <div className="absolute left-0 mt-64 w-44 bg-white shadow-lg rounded-b-md z-50">
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
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ) : (

              item.product ?
              <button
                key={index}
               
                className="relative flex items-center gap-2 p-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                onMouseEnter={() => setDropdownOpenProducts2(true)}
                onMouseLeave={() => setDropdownOpenProducts2(false)}
              >
                {item.icon} {item.name}

                {isDropdownOpenProducts2 && (
                    <div className="absolute left-0 mt-56 w-44 bg-white shadow-lg rounded-b-md z-50">
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
            className="relative group h-full"
            onMouseEnter={() => setMobileDropdownOpen(true)}
            onMouseLeave={() => setMobileDropdownOpen(false)}
          >
            <span className="flex items-center h-full gap-2 p-2 text-gray-700 hover:text-blue-900 transition-all cursor-pointer">
              <FaDownload size={25} /> Downloads
            </span>

            {isMobileDropdownOpen && (
              <div className="absolute left-0  w-44 bg-white bg-op shadow-lg rounded-b-md z-50">
                <ul className="py-2 flex flex-col gap-2 text-sm">
                  {
                    brochures.map((brochure)=>(
                      <li key={brochure._id} className="px-4 py-2 hover:bg-gray-100 border-l-4 border-red-500 cursor-pointer"
                      onClick={()=>{downloadFile(brochure.document , brochure.name)}}>
                          {brochure.name}
                      </li>
                    ))
                  }
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
                  onClick={() => setDrawerOpen(!isDrawerOpen)}
                  className="relative flex items-center gap-2 group text-gray-700 hover:text-blue-900 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.link2);
                    setDrawerOpen(!isDrawerOpen);
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
