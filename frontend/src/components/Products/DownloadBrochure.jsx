import React from 'react'
import {  MdSimCardDownload  } from "react-icons/md";
import brochure from '../../Assets/downloadBrochure.png'


function DownloadBrochure() {
  return (
    <div className=' border-2 min-w-full flex justify-center items-center flex-col'>
    <div className=' flex flex-col gap-2 p-4'>
        <h1 className=' text-2xl font-bold '>Download Brochure </h1>
        <p className=' opacity-80 '>Please download our document to see specific data of the aservice and how we work.</p>
    </div>
    
    <img src={brochure} alt="" className=' h-full w-full' />
    <div className=' bg-green-500 w-full flex items-center justify-center text-white text-xl font-bold h-14 '>
            <button>Download  </button>  <MdSimCardDownload className=' ml-2 text-3xl text-red-400' />
    </div>
    
</div>
  )
}

export default DownloadBrochure
