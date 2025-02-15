import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import LogoPng from '../../Assets/LogoPng.png'
import { Link } from "react-scroll"; // Import smooth scrolling
import { PiPhoneCallFill } from "react-icons/pi";
import { FaMapLocationDot  , FaSquareFacebook, FaSquareInstagram, FaLinkedin , FaSquareYoutube} from "react-icons/fa6";
import AdminLogin from '../AdminLogin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Footer() {
  let isScreenSmall = window.innerWidth;
  const [modalOpen, setModalOpen] = useState(false); 
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();

  return (
    <section>
    <footer className=" bg-black  " >
       {modalOpen && (
              <AdminLogin
                onClose={() => setModalOpen(false)}
              />
        )}
    <div className=" p-10 pt-0  ">
      <div className=" flex flex-col gap-3 sm:gap-0 sm:flex-row  border-t-8 border-green-500 pt-12 p-2 justify-evenly border-b-2 border-b-gray-200 border-b-opacity-50 ">
          <div className="  sm:p-4 text-white  flex gap-4 sm:border-r-2 justify-center items-center " ><PiPhoneCallFill size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110" /> 
              <div className=" flex flex-col gap-2 ">
               <span className="text-sm opacity-50 sm:text-xl" >Call  Us </span>
               <span className="text-sm sm:text-2xl font-bold ">+91-129-4281000 </span>
              </div> 
          </div>
          <div className="  sm:p-4 text-white  flex gap-4 sm:border-r-2 justify-center items-center " ><MdEmail size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110" /> 
              <div className=" flex flex-col gap-2 ">
               <span className=" text-sm opacity-50 sm:text-xl" >Need  Support </span>
               <span className=" text-sm sm:text-2xl font-bold "> Info@detroitautomotives.com </span>
              </div> 
          </div>
          <div className=" sm:p-4 text-white  flex gap-4  justify-center items-center " ><FaMapLocationDot size={isScreenSmall>640 ? 64:32} className="opacity-50 transition-transform duration-300 hover:scale-110 " /> 
              <div className=" flex flex-col gap-2 ">
               <span className="text-sm opacity-50 sm:text-xl" >Head Office </span>
               <span className="text-sm sm:text-2xl font-bold ">+91-129-4281000 </span>
              </div> 
          </div>
          <div></div>
          <div></div>
      </div>
      <div className=' flex sm:flex-row  flex-col justify-evenly  gap-6 sm:gap-20 items-center' >
        {/* logo and social media icons  */}
        <div className="flex sm:flex-col  gap-4">
          {/* Logo */}
          <img
            src={LogoPng}
            className="h-20 w-32 sm:h-36 sm:w-64 transition-transform duration-300 hover:scale-105"
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
      <div className=' flex flex-col justify-center items-center gap-4 text-white'>
        <h1 className=' opacity-90 text-2xl' >Quick Links</h1>
        <nav className='grid grid-cols-2 gap-4  text-xl'>
          <Link to='home'
                smooth={true}
                duration={800} className=' opacity-50 hover:opacity-100 hover:cursor-pointer'>Home</Link>
          <Link to='products'
                smooth={true}
                duration={800} className=' opacity-50 hover:opacity-100 hover:cursor-pointer'>Products</Link>
          <Link to='brands'
                smooth={true}
                duration={800} className=' opacity-50 hover:opacity-100 hover:cursor-pointer'>Brands</Link>
          <Link to='about'
                smooth={true}
                duration={800} className=' opacity-50 hover:opacity-100 hover:cursor-pointer'>About Us</Link>
          <Link to='contact'
                smooth={true}
                duration={800} className=' opacity-50 hover:opacity-100 hover:cursor-pointer'>Contact</Link>
        </nav>
      </div>
      <div className=' flex flex-col gap-2 items-center text-white '>
        <p href="" className=' opacity-50 hover:opacity-100 text-start' onClick={() => navigate(`/category/Cabin Filter`)} > Cabin Filters </p>
        <p href="" className=' opacity-50 hover:opacity-100 text-start' onClick={() => navigate(`/category/Fuel Filter`)} > Fuel Filters </p>
        <p href="" className=' opacity-50 hover:opacity-100 text-start' onClick={() => navigate(`/category/Oil Filter`)} > Oil Filters </p>
        <p href="" className=' opacity-50 hover:opacity-100 text-start' onClick={() => navigate(`/category/Air Filter`)} > Air Filters </p>
      </div>
        <div className=''>
          {
            authStatus === true ? (
              <button className="flex flex-row gap-2  text-white text-xl  hover:text-red-500 opacity-50" onClick={()=>navigate('/AdminPanel')}> Admin Panel</button>  
            ) : (

              <button className="flex flex-row gap-2  text-white text-xl  hover:text-red-500 opacity-50" onClick={()=>setModalOpen(true)}> Admin Login</button>  
            )
          }
        </div>
      </div>
    </div>
  </footer>
  </section>
  )
}

export default Footer
