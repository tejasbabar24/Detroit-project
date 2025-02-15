import React from "react";

const BrandInnerCard = ( { product } ) => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border relative">
      {/* Top Blue Header */}
      <div className="bg-blue-900 text-white px-4 py-2 text-lg font-bold">
        {product.productId}
      </div>

      <div className="p-4 flex items-center justify-center gap-4">

       {/* Fuel Filter Icon & Label */}
       <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex justify-center items-center border-2 border-yellow-500 rounded-full">
              <span className="text-yellow-600 font-bold text-sm">🛢️</span>
            </div>
            <span className="text-yellow-600 font-semibold text-sm">
              {product.category}
            </span>
          </div>
        {/* Left Side - Icon and Details */}
        <div className="flex flex-col">

          
           {/* Vehicle brand */}
           <div className=" flex gap-2 items-center mt-3">
            <p className="text-gray-600 font-semibold text-sm"> Brand : {product.brand} </p>
          </div>

          {/* Vehicle Model */}
          <div className=" flex gap-2 items-center mt-3">
            <p className="text-gray-600 font-semibold text-sm"> MODEL : {product.model} </p>
          </div>

          {/* Price */}
          <div className="mt-3">
            <p className="text-black font-bold">
              <span className="text-black font-bold">M.R.P : {product.price} </span>
              
            </p>
          </div>
        </div>

        {/* Right Side - Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.productImage}  // Replace with actual path
            alt="Fuel Filter"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* Yellow Bottom Border */}
      <div className="h-1 bg-yellow-500 w-full mt-2"></div>
    </div>
  );
};

export default BrandInnerCard;
