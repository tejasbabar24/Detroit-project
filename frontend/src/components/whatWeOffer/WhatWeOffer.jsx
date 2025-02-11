import React from "react";
import imf1 from "../../Assets/infoimg1-Photoroom.png";

function WhatWeOffer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      {/* Main Container */}
      <div className=" flex-col flex sm:flex-row-reverse  w-full max-w-7xl">
        {/* Upper Side Logo (No Changes) */}
        <div className="flex justify-end">
          <div className="flex flex-col justify-center items-center rounded-b-2xl w-56 h-36 bg-blue-700 text-white mr-8 shadow-lg">
            <span className="text-5xl font-myFont font-bold">Detroit</span>
            <span className="text-2xl">Automotive</span>
          </div>
        </div>

        {/* Extra Information Section */}
        <div className="mt-16 space-y-28">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="px-6 md:px-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
                LEADERS IN AUTOMOTIVE FILTRATION TECHNOLOGY
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                • Thirteen years ago, the foundation was laid for Detroit
                Automotive. Since then, we have been a **trusted** provider of
                high-quality **filtration solutions**.  
                <br /> <br />
                • Our products ensure **maximum engine protection** and a **longer lifespan** for vehicles.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                src={imf1}
                alt="Automotive Filtration"
                className="w-full max-w-lg object-cover"
              />
            </div>
          </div>

          {/* Section 2 (Image First, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center">
              <img
                src={imf1}
                alt="Filtration Solution"
                className="w-full max-w-lg object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="px-6 md:px-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
                WE PROVIDE ULTIMATE FILTRATION SOLUTION
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                • Detroit offers **premium-quality filters** including **oil,
                air, fuel, and cabin filters**, covering **95% of vehicles**.  
                <br /> <br />
                • Our facility in **Trans Delhi Signature City** ensures **flawless quality** using **modern technology**.  
                <br /> <br />
                • Our commitment is to **deliver excellence** through **advanced technology, superior materials, and skilled craftsmanship**.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
