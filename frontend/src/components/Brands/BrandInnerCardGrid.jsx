import BrandInnerCard from "./BrandInnerCard";
import fuelfilter from '../../Assets/infoimg1-Photoroom.png'

function BrandInnerCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4   bg-gray-100 p-10 gap-4">
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />
      <BrandInnerCard productId='DTF2624' category='fuel filter' img={fuelfilter} brand='tata' model='harrier' price='1200' />

    </div>
  );
}

export default BrandInnerCardGrid;
