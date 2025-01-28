import React from "react";
import airFilter from "./Assets/airFilter.jpg";

function DetailedProduct() {
  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-center">
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={airFilter}
              alt="Air Filter"
              className="rounded-lg w-full h-[600px] object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="md:w-1/2">
          {/* Title Section */}
         <h1 className="text-4xl font-myFont font-bold mb-4 text-center">Air Filter</h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              doloribus alias eius ipsa repellendus recusandae id veniam
              similique quidem! Quae sapiente aliquam repellat illum dicta
              placeat omnis aut consequatur magnam itaque, sit vitae quis quos,
              consectetur rem. Officiis dolores accusamus aliquid tempore
              consequuntur quae deleniti odit quisquam, impedit quo alias magni
              dignissimos iure voluptate repellat quam repellendus neque.
              Totam, inventore consequatur soluta iusto esse natus
              voluptatibus, delectus modi quae temporibus accusamus molestias
              dolores, commodi alias! Ab maiores consequuntur labore
              architecto ad, enim alias non incidunt dolore, neque beatae optio
              tenetur voluptatem magni! Corporis qui aperiam repellendus
              adipisci voluptatum dolore tempora sint cumque nulla impedit
              ipsum illum amet id perspiciatis voluptatibus animi, nam
              molestias sit labore veniam.
            </p>
            <button  className=""  >
                Enquiry Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedProduct;
