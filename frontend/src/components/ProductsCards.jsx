    import React from 'react'
    import airFilter  from '../Assets/airFilter.jpg'
import { useNavigate } from 'react-router-dom'


    function ProductsCards( { img , title }  ) {

      const navigate =  useNavigate();

    return (
        <div className=' text-center border-2 border-black w-96 h-full p-4 rounded-sm ' >
          <div className=' flex flex-col justify-start text-center bg-blue-200 w-full  ' >
            <div className="relative flex justify-center h-full  w-full bg-cover bg-center p-32"
                        style={{
                        backgroundImage: `url(${img})`,                       
            }} >
            </div>
            <h1 className='  font-semibold  font-myFont text-2xl p-2'> {title} </h1>
          </div>
          
          <a href="" className='text-md text-center opacity-50 underline hover:opacity-80 ' onClick={() => navigate(`/product`)}> Explore More </a>
        </div>
    )
    }

    export default ProductsCards
