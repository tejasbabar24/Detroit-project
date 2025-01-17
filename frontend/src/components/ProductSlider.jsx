import React from 'react'
import '../index.css'
// imported Swiper and its styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
//icons
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";
// images
import filter1 from '../Assets/filter1.jpg'
import filter2 from "../Assets/filter2.jpg";
import filter3 from "../Assets/filter3.jpg";
import filter4 from "../Assets/filter4.jpg";
import filter5 from "../Assets/filter5.jpg";
import filter6 from "../Assets/filter6.jpg";

function ProductSlider() {
    const isSmallSize = window.innerWidth
    
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
    
    <div className="swiper_container w-full ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={isSmallSize < 640 ? 1 : 3}
        autoplay={true}

        coverflowEffect={{
          rotate: 30, // Adjusted for a more noticeable coverflow effect
          stretch: 0, 
          depth: 200, // Increased depth for better 3D perspective
          modifier: 1, // Lower modifier to reduce the intensity of the effect
          slideShadows: true, // Enable shadows on slides
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {/* Add Swiper Slides */}
        <SwiperSlide>
          <img src={filter1} alt="Filter 1" className="rounded-lg shadow-lg  "  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={filter2} alt="Filter 2" className="rounded-lg shadow-lg " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={filter3} alt="Filter 3" className="rounded-lg shadow-lg " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={filter4} alt="Filter 4" className="rounded-lg shadow-lg " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={filter5} alt="Filter 5" className="rounded-lg shadow-lg " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={filter6} alt="Filter 6" className="rounded-lg shadow-lg " />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* Slider Controllers */}
    <div className="flex justify-evenly w-full mt-4 items-center">
      <button className="swiper-btn-prev  bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600">
        <FaArrowLeft />
      </button>

      <button className="swiper-btn-next bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600">
        <FaArrowRight />
      </button>
      
    </div>
  </div> 
  )
}

export default ProductSlider
