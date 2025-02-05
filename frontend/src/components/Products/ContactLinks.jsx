import React from 'react'
import { MdEmail   } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";

function ContactLinks() {
  return (
    <div className=' flex flex-col justify-center items-center bg-black text-white min-w-full rounded-lg p-6 gap-6'>
                    <div className=' flex flex-col gap-2'>
                        <h1 className=' text-2xl font-bold '>How can we help </h1>
                        <p className=' opacity-80 '>If you need any help , please feel free to contact us</p>
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className=" sm:p-4 text-white  flex gap-4  justify-start items-center border-b-2 border-opacity-50 " ><TiContacts size={44} className=" text-green-500 opacity-80 transition-transform duration-300 hover:scale-110 " /> 
                                      <div gap-2 className=" flex flex-col gap-1 ">
                                       <span className="text-sm opacity-70 sm:text-lg" >Call us  </span>
                                       <span className="text-sm sm:text-xl font-bold ">+91-129-4281000 </span>
                                      </div> 
                        </div>
                        <div className=" sm:p-4 text-white  flex gap-4  justify-start items-center border-b-2 border-opacity-50 " ><MdEmail size={44} className=" text-green-500 opacity-80 transition-transform duration-300 hover:scale-110 " /> 
                                      <div gap-2 className=" flex flex-col gap-1 ">
                                       <span className="text-sm opacity-70 sm:text-lg" >Mail us  </span>
                                       <span className="text-sm sm:text-xl font-bold ">Info@detroitautomotives.com</span>
                                      </div> 
                        </div><div className=" sm:p-4 text-white  flex gap-4  justify-start items-center border-b-2 border-opacity-50 " ><FaMapLocationDot size={44} className=" text-green-500 opacity-80 transition-transform duration-300 hover:scale-110 " /> 
                                      <div gap-2 className=" flex flex-col gap-1 ">
                                       <span className="text-sm opacity-70 sm:text-lg" >Meet us  </span>
                                       <span className="text-sm sm:text-xl font-bold ">Our location </span>
                                      </div> 
                        </div>
                    </div>
    </div>
  )
}

export default ContactLinks
