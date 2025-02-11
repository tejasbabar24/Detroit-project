import React, { useState } from "react";
import airFilter from "../../Assets/airFilter.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailedProduct() {
  const {id} = useParams()
  const products = useSelector(state => state.product.items)
  const product = products.find((item) => item._id == id)
  
  
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto p-4 min-h-screen">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center">
            
            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={product.productImage}
                  alt="Air Filter"
                  className="rounded-lg w-full h-auto max-h-[500px] md:max-h-[600px] object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="md:w-1/2">
                
                {/* Title Section */}
                <h1 className="text-4xl font-myFont font-bold mb-4 text-center md:text-left">
                  {product.name}
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>


                {/* Enquiry Button */}
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Enquiry Form
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailedProduct;
