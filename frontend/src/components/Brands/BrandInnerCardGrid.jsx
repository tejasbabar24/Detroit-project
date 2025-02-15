import BrandInnerCard from "./BrandInnerCard";
import fuelfilter from '../../Assets/infoimg1-Photoroom.png'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function BrandInnerCardGrid() {
  const products = useSelector(state => state.product.items)
  const {id} = useParams()

  let activeBrand =  products.filter((item)=> item.brand.toLowerCase() === id)


      
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4   bg-gray-100 p-10 gap-4">
      {
        activeBrand.map((item)=>(
          <BrandInnerCard product={item} key={item._id}/>

        ))
      }

    </div>
  );
}

export default BrandInnerCardGrid;
