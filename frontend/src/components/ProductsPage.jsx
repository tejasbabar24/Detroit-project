import React, { useState } from 'react'
import airFilter from '../Assets/airFilter.jpg'
import { IoIosArrowForward ,IoIosSquare} from "react-icons/io";
import ProductsCards from './ProductsCards';



function ProductsPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false); // State for right drawer
        const activeCategory = 'Air Filters'

return (
    <div>
        {/* Banner  section */}
        <div
            className="relative flex justify-center items-end h-96 w-full bg-cover bg-center p-32"
            style={{
            backgroundImage: `url(${airFilter})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative font-myFont2 text-white text-3xl sm:text-7xl border-b-2 w-full text-start pb-8">
            {activeCategory}
            </div>
        </div>
        
        {/* Product  Cards section     */}
        <div className=' flex sm:flex-row flex-col  ' >
            {/* left side */}
            <div  className=' flex flex-col w-full sm:w-1/3 border-r-2 border-gray-200  justify-center items-center p-8 sm:p-12  ' >
                <div className=' bg-blue-100 rounded-lg w-full justify-center font-myFont items-center text-center gap-8 sm:p-12 p-2 sm:text-xl '>
                   <span className=' text-3xl font-myFont font-semibold border-b-2 border-black' >All Products</span> 
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Air Fliters</span>  <IoIosArrowForward className=' ml-28'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Oil Fliters</span>  <IoIosArrowForward className=' ml-28'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Fuel Fliters</span>  <IoIosArrowForward className=' ml-24'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Cabin Fliters</span>  <IoIosArrowForward className=' ml-20'/> </p>

                </div>
            </div>
            {/* right side  */}
            <div className= ' p-6'>
                <ProductsCards/>
            </div>
        </div>
    </div>
    

)
}

export default ProductsPage
