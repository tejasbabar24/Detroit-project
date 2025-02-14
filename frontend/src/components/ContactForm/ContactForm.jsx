import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Side - Contact Details */}
        <div className="bg-white flex flex-col justify-evenly items-start p-6 rounded-2xl">
          <div>
          <h2 className="sm:text-7xl text-5xl font-bold text-gray-800 sm:mb-4 mb-6">Contact Us</h2>
          <p className="sm:text-2xl text-xl text-gray-600 mb-6">
            Whether you have questions about our services, need support, or want to
            share your feedback, our dedicated team is here to assist you every step
            of the way.
          </p>
          </div>
          <div className=" grid sm:grid-cols-2 sm:gap-y-10 sm:gap-x-20 gap-4">
            <div className="space-x-3 flex">
              <span className="text-blue-600 bg-[#3e829a] p-1 rounded-lg">
              <MdEmail className="w-10 h-10 text-white"/>
              </span>
              <div className="flex flex-col">
              <span className="font-bold">Email</span>
              <p className="text-gray-700">Info@detroitautomotives.com</p>
              </div>
            </div>
            <div className="space-x-3 flex">
            <span className="text-blue-600 bg-[#3e829a] p-1 rounded-lg">
              <TbWorld className="w-10 h-10 text-white"/>
              </span>
              <div className="flex flex-col">
              <span className="font-bold">Website</span>
              <p className="text-gray-700">reallygreatsite.com</p>
              </div>
            </div>
            <div className="space-x-3 flex">
            <span className="text-blue-600 h-12 bg-[#3e829a] p-1 rounded-lg">
              <FaPhoneAlt className="w-10 h-8 text-white"/>
              </span>
              <div className="flex flex-col">
              <span className="font-bold">Phone</span>
              <p className="text-gray-700">+123-456-7890</p>

              </div>
            </div>
            <div className="space-x-3 flex">
            <span className="text-blue-600 h-12 bg-[#3e829a] p-1 rounded-lg">
              <FaLocationDot className="w-10 h-8 text-white"/>
              </span>

              <div className="flex flex-col">
              <span className="font-bold">Location</span>
              <p className="text-gray-700">123 Anywhere St, Any City</p>

              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#162651] text-white p-12 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold mb-8">Get in touch.</h2>
          <form className="space-y-4 flex flex-col">
            <div>
            <label htmlFor="" className="opacity-80">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-2xl border-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            </div>
            <div>
            <label htmlFor="" className="opacity-80">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-2xl border-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            </div>
            <div>
            <label htmlFor="" className="opacity-80">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-2xl border-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            </div>
            <div>
            <label htmlFor="" className="opacity-80">
              Message
            </label>
            <textarea
              className="w-full p-3 rounded-2xl border-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              rows="4"
            ></textarea>
            </div>
            <button
              type="submit"
              className=" w-36 bg-[#3e829a] hover:bg-blue-700 transition duration-300 text-white p-2 rounded-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
