import React from "react";
import BrandCard from "./BrandCard";

import tata from '../../Assets/tata.png'
import  maruti from '../../Assets/maruti suzuki.png'
import hyundaiLogo from '../../Assets/creta logo.png'
import hondaLogo from '../../Assets/honda logo.png'
import bajajLogo from '../../Assets/bajaj logo.png'
import mahindraLogo from '../../Assets/mahindra logo.png'
import fordLogo from '../../Assets/ford logo.png'
import chevroletLogo from '../../Assets/cheverolet.png'
import fiatLogo from '../../Assets/fiat logo.png'
import nissantLogo from '../../Assets/nissan logo.png'
import volkswagenLogo from '../../Assets/volkswagen logo.png'
import toyotaLogo from '../../Assets/toyota logo.png'
import skodaLogo from '../../Assets/skoda logo.png'
import ashokleylandLogo from '../../Assets/ashok leyland logo.png'



import tataimg from '../../Assets/TataNexon.png'
import marutiCar from '../../Assets/maruti suzuki car.png'
import hyundaiCar from '../../Assets/creta car.png'
import hondaCar from '../../Assets/honda car.png'
import bajajCar from '../../Assets/bajaj car.png'
import mahindraCar from '../../Assets/mahindra car.png'
import fordCar from '../../Assets/ford car.png'
import chevroletCar from '../../Assets/cheverlet car.png'
import fiatCar from '../../Assets/fiat car.png'
import nissantCar from '../../Assets/nissan car.png'
import volkswagenCar from '../../Assets/volkswagen car.png'
import toyotaCar from '../../Assets/toyota car.png'
import skodaCar from '../../Assets/skoda car.png'
import ashokleylandCar from '../../Assets/ashok leyland car (1).png'



const brands = [
  { image: tataimg, brandLogo: tata, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: marutiCar, brandLogo: maruti, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: hyundaiCar, brandLogo: hyundaiLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: hondaCar, brandLogo: hondaLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: bajajCar, brandLogo: bajajLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: mahindraCar, brandLogo: mahindraLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: fordCar, brandLogo: fordLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: chevroletCar, brandLogo: chevroletLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: nissantCar, brandLogo: nissantLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: volkswagenCar, brandLogo: volkswagenLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: toyotaCar, brandLogo: toyotaLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: skodaCar, brandLogo: skodaLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: fiatCar, brandLogo: fiatLogo, product: "Brake Pad & Brake Disc", discount: 25 },
  { image: ashokleylandCar, brandLogo: ashokleylandLogo, product: "Brake Pad & Brake Disc", discount: 25 },
];

const BrandGrid = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Top Brands</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={index} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
