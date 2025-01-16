import React from 'react';
import logo from './Assets/detroitLogo.jpg';
import filter1 from './Assets/filter1.jpg';
import filter2 from './Assets/filter2.jpg';
import { Slide , Zoom , Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function LandingPage() {
  const slideImages = [
    {
      img: filter1,
      caption: 'Slide 1',
    },
    {
      img: filter2,
      caption: 'Slide 2',
    },
  ];

  return (
    <>
      <section className="h-screen" id="home">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 h-20 shadow-lg font-myFont text-xl">
          <img src={logo} className="h-16 ml-16" alt="Company Logo" />
          <div className="flex flex-row gap-16 items-center pr-16">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </div>
        </header>

        {/* Slideshow Section */}
        <div id="bgImg" className="h-full w-full">
          <Slide
            autoplay={true}
            duration={3000}
            transitionDuration={1000}
            infinite={true}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index} className="h-screen w-full flex items-center justify-center">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slideImage.img})`,
                  }}
                >
                  <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
                    <span className="text-white text-3xl font-bold">{slideImage.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
