import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsCards({ product }) {
  const navigate = useNavigate();  

  return (
    <div className="text-center border-2 border-black w-full sm:w-80 border-opacity-50  rounded-sm shadow-lg transition-transform ">
      <div className="flex flex-col justify-start w-full  overflow-hidden">
        
        {/* Image Section */}
        <div
          className="relative flex justify-center w-full h-52 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.productImage})` }}
        ></div>

        {/* Title Section */}
        <h1 className="font-bold text-blue-900  text-xl sm:text-xl p-2 ">{product.name}</h1>
        <div className=' text-start text-lg pl-2  '>
           <p> <span className=' font-bold  '> Part Number : </span>  {product.productId}</p>
           <p> <span className=' font-bold  '> Vehicle Type : </span>  {product.vehicleType}</p>
           <p> <span className=' font-bold  '> Compatible with : </span>  {product.brand}</p>
           <p> <span className=' font-bold  '> Price : </span> ₹ {product.price} </p>
           
        </div>

      </div>

      {/* Explore More Link */}
      <a
        href="#"
        className="text-md opacity-50 underline hover:opacity-80"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/product/${product._id}`);
        }}
      >
        Explore More
      </a>
    </div>
  );
}

export default ProductsCards;
