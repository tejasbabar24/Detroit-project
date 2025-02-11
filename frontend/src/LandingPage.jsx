import React, { useState } from "react";
import filter1 from "./Assets/filter1.jpg";
import filter2 from "./Assets/filter2.jpg";
import filter3 from "./Assets/filter3.jpg";


import ContactForm from "./components/ContactForm/ContactForm";
// framer imported
import { motion } from "framer-motion";


// react slider-images
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import WhatWeOffer from "./components/whatWeOffer/WhatWeOffer";
import BrandGrid from "./components/Brands/BrandGrid";

function LandingPage() {

  const slideImages = [
    {
      img: filter1,
      caption: `More Than Just a Filter – We Deliver Reliable Performance, Superior Protection, and Cleaner Air for Your Engine, Mile After Mile.`,
    },
    {
      img: filter2,
      caption:
        "For every mile, drive in style, with filters that last and go the extra mile.",
    },
    {
      img: filter3,
      caption:
        "Breathe Clean, Live Clean – Air Filters That Protect What Matters.",
    },
  ];

  return (
    <>

      <section className="h-screen " id="home">
        {/* Header Section */}
       
       <Header/>

        {/* Slideshow image animation */}
        <div id="bgImg" className="h-full w-full">
          <Slide
            autoplay={true}
            duration={3000}
            transitionDuration={1000}
            infinite={true}
          >
            {slideImages.map((slideImage, index) => (
              <div
                key={index}
                className=" h-screen w-full flex  justify-center "
              >
                <div
                  className=" w-full bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${slideImage.img})`,
                    height: "calc(100% - 80px)",
                  }}
                >
                  <div className="flex items-top flex-col h-full bg-black bg-opacity-40 text-white p-14">
                    {/* this our slogan display                  */}
                    <div className="flex flex-col gap-2 items-start  text-xl">
                      <motion.p
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }} //repeatDelay:3 , repeatType:"loop"  , repeat:Infinity
                        className=" text-3xl sm:text-5xl text-blue-900 font-myFont2 mt-10 "
                      >
                        DETROIT
                        <span className=" text-red-500"> AUTOMOTIVE</span>
                      </motion.p>
                      <div className=" flex flex-row  justify-start gap-2 mt-2">
                        <div className="w-24 h-3 rounded-lg bg-red-500"></div>
                        <div className="w-16 h-3 rounded-lg bg-white"></div>
                      </div>
                    </div>
                    <div className=" flex justify-start ">
                      <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className=" text-xl sm:text-2xl  mt-2  sm:w-2/6 font-bold text-white"
                      >
                        {slideImage.caption}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>

      <WhatWeOffer/>

       {/* About Us section */}

       <About/>


      {/* Our Products Section */}
      
      <Categories/>
      
        <ContactForm />

      {/* <section className=" h-screen flex gap-12 items-center flex-col bg-[rgba(244,215,147,0.78)]  ">
        <div className=" flex mt-6 items-center gap-2 ">
          <div className=" flex flex-row items-center  justify-start gap-2 mt-2">
            <div className="w-20 h-2.5 rounded-lg bg-red-500"></div>
            <p className=" text-2xl font-myFont2   ">Products </p>
            <div className="w-16 h-2.5 rounded-lg bg-blue-500"></div>
          </div>
        </div>
        <ProductSlider />
      </section> */}

      <BrandGrid/>

      {/* footer is here  */}
      <Footer />
    </>
  );
}

export default LandingPage;
