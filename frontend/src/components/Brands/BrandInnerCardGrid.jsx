import BrandInnerCard from "./BrandInnerCard";
import fuelfilter from '../../Assets/infoimg1-Photoroom.png'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BrandInnerCardGrid({id}) {
  const products = useSelector(state => state.product.items)
  const [activeBrand,setActiveBrand] = useState([])

  useEffect(()=>{
  setActiveBrand( products.filter((item)=> item.brand.toLowerCase() === id))
  },[id])
      
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
