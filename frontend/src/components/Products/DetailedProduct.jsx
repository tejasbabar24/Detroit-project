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
  console.log(product);
  

  return (
    <>
      <Header condition={false} />
      <section className=" bg-gray-100 container mx-auto p-6  flex flex-col items-center mt-20">
        <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row  w-full max-w-5xl gap-6">
          {/* Left Section - Product Image & Info */}
          <div className="md:w-1/2 bg-gray-100 p-2 rounded-lg shadow-md">
            <img
              src={product.productImage}
              alt={product.name}
              className="rounded-lg w-full h-auto max-h-[500px] object-cover "
            />
            
          </div>
          
          {/* Right Section - Description */}
          <div className="md:w-1/2 flex flex-col justify-evenly ">
            <div className=" w-full flex flex-row items-center border-b-2 p-6">
              <p className=" w-full text-2xl text-blue-900 hover:text-blue-950" >{product.name}</p>
              <div className=" bg-red-500 text-xl text-white p-2">₹{product.price}</div>
            </div>

            <div>
              <p className=" w-full  bg-blue-50 p-2 border-b-2 border-opacity-50"><span className=" font-semibold text-blue-900">Product Part Number : </span>{product.productId}</p>
              <p className=" w-full  bg-gray-50 p-2 border-b-2 border-opacity-50"><span className=" font-semibold text-blue-900">Compatible With : </span>{product.brand}</p>
              <p className=" w-full  bg-blue-50 p-2 border-b-2 border-opacity-50"><span className=" font-semibold text-blue-900">Vehicle Type : </span>{product.vehicleType}</p>
              <p className=" w-full  bg-gray-50  p-2 border-b-2 border-opacity-50"><span className=" font-semibold text-blue-900">Product Type : </span>{product.categoryName}</p>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-blue-700 transition">
              <FaShoppingCart /> Buy Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailedProduct;
