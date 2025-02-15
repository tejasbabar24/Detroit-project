import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRupeeSign, FaTag, FaIndustry, FaIdBadge, FaShoppingCart } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

function DetailedProduct() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.items);
  const product = products.find((item) => item._id == id);

  return (
    <>
      <Header />
      <section className=" bg-gray-100 container mx-auto p-6 min-h-screen flex flex-col items-center">
        <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row w-full max-w-5xl gap-6">
          {/* Left Section - Product Image & Info */}
          <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={product.productImage}
              alt={product.name}
              className="rounded-lg w-full h-auto max-h-[400px] object-cover "
            />
            <div className=" grid grid-cols-2 mt-4 text-gray-700 space-y-2 text-lg">
              <p className="flex items-center gap-2 font-semibold"><FaRupeeSign className="text-green-500" /> Price: <span className="font-bold">₹{product.price}</span></p>
              <p className="flex items-center gap-2"><FaTag className="text-blue-500" /> Model: {product.model}</p>
              <p className="flex items-center gap-2"><FaIndustry className="text-purple-500" /> Brand: {product.brand}</p>
              <p className="flex items-center gap-2"><FaIdBadge className="text-red-500" /> Product ID: {product.productId}</p>
            </div>
          </div>
          
          {/* Right Section - Description */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
              {product.name}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mt-4 flex gap-2 items-start">
              <MdDescription className="text-gray-500 text-2xl" /> {product.description}
            </p>
            
            {/* Enquiry Button */}
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-blue-700 transition">
              <FaShoppingCart /> Enquiry Form
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailedProduct;
