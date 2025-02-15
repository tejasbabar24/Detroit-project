import React from "react";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ image, brandLogo, product, discount ,name}) => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white rounded-xl hover:cursor-pointer shadow-lg w-full max-w-xs"
    onClick={() => navigate(`/brands/${name}`)}
    >
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}% off
        </span>
      )}

      {/* Product Image */}
      <div className="flex justify-center">
        <img src={image} alt={product} className="w-48 h-48 object-contain" />
      </div>

      {/* Brand Logo & Product Name */}
      <div className=" flex flex-col mt-4 border-t justify-center items-center  text-center bg-gray-200 h-36 ">
        <img src={brandLogo} alt="Brand Logo" className="w-24 mx-auto" />
        <p className="text-gray-700 font-medium">{product}</p>
      </div>
    </div>  
  );
};

export default BrandCard;
