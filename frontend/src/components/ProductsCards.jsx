import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsCards({ img, title }) {
  const navigate = useNavigate();

  return (
    <div className="text-center border-2 border-black w-full sm:w-80 md:w-96 p-4 rounded-md shadow-lg transition-transform hover:scale-105">
      <div className="flex flex-col justify-start bg-blue-200 w-full rounded-md overflow-hidden">
        
        {/* Image Section */}
        <div
          className="relative flex justify-center w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        {/* Title Section */}
        <h1 className="font-semibold font-myFont text-xl sm:text-2xl p-2">{title}</h1>
      </div>

      {/* Explore More Link */}
      <a
        href="#"
        className="text-md opacity-50 underline hover:opacity-80"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/product`);
        }}
      >
        Explore More
      </a>
    </div>
  );
}

export default ProductsCards;
