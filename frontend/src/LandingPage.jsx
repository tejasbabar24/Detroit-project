import React from "react";
//image importing
import logo from "./Assets/detroitLogo.jpg";
import filter1 from "./Assets/filter1.jpg";
import filter2 from "./Assets/filter2.jpg";
import filter3 from "./Assets/filter3.jpg";
import filter4 from "./Assets/filter4.jpg";
import filter5 from "./Assets/filter5.jpg";
import filter6 from "./Assets/filter6.jpg";

// framer imported
import { motion } from "framer-motion";
// react icons
import { MdHome,MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiContacts } from "react-icons/ti"
import { HiUserGroup } from "react-icons/hi2";

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
      <section className="  flex flex-col items-center justify-center" id="products">
      <div className=" flex mt-4 items-center gap-2"> 
        <div className=" flex flex-row  justify-start gap-2 mt-2">
              <div class="w-20 h-2 rounded-lg bg-red-500"></div>
              <div class="w-10 h-2 rounded-lg bg-blue-500"></div>
        </div>
            <p className=" text-2xl font-myFont ">Categories </p>
      </div>
      <div id="imgContainer" className="flex flex-row w-full  overflow-hidden">
            <img
              src={filter4}
              alt="Filter 4"
              className="flex-1 h-full w-[120px] "  
            />
            <img
              src={filter1}
              alt="Filter 1"
              className="flex-1 h-full w-[120px] "
            />
            <img
              src={filter5}
              alt="Filter 5"
              className="flex-1 h-full w-[120px] "
            />
            <img
              src={filter6}
              alt="Filter 6"
              className="flex-1 h-full w-[120px] "
            />
      </div>

      <div className=" flex mt-4 items-center gap-2"> 
        <div className=" flex flex-row  justify-start gap-2 mt-2">
              <div class="w-20 h-2 rounded-lg bg-red-500"></div>
              <div class="w-10 h-2 rounded-lg bg-blue-500"></div>
        </div>
            <p className=" text-2xl font-myFont   ">Products </p>
      </div>
      <div id="imgContainer" className="flex flex-row w-full h-[500px] overflow-hidden"></div>
        <ProductSlider/>
      </section>

    </>
  );
}

export default LandingPage;
