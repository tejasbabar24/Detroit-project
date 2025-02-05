import React, { useState } from 'react'
import airFilter from "../../Assets/airFilter.jpg";
import cabinFilter from "../../Assets/cabinFilter.webp";
import fuelFilter from "../../Assets/fuelFilter.jpg";
import oilFilter from "../../Assets/oilFilter.jpg";

import { IoIosArrowForward ,IoIosSquare} from "react-icons/io";
import ProductsCards from './ProductsCards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DownloadBrochure from './DownloadBrochure';
import ContactLinks from './ContactLinks';


function ProductsPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false); // State for right drawer
    const activeCategory = 'Air Filters'
    let isScreenSmall = window.innerWidth;


return (
    <>
    <Header/>
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
        <div className=' flex sm:flex-row flex-col   ' >
            {/* left side */}
            <div  className=' flex flex-col w-full sm:w-1/3 border-r-2 border-gray-200  justify-start items-center p-8 sm:p-12 gap-6 ' >
                <div className=' bg-blue-100 rounded-lg w-full justify-center font-myFont items-center text-center gap-8 sm:p-12 p-2 sm:text-xl '>
                   <span className=' text-3xl font-myFont font-semibold border-b-2 border-black' >All Products</span> 
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Air Fliters</span>  <IoIosArrowForward className=' ml-28'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Oil Fliters</span>  <IoIosArrowForward className=' ml-28'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Fuel Fliters</span>  <IoIosArrowForward className=' ml-24'/> </p>
                    <p className='flex items-center justify-start h-12  hover:bg-blue-200 ' > <span className='flex items-center gap-2 sm:ml-12'> <IoIosSquare size={12} color='green'/> Cabin Fliters</span>  <IoIosArrowForward className=' ml-20'/> </p>

                </div>
                {
                    isScreenSmall < 640 ? null : ( <><ContactLinks  /> <DownloadBrochure/> </>) 
                }
                
            </div>
            {/* right side  */}
            
            <div className="grid sm:grid-cols-1  grid-cols-1 md:grid-cols-2 gap-4 p-6 place-items-center  sm:ml-12">
                <ProductsCards title="product 1" img={airFilter} />
                <ProductsCards title="product 2" img={oilFilter} />
                <ProductsCards title="product 3" img={cabinFilter} />
                <ProductsCards title="product 4" img={fuelFilter} />
                <ProductsCards title="product 5" img={fuelFilter} />
                <ProductsCards title="product 6" img={fuelFilter} />
                <ProductsCards title="product 7" img={fuelFilter} />

            </div>
            {
                    isScreenSmall < 640 ? <div className=' p-6 '><DownloadBrochure/></div>   :  null  
            }
                
            
        </div>
    </div>
    
    <Footer/>
    </>
)
}

export default ProductsPage
