import React from 'react'
import { useNavigate } from 'react-router-dom';
import airFilter from "../../Assets/airFilter.jpg";
import cabinFilter from "../../Assets/cabinFilter.webp";
import fuelFilter from "../../Assets/fuelFilter.jpg";
import oilFilter from "../../Assets/oilFilter.jpg";
import {
    IoNavigate
  } from "react-icons/io5";
function Categories() {
  const navigate = useNavigate();

  return (
    <section
    className=" h-fit sm:h-screen flex flex-col items-center justify-center"
    id="products"
  >
    <div className=" flex mt-6 items-center gap-2 ">
      <div className=" flex flex-row items-center  justify-start gap-2 mt-2">
        <div className="w-20 h-2.5 rounded-lg bg-red-500"></div>
        <p className=" text-2xl font-myFont2   "> Categories </p>
        <div className="w-16 h-2.5 rounded-lg bg-blue-500"></div>
      </div>
    </div>
    <div
      id="imgContainer"
      className=" mt-2 h-full flex flex-row w-full  overflow-hidden"
    >
    
      <div className=" flex flex-row relative z-0 justify-center items-center overflow-hidden " onClick={() => navigate(`/category`)}>
        <img
          src={airFilter}
          alt="Filter 4"
          className="flex-1 h-full w-[120px] "
        />
        <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  sm:text-3xl    ">
          {" "}
          Air filter <br /> <br />
          <br />{" "}
          <span className="  mt-12 text-center flex items-center justify-center">
            {" "}
            <IoNavigate size={32} />{" "}
          </span>
        </h1>
      </div>
      <div className=" flex flex-row relative z-0 justify-center items-center " onClick={() => navigate(`/category`)}>
        <img
          src={oilFilter}
          alt="Filter 4"
          className="flex-1 h-full w-[120px] "
        />
        <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  ">
          {" "}
          Oil filter <br /> <br />
          <br />{" "}
          <span className="  mt-12 text-center flex items-center justify-center ">
            {" "}
            <IoNavigate size={32} color="s" />{" "}
          </span>
        </h1>
      </div>
      <div className=" flex flex-row relative z-0 justify-center items-center " onClick={() => navigate(`/category`)}>
        <img
          src={fuelFilter}
          alt="Filter 4"
          className="flex-1 h-full w-[120px] "
        />
        <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  ">
          {" "}
          Fuel filter <br /> <br />
          <br />{" "}
          <span className="  mt-12 text-center flex items-center justify-center">
            {" "}
            <IoNavigate size={32} />{" "}
          </span>
        </h1>
      </div>
      <div className=" flex flex-row relative z-0 justify-center items-center " onClick={() => navigate(`/category`)}>
        <img
          src={cabinFilter}
          alt="Filter 4"
          className="flex-1 h-full w-[120px] "
        />
        <h1 className=" flex flex-col justify-center  items-center z-10 absolute font-myFont2  text-3xl  ">
          {" "}
          Cabin filter <br /> <br />
          <br />{" "}
          <span className="  mt-12  flex items-center justify-center">
            {" "}
            <IoNavigate size={32} />{" "}
          </span>
        </h1>
      </div>
    </div>
  </section>
  )
}

export default Categories
