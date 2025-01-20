    import React from 'react'
    import airFilter  from '../Assets/airFilter.jpg'


    function ProductsCards() {
    return (
        <div className=' text-center border-2 border-black w-96 h-full p-4 rounded-sm ' >
          <div className=' flex flex-col justify-start text-center bg-blue-200 w-full  ' >
            <div className="relative flex justify-center h-full  w-full bg-cover bg-center p-32"
                        style={{
                        backgroundImage: `url(${airFilter})`,                       
            }} >
            </div>
            <h1 className='  font-semibold  font-myFont text-2xl p-2'> Product 1 </h1>
          </div>
          
          <a href="" className='text-lg'> Explore More </a>

        </div>
    )
    }

    export default ProductsCards
