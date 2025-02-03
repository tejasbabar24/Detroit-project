import React from 'react'

function About() {
  return (
    <section className=" h-screen " id="about">
            <div
              id="custom-bg"
              className=" flex justify-center items-center relative bg-center h-screen  "
            >
              {/* <!-- Main container --> */}
              <div className="flex flex-col sm:flex-row sm:justify-around  sm:p-6 lg:p-10 gap-5 items-center sm:items-start">
                {/* <!-- Left side --> */}
                <div className="flex items-center w-96 relative pr-0 sm:ml-64 p-0">
                  {/* <!-- Floating box --> */}
                  <div className="absolute z-10 -left-31 sm:-left-40 top-1/2 transform -translate-y-1/2 sm:mt-64 mt-52">
                    <div className="flex flex-col justify-center items-center w-52   h-52 sm:w-64 sm:h-56  p-4 gap-4 border-2 bg-white shadow-lg">
                      <img
                        src={containerLogo}
                        alt="Icon"
                        className="h-8 sm:h-12 lg:h-20"
                      />
                      <p className="text-md font-semibold">Lorem ipsum</p>
                      <p className=" text-sm opacity-70 text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua."
                      </p>
                    </div>
                  </div>
                  {/* <!-- Background image --> */}
                  <img
                    src={filter3}
                    alt="Portrait"
                    className="absolute inset-0 z-0 sm:h-96 h-72 w-[320px] sm:w-full mt-8 "
                  />
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
                  Welcome to Detroit Automotives!
                  </p>
                  {/* <!-- Description --> */}
                  <p className=" leading-relaxed opacity-60 font-myFont text-sm">
                     Founded in 2017, Detroit
                    Automotives is a trusted name in the manufacturing of
                    high-quality air filters, oil filters, fuel filters, and cabin
                    filters for the automotive industry. With a commitment to
                    precision engineering and innovation, we deliver reliable
                    filtration solutions that ensure optimal performance and
                    longevity for vehicles. ,<br /> Our journey began with a vision to
                    redefine the filtration market with products that combine
                    efficiency, durability, and environmental responsibility. Over
                    the years, we have established ourselves as a preferred choice
                    for automotive manufacturers and aftermarket distributors,
                    thanks to our focus on cutting-edge technology and stringent
                    quality control measures. <br /> At Detroit Automotives, we pride
                    ourselves on: <br /> Uncompromising Quality: Every product undergoes
                    rigorous testing to meet and exceed industry standards. <br />
                    Innovation-Driven Approach: Leveraging the latest advancements
                    to deliver superior performance and sustainability. <br />
                    Customer-Centric Solutions: Tailored products and services
                    designed to meet the unique needs of our clients. <br /> As we continue
                    to grow, we remain dedicated to building long-term partnerships
                    and contributing to a cleaner, more efficient automotive future.
                    Choose Detroit Automotives for reliability, innovation, and
                    excellence in filtration technology. <br /> Your trust
                    drives us forward!
                  </p>
                  <p className=" flex justify-start items-center gap-3 font-semibold hover:text-red-500 ">
                    <img src="Group 406.svg" alt="" className=" rotate-90" />
                    <span className=" text-2xl ">
                      {" "}
                      <IoLocation />{" "}
                    </span>{" "}
                    Lorem, ipsum. Lorem ipsum dolor sit amet.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}

export default About
