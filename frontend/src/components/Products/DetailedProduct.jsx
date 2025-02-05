import React, { useState } from "react";
import airFilter from "../../Assets/airFilter.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function DetailedProduct() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto p-4 min-h-screen">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center">
            
            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={airFilter}
                  alt="Air Filter"
                  className="rounded-lg w-full h-auto max-h-[500px] md:max-h-[600px] object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="md:w-1/2">
                
                {/* Title Section */}
                <h1 className="text-4xl font-myFont font-bold mb-4 text-center md:text-left">
                  Air Filter
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                  doloribus alias eius ipsa repellendus recusandae id veniam
                  similique quidem! Quae sapiente aliquam repellat illum dicta
                  placeat omnis aut consequatur magnam itaque, sit vitae quis quos,
                  consectetur rem. 
                  {expanded ? (
                    <>
                      Officiis dolores accusamus aliquid tempore
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
                    </>
                  ) : (
                    "..."
                  )}
                </p>

                {/* Read More Button - Visible only on Small Screens */}
                <button
                  className="text-blue-600 font-semibold mt-2 md:hidden"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>

                {/* Enquiry Button */}
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Enquiry Form
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailedProduct;
