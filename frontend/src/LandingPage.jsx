import React from "react";
//image importing
import logo from "./Assets/detroitLogo.jpg";
import filter1 from "./Assets/filter1.jpg";
import filter2 from "./Assets/filter2.jpg";
import filter3 from "./Assets/filter3.jpg";
import filter4 from "./Assets/filter4.jpg";
import filter5 from "./Assets/filter5.jpg";
import filter6 from "./Assets/filter6.jpg";
import airFilter from "./Assets/airFilter.jpg";
import cabinFilter from "./Assets/cabinFilter.webp";
import fuelFilter from "./Assets/fuelFilter.jpg";
import oilFilter from "./Assets/oilFilter.jpg";

import containerLogo  from "./Assets/containerImg.png";



// framer imported
import { motion } from "framer-motion";
// react icons
import { MdHome,MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiContacts } from "react-icons/ti"
import { HiUserGroup } from "react-icons/hi2";
import { IoLocation ,IoNavigate } from "react-icons/io5";

// react slider-images
import { Slide, Zoom, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductSlider from "./components/ProductSlider";



function LandingPage() {
  const slideImages = [
    {
      img: filter1,
      caption: `More Than Just a Filter – We Deliver Reliable Performance, Superior Protection, and Cleaner Air for Your Engine, Mile After Mile.`,
    },
    {
      img: filter2,
      caption: "For every mile, drive in style, with filters that last and go the extra mile.",
    },
    {
        img: filter3,
        caption: "Breathe Clean, Live Clean – Air Filters That Protect What Matters.",
      },
  ];

  return (
    <>
      <section className="h-screen" id="home">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 h-20 shadow-lg font-myFont text-xl">
          <img src={logo} className="h-16 ml-16" alt="Company Logo" />
          <div className="hidden sm:flex flex-row gap-16 items-center pr-16 text-blue-900">
            <a href="#home" className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500">
             <MdHome size={30} /> Home
            </a>
            <a href="#products" className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500">
              <MdOutlineProductionQuantityLimits     size={30}/>  Products
            </a>
            <a href="#about" className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500">
             <HiUserGroup size={30} /> About
            </a>
            <a href="#contact" className=" flex flex-row  items-center gap-1 hover:underline  hover:text-red-500">
                <TiContacts size={30}/>  Contact Us 
            </a>
          </div>
        </header>

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
                    <div class="flex flex-col gap-2 items-start  text-xl">
                      <motion.p
                        initial={{opacity:0 , y:-100}}
                        animate={{opacity:1 , y:0}}
                        transition={{duration:1 , ease:"easeOut" , delay:0.2   ,  }} //repeatDelay:3 , repeatType:"loop"  , repeat:Infinity
                        className=" text-3xl sm:text-5xl text-blue-900 font-myFont2 mt-10 ">
                        DETROIT
                        <span className=" text-red-500"> AUTOMOTIVE</span>
                      </motion.p>
                      <div className=" flex flex-row  justify-start gap-2 mt-2">
                        <div class="w-24 h-3 rounded-lg bg-red-500"></div>
                        <div class="w-16 h-3 rounded-lg bg-white"></div>
                      </div>
                    </div>
                    <div className=" flex justify-start ">
                      <motion.p initial={{opacity:0 , y:100}}
                        animate={{opacity:1 , y:0}}
                        transition={{duration:1 , ease:"easeOut" , delay:0.2}} 
                        className=" text-xl sm:text-2xl  mt-2  sm:w-2/6 font-bold text-white">{slideImage.caption}

                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    
      {/* Our Products Section */}
      <section className=" h-fit sm:h-screen flex flex-col items-center justify-center" id="products">
      <div className=" flex mt-6 items-center gap-2 "> 
          <div className=" flex flex-row items-center  justify-start gap-2 mt-2">
                <div className="w-20 h-2.5 rounded-lg bg-red-500"></div>
                <p className=" text-2xl font-myFont2   "> Categories </p>
                <div className="w-16 h-2.5 rounded-lg bg-blue-500"></div>
          </div>
        </div>
      <div id="imgContainer" className=" mt-2 h-full flex flex-row w-full  overflow-hidden">
          
          <div className=" flex flex-row relative z-0 justify-center items-center overflow-hidden ">
            <img
              src={airFilter}
              alt="Filter 4"
              className="flex-1 h-full w-[120px] "  
            />
            <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  sm:text-3xl    " >  Air  filter <br /> <br /><br />  <span  className="  mt-12 text-center flex items-center justify-center"> <IoNavigate size={32}/> </span></h1>

          </div>
          <div className=" flex flex-row relative z-0 justify-center items-center ">
            <img
              src={oilFilter}
              alt="Filter 4"
              className="flex-1 h-full w-[120px] "  
            />
            <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  " >  Oil  filter <br /> <br /><br />  <span  className="  mt-12 text-center flex items-center justify-center"> <IoNavigate size={32}/> </span></h1>

          </div>
          <div className=" flex flex-row relative z-0 justify-center items-center ">
            <img
              src={fuelFilter}
              alt="Filter 4"
              className="flex-1 h-full w-[120px] "  
            />  
            <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  " >  Fuel  filter <br /> <br /><br />  <span  className="  mt-12 text-center flex items-center justify-center"> <IoNavigate size={32}/> </span></h1>
            
          </div>
          <div className=" flex flex-row relative z-0 justify-center items-center ">
            <img
              src={cabinFilter}
              alt="Filter 4"
              className="flex-1 h-full w-[120px] "  
            />
          <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  " >  Cabin  filter <br /> <br /><br />  <span  className="  mt-12  flex items-center justify-center"> <IoNavigate size={32}/> </span></h1>

          </div>
      </div>
      </section>


            {/* About Us section */}

      <section className=" h-screen  ">
        <div id="custom-bg" className=" flex justify-center items-center relative bg-center h-screen  ">
          {/* <!-- Main container --> */}
          <div className="flex flex-col sm:flex-row sm:justify-around  sm:p-6 lg:p-10 gap-5 items-center sm:items-start">
            
            {/* <!-- Left side --> */}
            <div className="flex items-center w-96 relative pr-0 sm:ml-64 p-0">
              {/* <!-- Floating box --> */}
              <div className="absolute z-10 -left-31 sm:-left-40 top-1/2 transform -translate-y-1/2 sm:mt-64 mt-52">
                <div className="flex flex-col justify-center items-center w-52   h-52 sm:w-64 sm:h-56  p-4 gap-4 border-2 bg-white shadow-lg">
                  <img src={containerLogo} alt="Icon" className="h-8 sm:h-12 lg:h-20" />
                  <p className="text-md font-semibold">Lorem ipsum</p>
                  <p className=" text-sm opacity-70 text-center">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                </div>
              </div>
              {/* <!-- Background image --> */}
              <img src={filter3} alt="Portrait" className="absolute inset-0 z-0 sm:h-96 h-72 w-[320px] sm:w-full mt-8 " />
            </div>

            {/* <!-- Right side --> */}
            <div className=" mt-80 sm:mt-0 w-full lg:w-1/2 flex flex-col justify-center items-center sm:items-start gap-6">
              {/* <!-- Title Section --> */}
              <div className=" flex mt-6 items-center gap-2 "> 
                <div className=" flex flex-row items-center  justify-start gap-2 mt-2">
                      <div className="w-20 h-2.5 rounded-lg bg-red-500"></div>
                      <p className=" text-2xl font-myFont2   ">About Us </p>
                      <div className="w-16 h-2.5 rounded-lg bg-blue-500"></div>
                </div>
              </div>
              {/* <!-- Headline --> */}
              <p className="text-2xl lg:text-3xl font-bold leading-snug font-myFont">
                We have provided more <br /> than 10+ years
              </p>
              {/* <!-- Description --> */}
              <p className=" leading-relaxed opacity-60 font-myFont text-sm">
                With 20+ years of experience and over 100 clients, our organization has deep insight and expertise in managing 
                the financial requirements and challenges of clients across industries. Our aim is to help them focus on their core expertise 
                and thereby become efficient value creators in the business sector. No matter the organizational changes or team movements, 
                we ensure that processes and systems work with uninterrupted flow and precision. Our offerings, backed by a team with years 
                of expertise, are well-positioned to fill in the gap of CFOs.
              </p>
              <p className=" flex justify-start items-center gap-3 font-semibold hover:text-red-500 "><img src="Group 406.svg" alt="" className=" rotate-90" /><span className=" text-2xl "> <IoLocation/> </span> Lorem, ipsum. Lorem ipsum dolor sit amet. </p>
            </div>
          </div>
        </div>
      </section>



      <section className=" h-screen flex gap-12 items-center flex-col ">

        <div className=" flex mt-6 items-center gap-2 "> 
          <div className=" flex flex-row items-center  justify-start gap-2 mt-2">
                <div className="w-20 h-2.5 rounded-lg bg-red-500"></div>
                <p className=" text-2xl font-myFont2   ">Products </p>
                <div className="w-16 h-2.5 rounded-lg bg-blue-500"></div>
          </div>
        </div>
          <ProductSlider/>
      </section>

    </>
  );
}

export default LandingPage;
