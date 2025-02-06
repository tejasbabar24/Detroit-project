import React, { useState } from "react";

function AddProduct() {
  const [image, setImage] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  // Handle File Upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Drag & Drop Handlers
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full p-4">
      <form className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg border-t-4 border-[#FAD02E] h-full overflow-y-auto">
        <h1 className="text-center text-xl font-bold text-[#008080]">Add Product</h1>

        <div className="space-y-4">
          {/* Category Select */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select Category</label>
            <select className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]">
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Furniture</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Product Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product Title</label>
            <input
              type="text"
              className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
              placeholder="Enter product title"
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product Description</label>
            <textarea
              className="border rounded-md p-2 mt-1 h-20 resize-none focus:border-[#FAD02E] focus:ring-[#FAD02E]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Price & Stock Fields */}
          <div className="flex gap-4">
            {/* Price Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Enter price"
              />
            </div>

            {/* Stock Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Stock</label>
              <input
                type="number"
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Available stock"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div
            className={`border-2 ${
              dragOver ? "border-[#FAD02E]" : "border-gray-300"
            } border-dashed rounded-md p-4 flex flex-col items-center justify-center text-gray-500`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded Preview" className="h-24 object-contain" />
            ) : (
              <>
                <p className="text-center text-sm">Drag & drop an image</p>
                <label className="cursor-pointer text-[#008080] font-semibold">
                  Click to upload
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              </>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#008080] text-white p-2 rounded-md hover:bg-[#006666] transition font-semibold">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
