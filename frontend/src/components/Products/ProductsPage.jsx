import React, { useEffect, useState } from "react";
import airFilter from "../../Assets/airFilter.jpg";
import cabinFilter from "../../Assets/cabinFilter.webp";
import fuelFilter from "../../Assets/fuelFilter.jpg";
import oilFilter from "../../Assets/oilFilter.jpg";

import ProductsCards from "./ProductsCards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DownloadBrochure from "./DownloadBrochure";
import ContactLinks from "./ContactLinks";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [price, setPrice] = useState(2500); 
  const [compatibleBrand, setCompatibleBrand] = useState(""); 
  const [typeVechicle, setTypeVechicle] = useState(""); 
  const [searchByPart, setSearchByPart] = useState(""); 
  const { name } = useParams();

  let isScreenSmall = window.innerWidth;
  const products = useSelector((state) => state.product.items);
  const arrObj = [
    {
      catName: "Air Filter",
      img: airFilter,
    },
    {
      catName: "Oil Filter",
      img: oilFilter,
    },
    {
      catName: "Fuel Filter",
      img: fuelFilter,
    },
    {
      catName: "Cabin Filter",
      img: cabinFilter,
    },
  ];

  const activeCat = arrObj.filter((item) => item.catName === name);
  useEffect(() => {
    setActiveCategory(products.filter((item) => item.categoryName === name));    
  },[name]);  
  
  useEffect(() => {
    setFilteredProducts(products.filter((item) => item.categoryName === name));
  }, [name, products]);

  const handleFilters = () => {
    let updatedProducts = products.filter((item) => item.categoryName === name);

    // if (typeVechicle) {
    //   updatedProducts = updatedProducts.filter((item) => item.vehicleType === typeVechicle);
    // }
    if (compatibleBrand) {
      updatedProducts = updatedProducts.filter((item) => item.brand.toLowerCase() === compatibleBrand.toLowerCase());
      
    }
    if (price) {
      updatedProducts = updatedProducts.filter((item) => item.price <= price);
    console.log(updatedProducts);

    }

    setFilteredProducts(updatedProducts);
  };

  const handleSearch = () => {
    if (searchByPart) {
      setFilteredProducts(products.filter((item) => item.productId.includes(searchByPart)));
    }
  };
  return (
    <>
      <Header condition ={false}  />
      <div>
        {/* Banner  section */}
        <div
          className="relative flex justify-center items-end h-96 w-full bg-cover bg-center p-32"
          style={{
            backgroundImage: `url(${activeCat[0]?.img})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative font-myFont2 text-white text-3xl sm:text-7xl border-b-2 w-full text-start pb-8">
            {name}
          </div>
        </div>

        {/* Product  Cards section     */}
        <div className=" flex sm:flex-row flex-col   ">
          {/* left side */}
          <div className=" flex flex-col w-full sm:w-1/3 border-r-2 border-gray-200  justify-start items-center p-8 sm:p-12 gap-6 ">
            {/* search bar */}
            <div className="flex items-center bg-white shadow-md rounded-lg  w-full max-w-lg">
              <input 
                type="text" 
                placeholder="Search by Part Number ..." 
                className="w-full px-4 py-2 text-gray-700 border-none focus:ring-0 focus:outline-none rounded-l-lg"
                value={searchByPart}
                onChange={(e)=>setSearchByPart(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
                onClick={handleSearch}
              >
                🔍 Search
              </button>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800  w-full text-center mb-4 flex items-center gap-2">
                <span className="text-blue-600">🔍</span> Filter By
              </h2>

              {/* Type of Vehicle */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2"> Type of Vehicle:</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  name=""  
                  value={typeVechicle}
                  onChange={(e)=>setTypeVechicle(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="two wheeler">Two Wheeler</option>
                  <option value="three wheeler">Three Wheeler</option>
                  <option value="four wheeler">Four Wheeler</option>
                </select>
              </div>

              {/* Compatible With */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2"> Compatible With:</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  name="compatibleBrand"
                  value={compatibleBrand}
                  onChange={(e)=>setCompatibleBrand(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="tata">Tata</option>
                  <option value="honda">Honda</option>
                </select>
              </div>
              {/* price selector */}
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg w-full max-w-md mx-auto">
                <h2 className="text-lg font-semibold text-blue-900 mb-3">Filter By Price</h2>

                {/* Price Range Slider */}
                <input
                  type="range"
                  min="11"
                  max="5000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full appearance-none bg-blue-500 h-1 rounded-lg cursor-pointer"
                  style={{
                    accentColor: "blue",
                  }}
                />

                {/* Price Display */}
                <div className="flex justify-between text-gray-800 text-sm mt-2">
                  <span>₹11</span>
                  <span className="font-bold text-blue-900">₹{price}</span>
                  <span>₹5000</span>
                </div>

              </div>

              {/* Filter Button */}
              <button onClick={handleFilters} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition mt-2">
                
                Apply Filters
              </button>
            </div>


            {isScreenSmall < 640 ? null : (
              <>
                <ContactLinks /> <DownloadBrochure />{" "}
              </>
            )}
          </div>
          {/* right side  */}

          <div className="grid sm:grid-cols-1  grid-cols-1 md:grid-cols-3 gap-10 p-8  place-items-start  ">
            {filteredProducts.map((item) => (
              <ProductsCards key={item._id} product={item} />
            ))}
          </div>
          {isScreenSmall < 640 ? (
            <div className=" p-6 ">
              <DownloadBrochure />
            </div>
          ) : null}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
