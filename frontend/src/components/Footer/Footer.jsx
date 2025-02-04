import React from 'react'
import { MdEmail } from "react-icons/md";
import LogoPng from '../../Assets/LogoPng.png'
import { RiAdminFill } from "react-icons/ri";

import { PiPhoneCallFill } from "react-icons/pi";
import { FaMapLocationDot  , FaSquareFacebook, FaSquareInstagram, FaLinkedin , FaSquareYoutube} from "react-icons/fa6";


function Footer({setModalOpen}) {
  let isScreenSmall = window.innerWidth;

  return (
    <section>
    <footer className=" bg-black h-[500px] " >
    <div className=" p-10 pt-0  ">
      <div className=" flex flex-col gap-3 sm:gap-0 sm:flex-row  border-t-8 border-green-500 pt-12 p-2 justify-evenly border-b-2 border-b-gray-200 border-b-opacity-50 ">
          <div className="  sm:p-4 text-white  flex gap-4 sm:border-r-2 justify-center items-center " ><PiPhoneCallFill size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110" /> 
              <div gap-2 className=" flex flex-col gap-2 ">
               <span className="text-sm opacity-50 sm:text-xl" >Call  Us </span>
               <span className="text-sm sm:text-2xl font-bold ">+91-129-4281000 </span>
              </div> 
          </div>
          <div className="  sm:p-4 text-white  flex gap-4 sm:border-r-2 justify-center items-center " ><MdEmail size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110" /> 
              <div gap-2 className=" flex flex-col gap-2 ">
               <span className=" text-sm opacity-50 sm:text-xl" >Need  Support </span>
               <span className=" text-sm sm:text-2xl font-bold "> detroit@gmail.com </span>
              </div> 
          </div>
          <div className=" sm:p-4 text-white  flex gap-4  justify-center items-center " ><FaMapLocationDot size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110 " /> 
              <div gap-2 className=" flex flex-col gap-2 ">
               <span className="text-sm opacity-50 sm:text-xl" >Head Office </span>
               <span className="text-sm sm:text-2xl font-bold ">+91-129-4281000 </span>
              </div> 
          </div>
          <div></div>
          <div></div>
      </div>
      <div className=' flex sm:flex-row  flex-col justify-start gap-10 items-center' >
        {/* logo and social media icons  */}
        <div className="flex sm:flex-col  gap-4">
          {/* Logo */}
          <img
            src={LogoPng}
            className="h-16 w-32 sm:h-36 sm:w-64 transition-transform duration-300 hover:scale-105"
            alt="Logo"
          />

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start items-center gap-4 opacity-70 text-gray-400">
            <a
              href="#"
              className="transition-transform duration-300 hover:text-blue-500 hover:-translate-y-2"
            >
              <FaSquareFacebook size={isScreenSmall>640 ? 42 :22 } />
            </a>
            <a
              href="#"
              className="transition-transform duration-300 hover:text-pink-500 hover:-translate-y-2"
            >
              <FaSquareInstagram size={isScreenSmall>640 ? 42 :22} />
            </a>
            <a
              href="#"
              className="transition-transform duration-300 hover:text-blue-500 hover:-translate-y-2"
            >
              <FaLinkedin size={isScreenSmall>640 ? 42 :22} />
            </a>
            <a
              href="#"
              className="transition-transform duration-300 hover:text-red-600 hover:-translate-y-2"
            >
              <FaSquareYoutube size={isScreenSmall>640 ? 42 :22} />
            </a>
          </div>          

      </div>
        <div className=''>
         <button className="flex flex-row gap-2  text-white text-xl  hover:text-red-500 opacity-50" onClick={()=>setModalOpen(true)}> Admin Login</button>  
        </div>
      </div>
    </div>
  </footer>
  </section>
  )
}

export default Footer
