import React, { useState } from "react";
import containerLogo from "../../Assets/containerImg.png";
import filter3 from "../../Assets/filter3.jpg";
import { IoLocation } from "react-icons/io5";

function About() {
  let isScreenSmall = window.innerWidth;
  const [isExpanded, setIsExpanded] = useState( isScreenSmall > 640 ? true : false );

  return (
    <section className="min-h-screen h-auto py-10 bg-gray-100" id="about">
      <div className="flex flex-col lg:flex-row justify-center items-center relative bg-center px-6">
        {/* Left Side */}
        <div className="relative flex items-center w-full lg:w-1/2 p-4">
          <div className="absolute z-10 -left-5 sm:-left-16 top-1/2 transform -translate-y-1/2 mt-10 sm:mt-16">
            <div className="flex flex-col justify-center items-center w-48 sm:w-64 h-52 p-4 gap-4 border-2 bg-white shadow-lg rounded-lg">
              <img src={containerLogo} alt="Icon" className="h-12" />
              <p className="text-lg font-semibold">Quality Assurance</p>
              <p className="text-sm opacity-70 text-center">
                "Delivering premium automotive filtration solutions with
                cutting-edge technology."
              </p>
            </div>
          </div>
          <img
            src={filter3}
            alt="Portrait"
            className="rounded-lg shadow-lg w-full h-[500px] object-cover" // Increased height of image
          />
        </div>

        {/* Right Side */}
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 px-4 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="w-16 h-2.5 rounded-lg bg-red-500"></div>
            <p className="text-2xl font-bold">About Us</p>
            <div className="w-12 h-2.5 rounded-lg bg-blue-500"></div>
          </div>

          <p className="text-2xl lg:text-3xl font-bold leading-snug text-center lg:text-left">
            Welcome to Detroit Automotives!
          </p>

          <p className="leading-relaxed opacity-70 text-sm lg:text-base text-center lg:text-left">
            Founded in 2017, Detroit Automotives is a trusted name in
            manufacturing high-quality air, oil, fuel, and cabin filters for the
            automotive industry. We are committed to precision engineering and
            innovation, ensuring optimal performance and longevity for vehicles.
          </p>

          {isExpanded && (
            <p className="leading-relaxed opacity-70 text-sm lg:text-base text-center lg:text-left">
              Our journey began with a vision to redefine the filtration market
              with efficient, durable, and environmentally responsible products.
              Over the years, we've built a reputation for excellence with our
              cutting-edge technology and stringent quality control measures.
              <br />
              <br />
              <strong>Why Choose Us?</strong>
              <br />
              ✅ Uncompromising Quality: Every product undergoes rigorous
              testing.
              <br />
              ✅ Innovation-Driven Approach: Leveraging the latest advancements.
              <br />
              ✅ Customer-Centric Solutions: Tailored products for unique needs.
              <br />
              As we continue to grow, we remain dedicated to building long-term
              partnerships and contributing to a cleaner, more efficient
              automotive future.
            </p>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md transition duration-300 " // Hide the button on desktop screens
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          <p className="flex items-center gap-3 font-semibold hover:text-red-500 transition duration-300">
            <IoLocation className="text-2xl" />
            Lorem, ipsum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
