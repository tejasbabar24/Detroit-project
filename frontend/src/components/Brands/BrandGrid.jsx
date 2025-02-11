import React from "react";
import BrandCard from "./BrandCard";

import tata from '../../Assets/tata.png'

import tataimg from '../../Assets/TataNexon.png'


const brands = [
  { image: tataimg, brandLogo: tata, product: "Brake Pad & Brake Disc", discount: 25 },
];

const BrandGrid = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Top Brands</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={index} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
