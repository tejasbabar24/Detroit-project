import React, { useState } from "react";
import {
  MdAddShoppingCart,
  MdOutlineDeleteSweep
} from "react-icons/md";

import { GiWhiteBook } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import logo from "../../Assets/detroitLogo.jpg";
import AddProduct from "../Products/AddProduct";
import RemoveProduct from "../Products/RemoveProduct";
import { logout } from "../../api/user";
import { signout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddRemoveBrochure from "../Products/AddRemoveBrochure";



function AdminPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const  [currForm , setCurrForm] = useState('add')
  const dispatch = useDispatch()  
  const navigate = useNavigate();

  const handleLogout = async () =>{
    const response = await logout()
    if(response.status === 200){
      dispatch(signout())
      navigate('/')
    }else{
      alert(response.data.message)
    }
  }

  const activePage = () =>{
    switch (currForm) {

      case 'remove' : return <RemoveProduct/>
      break;
      
      case 'brochure' :  return <AddRemoveBrochure/>
      break;

      default : return <AddProduct/>


    }
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen w-full flex flex-col ">
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
            { name: " Brochure", icon: <GiWhiteBook size={23} />, link: "brochure" },
            
            
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
            onClick={handleLogout}
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
              { name: "Add Product", icon: <MdAddShoppingCart size={26} />, link: "add" },
            { name: "Remove Product", icon: <MdOutlineDeleteSweep size={26} />, link: "remove" },
            { name: " Brochure", icon: <GiWhiteBook size={23} />, link: "brochure" },
            ].map((item, index) => (
              <button
              key={index}
              onClick={()=>{setCurrForm(item.link) , setDrawerOpen(false)}}
              className="relative flex items-center gap-2 p-2 group  hover:text-[#FAD02E] transition-colors"
            >
              {item.icon} {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FAD02E] transition-all duration-300 group-hover:w-full"></span>
            </button>
            ))}
          </nav>
          <button              
              className="relative flex items-center gap-2 p-2 group  hover:text-[#FAD02E] transition-colors mt-8"
            onClick={handleLogout}
            >
              <TbLogout2 size={36}/> Log Out
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FAD02E] transition-all duration-300 group-hover:w-full"></span>
          </button>  
        </div>
      </aside>

     { 
        activePage()
     } 

    </div>
  );
}

export default AdminPage;
